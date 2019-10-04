const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  url: String,
  unique: true,
}, {
  timestamps: true
});

const Domain = mongoose.model('Domain', domainSchema);
module.exports = Domain;