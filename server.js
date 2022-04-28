
// const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });