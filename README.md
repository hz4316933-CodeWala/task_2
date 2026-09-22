User Data Filter & Formatter Script

A lightweight Node.js application built with modern JavaScript (ES6) that fetches user data from JSONPlaceholder API, filters records based on company catchphrases, and formats the output using object destructuring.

- **Fetch API Data:** Asynchronously retrieves user records from `https://jsonplaceholder.typicode.com/users`.
- **Case-Insensitive Filter:** Filters users whose company `catchPhrase` contains the word **"group"** or **"service"**.
- **ES6 Destructuring:** Uses nested object destructuring to extract `name`, `email`, and `address.city`.
- **Formatted Output:** Transforms user records into clean, structured text strings.
 Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)

 Installation & Setup

 Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
   cd YOUR_REPO_NAME
