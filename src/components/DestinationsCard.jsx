import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";

const DestinationsCard = ({ destination }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <figure className="">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            width={400}
            height={250}
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body p-1">
            <p className="text-lg text-gray-500 flex items-center gap-1"><IoIosPin />{destination.country}</p>
          <div className="flex justify-between">
            <h2 className="card-title text-2xl">{destination.destinationName}</h2>
            <h2 className="card-title text-lg text-gray-400"><span className="text-2xl text-black">${destination.price}</span>/Person</h2>
          </div>
          <p className="text-lg text-gray-400">
            {destination.duration}
          </p>
          <div className="card-actions">
           <Button variant="outline" className='text-cyan-500'><FaArrowUpRightFromSquare />Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsCard;
