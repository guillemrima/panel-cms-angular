const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

let corsOptions = {
  origin: ['http://localhost:8081', 'http://127.0.0.1:5500', 'http://127.0.0.1:5501']
};

app.use(cors(corsOptions));
app.use(express.json({limit: "10mb", extended: true}));
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}));

const PORT = process.env.PORT || 8080;

const routePath = "./src/routes/";

fs.readdirSync(routePath).forEach(function(file) {
  require(routePath + file)(app);
});

app.listen(PORT, () => {
  console.log(`✔️  El servidor se ha iniciado correctamente y está escuchando en el puerto ${PORT}.`)
});

