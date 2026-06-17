import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function Bookingscreen() {
  const { roomid, fromdate, todate } = useParams();

  const [room, setRoom] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/rooms/getroombyid/${roomid}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [roomid]);

 const totaldays =
  moment(todate, "DD-MM-YYYY").diff(
    moment(fromdate, "DD-MM-YYYY"),
    "days"
  ) + 1;

  const totalamount = totaldays * (room?.rentperday || 0);

  async function payNow() {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const bookingDetails = {
      room: room.name,
      roomid: room._id,
      userid: currentUser?._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/bookings/bookroom",
        bookingDetails
      );

      alert("Payment Successful!");
      navigate("/");
    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);

  alert("Payment Failed");
}
  }

  return room ? (
    <div className="container mt-5">
      <div className="row justify-content-center bs p-4">

        <div className="col-md-6">
          <h2>{room.name}</h2>

          <img
            src={`/images/${room.imageurls?.[0]}`}
            className="img-fluid rounded"
            alt={room.name}
          />

          <div className="mt-3">
            <p>
              <b>Description:</b> {room.description}
            </p>

            <p>
              <b>Type:</b> {room.type}
            </p>

            <p>
              <b>Phone:</b> {room.phoneNumber}
            </p>

            <p>
              <b>Max Count:</b> {room.maxCount}
            </p>
          </div>
        </div>

        <div className="col-md-6">

          <h3>Booking Details</h3>
          <hr />

          <p>
            <b>Room Name:</b> {room.name}
          </p>

          <p>
            <b>From Date:</b> {fromdate}
          </p>

          <p>
            <b>To Date:</b> {todate}
          </p>

          <p>
            <b>Max Count:</b> {room.maxCount}
          </p>

          <hr />

          <h3>Amount</h3>

          <p>
            <b>Total Days:</b> {totaldays}
          </p>

          <p>
            <b>Rent Per Day:</b> ₹{room.rentperday}
          </p>

          <p>
            <b>Total Amount:</b> ₹{totalamount}
          </p>

          <button
            className="btn btn-primary mt-3"
            onClick={payNow}
          >
            Pay Now
          </button>

        </div>
      </div>
    </div>
  ) : (
    <h2 className="text-center mt-5">Loading...</h2>
  );
}

export default Bookingscreen;