import React,{ useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

import { useParams } from "react-router-dom";

function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [room, setRoom] = useState(null);
  const { roomid } = useParams();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/rooms/getroombyid/${roomid}`); 
        setRoom(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching room details");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomid]);

  return (
    <div>
      
      {loading ? (
        <Loader/>
      ) : room ? (
        <div className='m-5'>
          <div className="row justify-content-center mt-5 bs">
            <div className="col md-5">
            
            <h1>{room.name}</h1>
            <img src={`/images/${room.imageurls[0]}`} className="bigimg" />
            </div>
            <div className="col md-5">
            <div style={{textAlign:'right'}}>
            <h1>Booking Details</h1>
            <hr/>
            <b>
            <p>Name: {} </p>
            <p>From Date: </p>
            <p>To Date: </p>
            <p>Max Count : {room.maxCount}</p>
            </b>
            </div>
            <div style={{textAlign:'right'}}>
            <h1>Amount</h1>
            <b>
            <p>Total Days: </p>
            <p>Rent per day: {room.rentperday}</p>
            <p>Total Amount: </p>
            </b>
            </div>
            <div style={{ float: 'right' }}>
            <button className='btn btn-primary'>Pay Now</button>
            </div>
            
            </div>
            </div>
            
      
      </div>
  
      ) : (<Error/>)}
      </div>
      );
    }

export default Bookingscreen;