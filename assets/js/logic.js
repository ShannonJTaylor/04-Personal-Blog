// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogData = JSON.parse(localStorage.getItem('blogs')) || [];
  return blogData ? blogData : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newData) {
  const blogData = readLocalStorage();
  blogData.push(newData);
  localStorage.setItem('blogs', JSON.stringify(blogData));
}

// ! Use the following function whenever you need to redirect to a different page



// Toggle light/dark mode and save to local storage
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', function() {
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