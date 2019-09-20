const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  route: {
    type: String,
    unique: true,
  },
  domain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain'
  },
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;