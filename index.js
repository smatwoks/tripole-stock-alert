const axios = require("axios");

async function checkStock() {
try {
const { data } = await axios.get(
"https://tripole.in/products/tripole-walker-pro-60-litre-rucksack-for-trekking-and-hiking-black.js"
);

const variant = data.variants.find(
  v => v.id === 54761702129955
);

if (variant && variant.available) {

  await axios.post(
    "https://ntfy.sh/tripole-alerts",
    "🚨 Tripole Walker Pro 60L is AVAILABLE!"
  );
   await axios.post(
    "https://ntfy.sh/tripole-alerts",
    "🚨 Tripole Walker Pro 60L is AVAILABLE!"
  );
  await axios.post(
    "https://ntfy.sh/tripole-alerts",
    "🚨 Tripole Walker Pro 60L is AVAILABLE!"
  );
   await axios.post(
    "https://ntfy.sh/tripole-alerts",
    "🚨 Tripole Walker Pro 60L is AVAILABLE!"
  );
  await axios.post(
    "https://ntfy.sh/tripole-alerts",
    "🚨 Tripole Walker Pro 60L is AVAILABLE!"
  );

  console.log("Notification Sent");
} else {
//    await axios.post(
//     "https://ntfy.sh/tripole-alerts",
//     "🚨 Tripole Walker Pro 60L is AVAILABLE!"
//   );
   
  console.log("Still Sold Out");
}

} catch (error) {
console.log(error.message);
}
}

checkStock();