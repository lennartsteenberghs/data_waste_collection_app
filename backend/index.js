//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong :(')
})

//PORT
app.listen(5000, () => {
  console.log("Server running locally on port 5000");
});
