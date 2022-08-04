/* API */


const express = require('express'),
	app = express()
    server = require('http').Server(app), 
    port = process.env.PORT || 8080;

module.exports = { express, app, server, port}