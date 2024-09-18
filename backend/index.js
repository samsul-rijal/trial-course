const express = require("express"); // import
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(express.json()); // fungsinya untuk menangkap isi request body dari method post
app.use(cors());
app.use(router);

const PORT = 8000




app.listen(PORT,() => console.log(`server running on PORT ${PORT}`)) // menjalankan server