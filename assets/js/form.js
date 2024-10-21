const form = document.querySelector('#blogForm'); 

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Grab the form data
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const error = document.getElementById('error');

  // Check for missing data
  if (!username || !title || !content) {
    error.style.display = 'block';
    return;
  } else {
    error.style.display = 'none';
  }

  // Store form data in an object
  const newBlog = {
    username,
    title,
    content
  };

  // Save to local storage
  storeLocalStorage(newBlog);

  console.log("Data stored successfully!");

  // Redirect to blog page
  redirectPage();
});


function redirectPage() {
  console.log("Redirecting to blog.html");
  window.location.href ="./blog.html"; // Ensure the URL is correct and accessible
}

