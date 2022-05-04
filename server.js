
const express = require('express')
const routes = require('./routes/routes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express()
const PORT = process.env.PORT || 3002


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes );
app.use('/', htmlRoutes)
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`Express server listening at ${PORT}`)
);