const express = require('express');
const path = require('path')
require('dotenv').config({path: __dirname + '/.env'})
const { cart, interactions, product, qa, reviews } = require('./routes')
const app = express();
const PORT = process.env.APP_PORT;


app.use(express.static('fronted/public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/cart', cart);
app.use('/interactions', interactions);
app.use('/product', product);
app.use('/qa', qa);
app.use('/reviews', reviews);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


