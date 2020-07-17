const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/happenings-app'
)

console.log('Inside seedDB.js')

const places = [
  {
    placeName: 'myTestPlaceName',
    placeAddress: '123 Main St',
    placeEvent: 'None',
    placeEventStart: 'eventStart',
    placeEventFinish: 'eventFinish',
    placeCreatedBy: 'Eddie'
  }
]

db.Places.remove({})
  .then(() => db.Places.collection.insertMany(places))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
