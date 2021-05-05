require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const cfenv = require("cfenv");
const app = express();
var db = "";
const port = process.env.PORT || 4000;
try {
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });

    db = mongoose.connection;

    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectando a la base de datos.."));
} catch {
    console.log("No se pudo conectar");
}



/*
app.get("/", (req, res) => {
    res.send("Hola mundo 1 2 3");
})*/

const tareasRouter = require("./routes/tareas-routes");


app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tareas", tareasRouter);
app.listen(port, () => {
    console.log("El servidor esta escuchando...");
});