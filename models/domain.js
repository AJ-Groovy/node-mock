const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  domain: {
    type: String,
    unique: true,
  },
});

const Domain = mongoose.model('Domain', domainSchema);
module.exports = Domain;