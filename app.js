// Selecting table users
const table = document.querySelector('#users');

// Getting users(Get method)
axios.get(' https://jsonplaceholder.typicode.com/users').then((response) => {
  for (user in response.data) {
    // Creating  elements
    const tableRow = document.createElement('tr');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let button = document.createElement('button');
    let link = document.createElement('a');
    // Assigning appropriate data
    name.textContent = `${response.data[user].name}`;
    email.textContent = `${response.data[user].email}`;
    // Assigning classes to HTML elements
    name.className = 'name';
    email.className = 'email';
    button.className = 'button';
    link.setAttribute("href",`/post.html#${response.data[user].id}`)
    link.textContent=`Get User's posts`
    //button.setAttribute("href",`/post.html/${response.data[user].id}`)
    button.appendChild(link)
    // Appending child elements 'td' to parent element 'tr'
    tableRow.appendChild(name);
    tableRow.appendChild(email);
    name.appendChild(button);
    // Appending child element 'tr' to parent element 'table users'
    table.appendChild(tableRow);
  }
});


