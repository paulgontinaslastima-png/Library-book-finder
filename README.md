# Library Book Finder

A responsive web app that helps students and library users find books by title, author, category, or shelf location and check whether a book is available.

## Features
- Search books by title, author, category, or shelf location
- Filter by category
- Filter by availability (Available or Borrowed)
- View book details, category, and shelf location
- Responsive layout for desktop and mobile

## Technology
- HTML5
- CSS3
- Vanilla JavaScript
- Sample book data stored in `script.js`
- GitHub Pages for free static hosting

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a web browser.

No build tools or dependencies are required.

## Deploy with GitHub Pages
1. Create a **public** repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. Your public URL will appear in the Pages settings.

## Current limitations
- The app uses sample book records in JavaScript; it is not connected to a live library database.
- Search results are read-only. There is no login, borrowing, or reservation workflow.
- Book availability is sample data and does not update automatically.

## Future improvements
- Connect a database so librarians can maintain the collection.
- Add an admin dashboard for adding, editing, and removing books.
- Add book reservation and borrowing history.
