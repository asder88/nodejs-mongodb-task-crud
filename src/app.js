import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

//PORT SETTINGS
app.listen(process.env.PORT || 5000);
console.log("Server listening on port", 3000);

//PATHS
app.set("views", path.join(__dirname, "views"));

//TEMPLATE ENGINE
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//APP ROUTES
app.use(indexRoutes);

//ESTATIC FILES
app.use(express.static(path.join(__dirname, "public")));

export default app;
