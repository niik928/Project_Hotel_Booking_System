const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");

router.post("/bookroom", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Room Booked Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Booking Failed",
    });
  }
});

module.exports = router;