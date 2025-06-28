function scrapeData() {
  // Simulated product data (as if scraped)
  const products = [
    { name: "Wireless Mouse", price: "$15.99", rating: "4.2" },
    { name: "Bluetooth Headphones", price: "$39.99", rating: "4.5" },
    { name: "USB-C Charger", price: "$9.99", rating: "4.0" },
  ];

  const tbody = document.querySelector("#resultTable tbody");
  tbody.innerHTML = "";

  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${product.name}</td><td>${product.price}</td><td>${product.rating}</td>`;
    tbody.appendChild(row);
  });

  alert("Fake scraping complete. Data displayed.");
}
