const url = location.href.split('#');
const id = url[1];
const posts = document.getElementById('posts');

// Getting user's posts(Get method)
axios
  .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((response) => {
    response.data.forEach((post) => {
      const div = document.createElement('div');
      const title = document.createElement('h1');
      let body = document.createElement('p');
      let cont = document.createElement('div');
      //   Setting classes to elements
      div.className = 'div';
      title.className = 'title';
      body.className = 'body';
      cont.className = 'content';
      title.textContent = post.title;
      body.textContent = post.body;
      cont.appendChild(title);
      cont.appendChild(body);
      div.appendChild(cont)
      posts.appendChild(cont);
    });
  });
