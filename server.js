//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join('./dist/angularMaterial')));
app.use('/*', express.static(path.join('./dist/angularMaterial')));


// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
app.listen(process.env.PORT || 3200, () => console.log('Example app listening on port 3200!'));
