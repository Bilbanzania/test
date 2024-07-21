const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Call the middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World! (^_^)');
});

// Connecting to MongoDB
const DB = process.env.DATABASE.replace('<DB_PASSWORD>', process.env.DB_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection was successful (^_^)'));

// Starting the server
const port = process.env.PORT || 9002;
app.listen(port, () => {
  console.log(`App running on port ${port}...(@,@)`);
});