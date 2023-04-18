require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const app = express();

//conectar a la base de datos
connectDB();

app.use(express.json({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
