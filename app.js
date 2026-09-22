// app.js

async function fetchAndProcessUsers() {
  try {
    // 1. JSONPlaceholder API se data fetch karna
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const users = await response.json();

    // 2. Filter: Company catchPhrase mein "group" ya "service" search karna (case-insensitive)
    const filteredUsers = users.filter(user => {
      const catchPhrase = user.company?.catchPhrase || '';
      return /group|service/i.test(catchPhrase);
    });

    // 3. Transform: ES6 Object Destructuring se array of formatted strings banana
    const formattedUserList = filteredUsers.map(user => {
      const {
        name,
        email,
        address: { city }
      } = user;

      return `User: ${name} | Email: ${email} | City: ${city}`;
    });

    // Output show karna
    console.log('Formatted Users List:\n', formattedUserList);
    
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchAndProcessUsers();
