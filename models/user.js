const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
  data: {
    type: String,
    unique: true,
  },
  domains: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain'
  },
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;