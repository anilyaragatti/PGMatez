const sampleListing = [
  {
    title: "Sri Sai Comfort PG",
    description: "Well-maintained PG with all basic amenities, suitable for students and working professionals.",
    gender: "Boys",
    location: {
      city: "Bangalore",
      area: "BTM Layout",
      landmark: "Near Silk Board Junction"
    },
    pricing: {
      rent: 8500,
      deposit: 15000,
      sharing: [
        {type: "single", price:1000},
        { type: "Double", price: 8500 },
        { type: "Triple", price: 7200 },
        { type: "Four", price: 6500 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",

    ],
    overview: {
      food: "Yes",
      gateTime: "10:30 PM"
    },
    amenities: [
      "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking",
       "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking",
       "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking"
    ],
    rules: [
      "No smoking",
      "No alcohol",
      "Visitors allowed till 8 PM"
    ],
    owner: {
      name: "Anil Kumar",
      phone: "9876543210"
    }
  },

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553444839-bc6c8f1a78a6?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-bcefe21d9b8d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=60"
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  },


  {
    title: "Sri Sai Comfort PG",
    description: "Well-maintained PG with all basic amenities, suitable for students and working professionals.",
    gender: "Boys",
    location: {
      city: "Bangalore",
      area: "BTM Layout",
      landmark: "Near Silk Board Junction"
    },
    pricing: {
      rent: 8500,
      deposit: 15000,
      sharing: [
        { type: "Double", price: 8500 },
        { type: "Triple", price: 7200 },
        { type: "Four", price: 6500 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    ],
    overview: {
      food: "Yes",
      gateTime: "10:30 PM"
    },
    amenities: [
      "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking"
    ],
    rules: [
      "No smoking",
      "No alcohol",
      "Visitors allowed till 8 PM"
    ],
    owner: {
      name: "Anil Kumar",
      phone: "9876543210"
    }
  },

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553444839-bc6c8f1a78a6?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-bcefe21d9b8d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=60"
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  },




  {
    title: "Sri Sai Comfort PG",
    description: "Well-maintained PG with all basic amenities, suitable for students and working professionals.",
    gender: "Boys",
    location: {
      city: "Bangalore",
      area: "BTM Layout",
      landmark: "Near Silk Board Junction"
    },
    pricing: {
      rent: 8500,
      deposit: 15000,
      sharing: [
        { type: "Double", price: 8500 },
        { type: "Triple", price: 7200 },
        { type: "Four", price: 6500 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    ],
    overview: {
      food: "Yes",
      gateTime: "10:30 PM"
    },
    amenities: [
      "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking"
    ],
    rules: [
      "No smoking",
      "No alcohol",
      "Visitors allowed till 8 PM"
    ],
    owner: {
      name: "Anil Kumar",
      phone: "9876543210"
    }
  },

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553444839-bc6c8f1a78a6?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-bcefe21d9b8d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=60"
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  }

  ,


  {
    title: "Sri Sai Comfort PG",
    description: "Well-maintained PG with all basic amenities, suitable for students and working professionals.",
    gender: "Boys",
    location: {
      city: "Bangalore",
      area: "BTM Layout",
      landmark: "Near Silk Board Junction"
    },
    pricing: {
      rent: 8500,
      deposit: 15000,
      sharing: [
        { type: "Double", price: 8500 },
        { type: "Triple", price: 7200 },
        { type: "Four", price: 6500 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    ],
    overview: {
      food: "Yes",
      gateTime: "10:30 PM"
    },
    amenities: [
      "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking"
    ],
    rules: [
      "No smoking",
      "No alcohol",
      "Visitors allowed till 8 PM"
    ],
    owner: {
      name: "Anil Kumar",
      phone: "9876543210"
    }
  },

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553444839-bc6c8f1a78a6?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-bcefe21d9b8d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=60"
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  },

  {
    title: "Sri Sai Comfort PG",
    description: "Well-maintained PG with all basic amenities, suitable for students and working professionals.",
    gender: "Boys",
    location: {
      city: "Bangalore",
      area: "BTM Layout",
      landmark: "Near Silk Board Junction"
    },
    pricing: {
      rent: 8500,
      deposit: 15000,
      sharing: [
        { type: "Double", price: 8500 },
        { type: "Triple", price: 7200 },
        { type: "Four", price: 6500 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    ],
    overview: {
      food: "Yes",
      gateTime: "10:30 PM"
    },
    amenities: [
      "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking"
    ],
    rules: [
      "No smoking",
      "No alcohol",
      "Visitors allowed till 8 PM"
    ],
    owner: {
      name: "Anil Kumar",
      phone: "9876543210"
    }
  },

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553444839-bc6c8f1a78a6?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-bcefe21d9b8d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=60"
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  },




  {
    title: "Sri Sai Comfort PG",
    description: "Well-maintained PG with all basic amenities, suitable for students and working professionals.",
    gender: "Boys",
    location: {
      city: "Bangalore",
      area: "BTM Layout",
      landmark: "Near Silk Board Junction"
    },
    pricing: {
      rent: 8500,
      deposit: 15000,
      sharing: [
        { type: "Double", price: 8500 },
        { type: "Triple", price: 7200 },
        { type: "Four", price: 6500 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    ],
    overview: {
      food: "Yes",
      gateTime: "10:30 PM"
    },
    amenities: [
      "WiFi",
      "Washing Machine",
      "Power Backup",
      "Hot Water",
      "Parking"
    ],
    rules: [
      "No smoking",
      "No alcohol",
      "Visitors allowed till 8 PM"
    ],
    owner: {
      name: "Anil Kumar",
      phone: "9876543210"
    }
  },

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553444839-bc6c8f1a78a6?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-bcefe21d9b8d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=60"
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  }
  ,

  {
    title: "Green Nest Ladies PG",
    description: "Safe and hygienic PG exclusively for women with home-style food.",
    gender: "Girls",
    location: {
      city: "Bangalore",
      area: "HSR Layout",
      landmark: "Near BDA Complex"
    },
    pricing: {
      rent: 9000,
      deposit: 18000,
      sharing: [
        { type: "Single", price: 12000 },
        { type: "Double", price: 9000 },
        { type: "Triple", price: 7800 }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    ],
    overview: {
      food: "Yes",
      gateTime: "9:30 PM"
    },
    amenities: [
      "WiFi",
      "CCTV",
      "Security",
      "Hot Water",
      "Daily Cleaning"
    ],
    rules: [
      "No male visitors",
      "Gate closes at 9:30 PM",
      "No loud music"
    ],
    owner: {
      name: "Suma Reddy",
      phone: "9123456789"
    }
  }
  ,



];

module.exports = { data: sampleListing };
