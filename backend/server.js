const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


let cities = [
  { name: 'Yapkashnagar', distance: 60 },
  { name: 'Lihaspur', distance: 50 },
  { name: 'Narmis City', distance: 40 },
  { name: 'Shekharvati', distance: 30 },
  { name: 'Nuravgram', distance: 30 }
];

let vehicles = [
  { kind: 'EV Bike', range: 60, count: 2 },
  { kind: 'EV Car', range: 100, count: 1 },
  { kind: 'EV SUV', range: 120, count: 1 }

];

let fugitiveLocation = cities[Math.floor(Math.random() * cities.length)];


app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

app.get('/fugitive', (req, res) => {
  res.json(fugitiveLocation);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
