import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Calender from "../../components/RoomDetails.jsx/Calender";
import Header from "../../components/RoomDetails.jsx/Header";
import RoomInfo from "../../components/RoomDetails.jsx/RoomInfo";
import RoomReservation from "../../components/RoomDetails.jsx/RoomReservation";

import Container from "../../components/Shared/Container";
import Loader from "../../components/Shared/Loader";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <Loader />;
  return (
    <Container>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 mt-6">
          <RoomInfo room={room} />
          <div className="md:col-span-3 order-first md:order-last mb-10 ">
          {/* Room Reservation */}

           <RoomReservation room={room}/>
           

          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
