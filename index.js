
const app = require('./app');
const config = require("./config")();


app.setPostRoute('/domains', (req, res) => {
  app.clientDb.collection('domains').insertOne(req.body, (err, result) => {
    if (err) res.send(err)

    res.send(err)
    console.log('saved to database')
  })
});