// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main= document.getElementById('main');
const backButton = document.getElementById('back-button');

// TODO: Create a function that builds an element and appends it to the DOM
const newElement = function (type, className, text) {
  const element = document.createElement(type);
  element.classList.add(className);
  element.textContent = text;
  main.appendChild(element);
};

// TODO: Create a function that handles the case where there are no blog posts to display
//bring in the error message here, it's in a p tag
const noPosts = function () {
  newElement('p', 'no-posts', 'No blog posts to display.');
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
  const blogData = readLocalStorage();
  if (blogData.length === 0) {
    noPosts();
  } else {
    blogData.forEach((post) => {
      newElement('div', 'blog-post', post.title);
    });
  }
};
// TODO: Call the `renderBlogList` function
function renderBlogList() {
    console.log(`renderBlogList`);
}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '/index.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
