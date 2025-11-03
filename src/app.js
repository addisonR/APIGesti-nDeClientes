import express from "express";
import { SERVER_PORT } from "./config/config.js";
import { checkBD } from "./db/mysql.js";

import ClienteRoutes from "./routes/ClienteRoutes.js";

const app = express();
checkBD();

//MIDDLEWARE
app.use(express.json());

//RUTAS
app.use("/", ClienteRoutes);

app.listen(SERVER_PORT, () => {
  console.log(`Server on http://localhost:${SERVER_PORT}`);
});
