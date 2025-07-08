import express from "express";
import corse from "cors"; 
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import cors from "cors"



import clientesRoutes from "./src/routes/clientes.js";
import reservacionesRoutes from "./src/routes/reservaciones.js";

const app = express();
const swaggerDocumment = JSON.parse(

    fs.readFileSync(path.resolve("./docs.json"), "utf8")
);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumment));
app.use(
    cors({
      origin: "https://apiplus.onrender.com", 
      credentials: true
    })
  );

app.use(cors());
app.use(express.json());

app.use("/api/clientes", clientesRoutes);
app.use("/api/reservaciones", reservacionesRoutes);



export default app;