const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  location: {
    city: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    landmark: {
      type: String,
      required: true
    }
  },

  pricing: {
    rent: {
      type: Number,
      required: true
    },

    deposit: {
      type: Number,
      default: 0
    },

    sharing: {
      type: [
        {
          type: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          }
        }
      ],
      validate: {
        validator: function (val) {
          return val.length <= 5;
        },
        message: "Maximum 5 sharing options are allowed"
      }
    }
  },

  images: [
    {
      type: String
    }
  ],

  overview: {
    food: {
      type: [String],
      enum: ["Breakfast", "Lunch", "Dinner","Yes","no"],
    default: []
    },
    gateTime: {
      type: String,
      default: "Not mentioned"
    },
    PreferredFor:{
      type:String,
      enum: ["Students", "Working Professionals", "Anyone"],
      default:"Anyone"
    }

  },

  amenities: [
    {
      type: String
    }
  ],

  rules: [
    {
      type: String
    }
  ],

  owner: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }

}, { timestamps: true });

module.exports = mongoose.model("Listing", listingSchema);
