const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./db");

const roomsRoute = require("./routes/roomsRoute");
const userRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/users", userRoute);
app.use("/api/bookings", bookingRoute);

const port = 5000;

app.listen(port, () => {
  console.log("Server running on port", port);
});