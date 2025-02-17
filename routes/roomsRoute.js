const express = require('express');
const router =  express.Router();
const Room = require('../models/room');
const { check, validationResult } = require("express-validator");
router.get(
    "/getallrooms",  async(req,res) =>{
        try {
            const rooms = await Room.find({})
            return res.json({ rooms});
        } catch (error) {
            return res.status(400).json({message: error});
        }

    }
    
);
router.get(
    "/getroombyid/:roomId",
    [
      check("roomId", "Invalid room ID format").isMongoId(),
    ],
    async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
  
        const { roomId } = req.params;
        console.log(`Fetching room with ID: ${roomId}`);
  
        const room = await Room.findById(roomId);
        if (!room) {
          return res.status(404).json({ error: "Room not found" });
        }
  
        res.json(room);
      } catch (error) {
        console.error("Error fetching room details:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  );
module.exports = router;