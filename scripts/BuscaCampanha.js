
const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');


searchInput.addEventListener('input', handleSearch);

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  cards.forEach(card => {
    const cardTitle = card.querySelector('.titulocard').textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
