const app = require('./app');

const PORT = process.env.PORT || 2020;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
