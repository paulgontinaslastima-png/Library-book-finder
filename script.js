const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Technology", shelf: "Tech · A-01", status: "Available", color: "#315b49", cover: "CLEAN\nCODE", subtitle: "A HANDBOOK OF AGILE SOFTWARE" },
  { id: 2, title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt", category: "Technology", shelf: "Tech · A-03", status: "Borrowed", color: "#bd7653", cover: "THE\nPRAGMATIC\nPROGRAMMER", subtitle: "YOUR JOURNEY TO MASTERY" },
  { id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", shelf: "Science · B-02", status: "Available", color: "#344c70", cover: "A BRIEF\nHISTORY\nOF TIME", subtitle: "STEPHEN HAWKING" },
  { id: 4, title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", shelf: "Science · B-05", status: "Available", color: "#b88c4e", cover: "THE\nSELFISH\nGENE", subtitle: "RICHARD DAWKINS" },
  { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", shelf: "Fiction · C-01", status: "Borrowed", color: "#7d8d78", cover: "TO KILL A\nMOCKINGBIRD", subtitle: "HARPER LEE" },
  { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", shelf: "Fiction · C-04", status: "Available", color: "#bd9c54", cover: "THE GREAT\nGATSBY", subtitle: "F. SCOTT FITZGERALD" },
  { id: 7, title: "Sapiens", author: "Yuval Noah Harari", category: "History", shelf: "History · D-02", status: "Available", color: "#9a654e", cover: "SAPIENS", subtitle: "A BRIEF HISTORY OF HUMANKIND" },
  { id: 8, title: "The Silk Roads", author: "Peter Frankopan", category: "History", shelf: "History · D-06", status: "Borrowed", color: "#536b7d", cover: "THE SILK\nROADS", subtitle: "A NEW HISTORY OF THE WORLD" },
  { id: 9, title: "Atomic Habits", author: "James Clear", category: "Business", shelf: "Business · E-01", status: "Available", color: "#567d75", cover: "ATOMIC\nHABITS", subtitle: "JAMES CLEAR" },
  { id: 10, title: "Start with Why", author: "Simon Sinek", category: "Business", shelf: "Business · E-04", status: "Available", color: "#b77b51", cover: "START\nWITH WHY", subtitle: "SIMON SINEK" },
  { id: 11, title: "Introduction to Algorithms", author: "Thomas H. Cormen et al.", category: "Technology", shelf: "Tech · A-08", status: "Available", color: "#4d6685", cover: "INTRODUCTION\nTO ALGORITHMS", subtitle: "THIRD EDITION" },
  { id: 12, title: "The Martian", author: "Andy Weir", category: "Fiction", shelf: "Fiction · C-08", status: "Borrowed", color: "#b66d4b", cover: "THE\nMARTIAN", subtitle: "ANDY WEIR" }
];

const searchInput = document.getElementById("searchInput");
const availabilityFilter = document.getElementById("availabilityFilter");
const categoryFilters = document.getElementById("categoryFilters");
const bookGrid = document.getElementById("bookGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const clearSearch = document.getElementById("clearSearch");
let selectedCategory = "All";

function renderBooks() {
  const query = searchInput.value.trim().toLowerCase();
  const availability = availabilityFilter.value;

  const filtered = books.filter(book => {
    const searchable = `${book.title} ${book.author} ${book.category} ${book.shelf}`.toLowerCase();
    const matchesSearch = searchable.includes(query);
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesAvailability = availability === "All" || book.status === availability;
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  resultCount.textContent = filtered.length;
  clearSearch.hidden = !searchInput.value;
  emptyState.hidden = filtered.length !== 0;
  bookGrid.hidden = filtered.length === 0;

  bookGrid.innerHTML = filtered.map(book => `
    <article class="book-card">
      <div class="cover" style="background:${book.color}18">
        <div class="cover-art" style="background:${book.color}">
          <strong>${book.cover.replaceAll("\n", "<br>")}</strong>
          <small>${book.subtitle}</small>
        </div>
      </div>
      <div class="book-info">
        <div class="book-category">${book.category}</div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <div class="card-bottom">
          <span class="shelf">⌖ ${book.shelf}</span>
          <span class="status ${book.status.toLowerCase()}">${book.status}</span>
        </div>
      </div>
    </article>
  `).join("");
}

searchInput.addEventListener("input", renderBooks);
availabilityFilter.addEventListener("change", renderBooks);
categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  categoryFilters.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });
  renderBooks();
});
document.getElementById("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  renderBooks();
  searchInput.focus();
});
document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  availabilityFilter.value = "All";
  selectedCategory = "All";
  categoryFilters.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === "All");
  });
  renderBooks();
});
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") renderBooks();
});

renderBooks();
