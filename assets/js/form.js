// TODO: Create a variable that selects the form element
const form = document.querySelector('form');



// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.querySelector('#username').value;
  const content = document.querySelector('#title').value;
  const author = document.querySelector('#content').value;

  if (!title || !content || !username) {
    alert('Please complete the form.');
    return;
  }

  const newBlog = {
    title,
    content,
    author,
  };

  storeLocalStorage(newBlog);
  redirectPage('./blog.html');
});
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
