// Select main element and back button element
const main = document.getElementById('main');
const backButton = document.getElementById('back-button');
const blogToggle = document.querySelector('#toggle'); // Renamed variable to avoid conflicts

if(!main) {
  console.log('Main element found:', main);
  } else {
    console.error('Main element not found');
  }

  if (!backButton) {
    console.log('Back button found: ', backButton);
  } else {
    console.error('Back button not found');
  }

  if(blogToggle) {
    console.log('Toggle element not found', blogToggle);
  } else {
    console.error('Toggle element not found');
  }
// Function to build an element and append it to the DOM
const newElement = function (type, className, text) {
    const element = document.createElement(type);
    element.classList.add(className);
    element.textContent = text;
    main.appendChild(element);
};

// Function to handle the case where there are no blog posts to display
const noPosts = function () {
    newElement('p', 'no-posts', 'No blog posts to display.');
};

// Function to read from local storage
function readLocalStorage() {
    const blogData = JSON.parse(localStorage.getItem('blogs')) || [];
    console.log('Reading local storage:', blogData); // Correct log
    return blogData;
}

// Function to render the list of blog posts if they exist
const renderBlogList = function () {
    const blogData = readLocalStorage();
    console.log('Blog data:', blogData); // Correct log

    if (blogData.length === 0) {
        noPosts();
    } else {
        blogData.forEach((post) => {
            console.log('Rendering post:', post); // Correct log
            const postDiv = document.createElement('div');
            postDiv.classList.add('blog-post');

            const title = document.createElement('h2');
            title.textContent = post.title;
            postDiv.appendChild(title);

            const author = document.createElement('p');
            author.textContent = `By: ${post.username}`; // Use username correctly
            postDiv.appendChild(author);

            const content = document.createElement('p');
            content.textContent = post.content;
            postDiv.appendChild(content);

            main.appendChild(postDiv);
        });
    }
};

// Call the renderBlogList function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', renderBlogList);

// Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function() {
    redirectPage('/index.html');
});

// Light/Dark mode toggle
blogToggle.addEventListener('click', function() { // Use blogToggle here
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', currentMode);
});

// Apply saved mode from local storage on load
document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

