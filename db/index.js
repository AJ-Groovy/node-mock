const express = require("express");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const config = require("../config")();

class DB {
  constructor(config) {
    if (!DB.instance) {
      DB.instance = this;
    }

    this.config = config;
    this.client = new MongoClient(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return DB.instance;
  }
}

const db = new DB(config);
Object.freeze(db);

module.exports = db;