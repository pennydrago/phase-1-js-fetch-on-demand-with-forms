const init = () => {
  // Select DOM element 'form'
  const inputForm = document.querySelector('form');

  // Add event listener to form
  inputForm.addEventListener('submit', (event) => {
    
    // Override default form behaviour
    event.preventDefault();
    
    // Access input value
    const input = document.querySelector('input#searchByID');
        
    // Fetch data based on user input
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.textContent = data.title;
      summary.textContent = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);