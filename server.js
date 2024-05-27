import express from "express";
import workingHoursRoute from './routes/workingHours.route.js';
import indexRoute from "./routes/index.route.js";
import contactRoute from "./routes/contact.route.js";
import servicesRoute from "./routes/services.route.js";


const app = express();
const port = 3000;


// Set EJS
app.set("view engine", "ejs");

// Routes
app.use('/', workingHoursRoute);
app.use("/", indexRoute);
app.use("/", contactRoute);
app.use("/", servicesRoute);


// Listen
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});