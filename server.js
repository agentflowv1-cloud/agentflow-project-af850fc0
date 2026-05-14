const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  const carId = req.body.car_id;
  res.json({ message: `Quote requested for car ${carId}` });
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  // Send email or save to database
  res.json({ message: 'Message sent successfully' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});