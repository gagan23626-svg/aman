const shoes = [
  { name: "Nike Air jordan", price: 7999 , img: "WhatsApp Image 2025-08-19 at 3.54.53 PM.jpeg" },
  { name: "Adidas UltraBoost", price: 4999, img: "addi.jpeg" },
  { name: "Puma Running", price: 8999, img: "puma.jpeg" },
  { name: "Woodland brown Derby", price: 3499, img: "wood.jpeg" },
  { name: "Red Tap", price: 3199, img: "red tap.jpeg" },
  { name: "Chelsea Boots", price: 3799, img: "chalc.jpeg" },
  { name: "Reebok Sports", price: 3999, img: "REEBOOK.jpeg" },
  { name: "US Polo Aaan", price: 3199, img: "US POLO.jpeg" },
  { name: "Bersache", price: 2199, img: "BARCHA.jpeg" },
  { name: "BATA", price: 7199, img: "BATA.jpeg" },

];

const container = document.getElementById("shoe-container");

shoes.forEach(shoe => {
  container.innerHTML += `
    <div class="card">
      <img src="${shoe.img}" alt="${shoe.name}">
      <h3>${shoe.name}</h3>
      <p class="price">₹${shoe.price}</p>
      <button onclick="addToCart('${shoe.name}')">Add to Cart</button>
    </div>
  `;
});

function addToCart(name) {
  alert(name + " added to cart!");
}
