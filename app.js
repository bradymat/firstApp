var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()


// Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

var objList = {
  list: []
}

app.get('/', function(req, res) {
 res.render('list-index')
})

app.post('/list', function (req, res) {
  var list = req.body
  res.render('list-index', list)
})







module.exports = app
