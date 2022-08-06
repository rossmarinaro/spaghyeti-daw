/*** PASTABOSS MAIN */

const { express, app, server, port } = require('./app/api.js');	// http express modules
//cors = require('cors');							

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.use(express.json());
//app.use(cors());

//node cc addon
//require('./optimization.js');

//require('./app/endpoints.js');


require('./app/electron.js');										// electron desktop builder


//---------------------------------server listen on port 

server.listen(port, ()=> console.log(`Welcome to port ${port}, SPAGHYETI-DAW developed by Ross Marinaro \u00a9REMAREMYINITIALS\n добро пожаловать в мою программу!`)); 





