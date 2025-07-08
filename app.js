import express from "express";
import corse from "cors"; 

import clientesRoutes from "./src/routes/clientes.js";

const app = express();

app.use(corse());
app.use(express.json());

app.use("/api/clientes", clientesRoutes);



export default app;