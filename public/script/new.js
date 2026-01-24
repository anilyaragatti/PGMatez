
const addImageBtn = document.getElementById("addImageBtn");
const imageInputs = document.getElementById("imageInputs");

let imageCount = 1;
const MAX_IMAGES = 10;

addImageBtn.addEventListener("click", () => {
    if (imageCount >= MAX_IMAGES) {
        alert("You can add maximum 10 images");
        return;
    }

    const row = document.createElement("div");
    row.className = "form-group image-row";

    row.innerHTML = `
      <input 
        type="url" 
        name="listing[images][]" 
        placeholder="Paste image URL"
      >
      <button type="button" class="remove-btn">✕</button>
    `;

    imageInputs.appendChild(row);
    imageCount++;

    // Remove button logic
    row.querySelector(".remove-btn").addEventListener("click", () => {
        row.remove();
        imageCount--;
    });
});


//for pricing 
const addSharingBtn = document.getElementById("addSharingBtn");
const sharingContainer = document.getElementById("sharingContainer");

let sharingCount = 1;
const MAX_SHARING = 5;

addSharingBtn.addEventListener("click", () => {
    if (sharingCount >= MAX_SHARING) {
        alert("Maximum 5 sharing options allowed");
        return;
    }

    const row = document.createElement("div");
    row.className = "sharing-row";

    row.innerHTML = `
    <select name="pricing[sharing][${sharingCount}][type]" required>
      <option value="">Select sharing</option>
      <option>Single</option>
      <option>Double</option>
      <option>Triple</option>
      <option>Four</option>
      <option>Five</option>
    </select>

    <input
      type="number"
      name="pricing[sharing][${sharingCount}][price]"
      placeholder="Price"
      required
    >

    <button type="button" class="remove-btn">✕</button>
  `;

    // REMOVE BUTTON
    row.querySelector(".remove-btn").addEventListener("click", () => {
        row.remove();
        sharingCount--;
    });

    sharingContainer.appendChild(row);
    sharingCount++;
});



//   <!-- amenities 
const addAmenityBtn = document.getElementById("addAmenityBtn");
const customAmenities = document.getElementById("customAmenities");

let customAmenityCount = 0;
const MAX_CUSTOM_AMENITIES = 3;

addAmenityBtn.addEventListener("click", () => {
    if (customAmenityCount >= MAX_CUSTOM_AMENITIES) {
        alert("You can add only 3 custom amenities");
        return;
    }

    const div = document.createElement("div");
    div.className = "custom-amenity-row";

    div.innerHTML = `
      <input 
        type="text" 
        name="listing[amenities][]" 
        placeholder="e.g. Gym, Lift, RO Water"
      >
      <button type="button" class="remove-btn">✕</button>
    `;

    // REMOVE BUTTON LOGIC
    div.querySelector(".remove-btn").addEventListener("click", () => {
        div.remove();
        customAmenityCount--;
    });

    customAmenities.appendChild(div);
    customAmenityCount++;
});



//   <!-- for rules -->
const addRuleBtn = document.getElementById("addRuleBtn");
const customRules = document.getElementById("customRules");

let ruleCount = 0;
const MAX_RULES = 3;

addRuleBtn.addEventListener("click", () => {
    if (ruleCount >= MAX_RULES) {
        alert("You can add only 3 custom rules");
        return;
    }

    const div = document.createElement("div");
    div.className = "custom-rule-row";

    div.innerHTML = `
      <input
        type="text"
        name="listing[rules][]"
        placeholder="e.g. Silence after 10 PM"
      >
      <button type="button" class="remove-btn">✕</button>
    `;

    div.querySelector(".remove-btn").addEventListener("click", () => {
        div.remove();
        ruleCount--;
    });

    customRules.appendChild(div);
    ruleCount++;
});
