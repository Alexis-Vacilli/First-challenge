// Selecting table users
const table = document.querySelector('#users');

axios.get(' https://jsonplaceholder.typicode.com/users').then((response) => {
  for (user in response.data) {
    // Creating  elements
    const tableRow = document.createElement('tr');
    let name = document.createElement('td');
    let email= document.createElement('td');
    // Assigning appropriate data 
    name.textContent = `${response.data[user].name}`;
    email.textContent = `${response.data[user].email}`;
    email.className = 'email';
    // Appending child elements 'td' to parent element 'tr'
    tableRow.appendChild(name);
    tableRow.appendChild(email);
    // Appending child element 'tr' to parent element 'table users'
    table.appendChild(tableRow);
  }
});

