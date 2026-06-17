import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [fromdate, setFromdate] = useState("");
  const [todate, setTodate] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rooms/getallrooms")
      .then((res) => setRooms(res.data.rooms));
  }, []);

  const filterByDate = (dates, dateStrings) => {
  console.log("dates:", dates);
  console.log("dateStrings:", dateStrings);

  setFromdate(dateStrings[0]);
  setTodate(dateStrings[1]);
};

  return (
    <div className="container mt-4">

  <div className="row justify-content-center mb-4">
    <div className="col-md-4">
      <RangePicker
        format="DD-MM-YYYY"
        onChange={filterByDate}
      />
    </div>
  </div>

  <div className="row justify-content-center">
    {rooms.map((room) => (
      <div className="col-md-9" key={room._id}>
        <Room
          room={room}
          fromdate={fromdate}
          todate={todate}
        />
      </div>
    ))}
  </div>

</div>
  );
}

export default Homescreen;