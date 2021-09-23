const router = require('express').Router();
const Interactions = require('../models/interactions')

router.post('/', (req, res) => {

  let { element, widget, time } = req.body

  //validate parameters
  //if parameters invalid
    //throw '422'

    Interactions.post(element, widget, time)
    .then(_=> {
      res.sendStatus(201)
    })
    .catch(err => {
      console.error(err)
      //if err is '422'
        //res.sendStatus(422)
      //else
        res.sendStatus(500);
    })
})

module.exports = router;