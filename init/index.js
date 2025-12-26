const mongoose = require('mongoose');
const Listing = require("../models/listing.js");
const initData = require("./data.js")

main().then((res) => {
    console.log("connecting to mongose")
})
    .catch(err => console.log("error connecting to mongoose" + err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PGMate');
}

const initdata = async()=>{
await Listing.deleteMany({});
 await Listing.insertMany(initData.data)
}
initdata();