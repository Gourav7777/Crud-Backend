const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ProductRoutes = require("./Routes/product.routes")
const connect = require ("./config/db")

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

app.use("/api/products",ProductRoutes)





app.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'Welcome Server Starts' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connect()
});
