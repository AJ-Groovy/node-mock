const express = require("express");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const config = require("../config")();
const db = require("../db");

class App {
  constructor(config, db) {
    if (!App.instance) {
      App.instance = this;
    }

    this.config = config;
    this.server = express();
    this.db = db;
    this.clientDb;

    return App.instance;
  }

  async init() {
    this.setStaticFolder('templates');
    this.setBodyParser();
    this.db.client.connect((err, client) => {
      if (err) return console.log(err);
      this.clientDb = client.db("mock-db");
      this.server.listen(this.config.port);
      Object.freeze(this);
    })

    return this;
  }

  setStaticFolder(path) {
    return this.server.use(express.static(path));
  }

  setBodyParser() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({
      extended: true
    }));
  }

  setGetRoute(url, callback) {
    this.server.get(url, callback);
  }

  setPostRoute(url, callback) {
    this.server.post(url, callback);
  }

  setPatchRoute(url, callback) {
    this.server.patch(url, callback);
  }

  setDeleteRoute(url, callback) {
    this.server.delete(url, callback);
  }
}


const app = new App(config, db);
app.init();
// Object.freeze(app);

module.exports = app;