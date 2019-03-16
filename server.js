const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.static("./"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
})