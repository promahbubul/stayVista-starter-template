import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import Card from "./Card";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");

  console.log(category);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else setRooms(data);

        setLoading(false);
      });
  }, [category]);

  if (loading) <Loader />;
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {rooms.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            title="No Rooms Available In This Category!"
            subtitle="Please Select Others Categories"
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
