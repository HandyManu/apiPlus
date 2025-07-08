import express from "express";
import corse from "cors"; 

import clientesRoutes from "./src/routes/clientes.js";
import reservacionesRoutes from "./src/routes/reservaciones.js";

const app = express();

app.use(corse());
app.use(express.json());

app.use("/api/clientes", clientesRoutes);
app.use("/api/reservaciones", reservacionesRoutes);



export default app;