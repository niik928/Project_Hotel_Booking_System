import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";


function Room({ room, fromdate, todate }) {
  const [show, setShow] = useState(false);

  return (
    <div className="row m-3 p-3 bs">
      <div className="col-md-4">
        <img
          src={`/images/${room.imageurls?.[0]}`}
          className="smallimg"
          alt={room.name}
        />
      </div>

      <div className="col-md-8">
        <h1>{room.name}</h1>

        <p><b>Type:</b> {room.type}</p>
        <p><b>Rent Per Day:</b> ₹{room.rentperday}</p>
        <p><b>Max Count:</b> {room.maxCount}</p>
        <p><b>Phone:</b> {room.phoneNumber}</p>

        <div style={{ float: "right" }}>
          {fromdate && todate ? (
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
              <button className="btn btn-dark m-2">
                Book Now
              </button>
            </Link>
          ) : (
            <button className="btn btn-secondary m-2" disabled>
              Select Dates First
            </button>
          )}

          <button
            className="btn btn-danger m-2"
            onClick={() => setShow(true)}
          >
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel>
            {room.imageurls?.map((url, index) => (
              <Carousel.Item key={index}>
                <img
                  src={`/images/${url}`}
                  className="d-block w-100"
                  alt={`Room ${index + 1}`}
                  style={{ height: "400px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <hr />

          <h5>Description</h5>

          <p>{room.description}</p>

          <p><b>Room Type:</b> {room.type}</p>
          <p><b>Rent:</b> ₹{room.rentperday}</p>
          <p><b>Max Guests:</b> {room.maxCount}</p>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;