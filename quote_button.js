const getQuoteButton = document.querySelectorAll('.get-quote-button');

getQuoteButton.forEach(button => {
  button.addEventListener('click', () => {
    const carId = button.dataset.carId;
    const contactForm = document.querySelector('.contact-form');
    contactForm.innerHTML = '';
    const formData = new FormData();
    formData.append('car_id', carId);
    fetch('/contact', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      contactForm.innerHTML = `<form><label>Name:</label><input type='text' name='name'><br><label>Email:</label><input type='email' name='email'><br><label>Message:</label><textarea name='message'></textarea><br><button type='submit'>Submit</button></form>`;
      const submitButton = contactForm.querySelector('button');
      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        fetch('/submit', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      });
    })
    .catch(error => console.error(error));
  });
}