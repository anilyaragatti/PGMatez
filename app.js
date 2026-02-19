const express = require("express")
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');




app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));




main().then((res) => {
  console.log("connecting to mongose")
})
  .catch(err => console.log("error connecting to mongoose" + err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PGMate');
}

//index route
app.get("/listing", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index", { allListing });
});

//new route
app.get("/listing/new", (req, res) => {
  res.render("listings/new")
});

//saved route
app.get("/saved", (req, res) => {
  res.render("listings/saved");
});

//profile route
app.get("/profile", (req, res) => {
  res.render("listings/profile");
});


// show route
app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing })

});

//edit route
app.get("/listing/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit", { listing })
});

// Update route
app.put("/listing/:id", async (req, res) => {
  const { id } = req.params;
  let listing = req.body.listing;

  // Combine gate time fields into a single string
  const { gateHour, gateMinute, gatePeriod } = listing.overview || {};
  if (gateHour && gateMinute && gatePeriod) {
    listing.overview.gateTime = `${gateHour}:${gateMinute} ${gatePeriod}`;
  } else {
    listing.overview.gateTime = "Not mentioned";
  }
  delete listing.overview.gateHour;
  delete listing.overview.gateMinute;
  delete listing.overview.gatePeriod;

  await Listing.findByIdAndUpdate(id, listing);
  res.redirect(`/listing/${id}`);
});

//create route
app.post("/listing", async (req, res) => {
  let listing = req.body.listing;


  const { gateHour, gateMinute, gatePeriod } = listing.overview || {};// Extract the individual time components from the overview object

  if (gateHour && gateMinute && gatePeriod) {
    listing.overview.gateTime = `${gateHour}:${gateMinute} ${gatePeriod}`;
  } else {
    listing.overview.gateTime = "Not mentioned";
  }

  delete listing.overview.gateHour; // Remove the individual time components from the overview object
  delete listing.overview.gateMinute;
  delete listing.overview.gatePeriod;


  const newListing = new Listing(listing); // Create a new instance of the Listing model with the form data
  await newListing.save();//

  res.redirect("/listing");
});

app.delete("/listing/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});



app.get("/", async (req, res) => {
  res.send("ANIL YARAGATTI")
});

let port = 1009;
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})