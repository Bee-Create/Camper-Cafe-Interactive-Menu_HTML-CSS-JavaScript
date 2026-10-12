// Select all menu items
const items = document.querySelectorAll('.item');

// Create and insert the total display
let total = 0;
const totalBox = document.createElement('p');
totalBox.id = 'total';
totalBox.style.textAlign = 'center';
totalBox.style.fontSize = '22px';
totalBox.style.fontWeight = 'bold';
totalBox.textContent = "Total: $0.00";
document.querySelector('.menu').appendChild(totalBox);

// Add click functionality to each item
items.forEach(item => {
  item.addEventListener('click', () => {
    const price = parseFloat(item.querySelector('.price').textContent);

    // Toggle selected class
    item.classList.toggle('selected');

    // Add or subtract price
    if (item.classList.contains('selected')) {
      total += price;
    } else {
      total -= price;
    }

    // Update total display
    totalBox.textContent = `Total: $${total.toFixed(2)}`;
  });
});
