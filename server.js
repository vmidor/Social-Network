const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

//Connet Database
connectDB();

//Init Middleware 
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
