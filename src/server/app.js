import express from "express";
import * as path from "path";
import { init as initDatabase } from "./utils/db.js";

import blastRouter from "./routes/blast-router.js";
import ensemblRouter from "./routes/ensembl-router.js";
import indexRouter from "./routes/index-router.js";

const port = process.env.PORT || 3000;
const serverReadyMessage =
  "PrimerSearch has been activated. " +
  `Follow this link to use it: http://localhost:${port}/.` +
  "\nYou can minimize this window, but DO NOT close it while using the app.";

const app = express();

app.use(
  express.static(path.join(import.meta.dirname, "..", "client", "public"))
);
app.use(express.json());
app.use("/", blastRouter);
app.use("/", ensemblRouter);
app.use("/", indexRouter);
initDatabase();

app.listen(port, () => {
  console.log(serverReadyMessage);
});
