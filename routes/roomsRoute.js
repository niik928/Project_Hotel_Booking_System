const express = require("express");
const router = express.Router();
const Room = require("../models/room");

// GET ALL ROOMS
router.get("/getallrooms", async (req, res) => {
  const rooms = await Room.find({});
  res.send({ rooms });
});

// GET ROOM BY ID
router.get("/getroombyid/:id", async (req, res) => {
  const room = await Room.findById(req.params.id);
  res.send(room);
});

module.exports = router;