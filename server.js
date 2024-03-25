const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");

// const productRouter = require("./Routers/product");
// const authRouter = require("./Routers/auth");

const app = express();
const port = 8080;

connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Router 1
// app.get('/product', (req, res) => {
//     res.send("Product Route");
// })

// Router 2
// app.use("/api", productRouter);
// app.use("/api", authRouter);

// Router 3
readdirSync("./Routers").map((r) => app.use("/api", require("./Routers/" + r)));

app.listen(port, () => console.log("server is running on port " + port));
