<h1>EXPRESS + NODE.JS<h1>

##INSTALL##

<pre>$ mkdir myapp</pre>
<pre>$ cd myapp</pre>
<pre>npm init</pre>
<pre>npm install express --save</pre>
<pre>npm install express</pre>
<pre>nodemon app.js</pre>

##BODY-PARASER PACKAGE##
<p>Examination of the post in the request body</p>
<pre>npm install body-parser</pre> 

##API DOC##

<h2><a href="https://openweathermap.org/current">OpenWeather</a><h2>

##EXPRESS CONFIG##

<pre>
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
</pre>

##SERVER CONFIG##

<pre>
app.listen(3000, () => {
    console.log("server up");
})
</pre>