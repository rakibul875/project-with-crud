import { Button } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";

const DestinationsCard = ({ destination }) => {
  const { imageUrl, destinationName, country, price, duration, _id } =
    destination;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <figure className="">
          <Image
            src={imageUrl}
            alt={destinationName}
            width={400}
            height={250}
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body p-1">
          <p className="text-lg text-gray-500 flex items-center gap-1">
            <IoIosPin />
            {country}
          </p>
          <div className="flex justify-between">
            <h2 className="card-title text-2xl">{destinationName}</h2>
            <h2 className="card-title text-lg text-gray-400">
              <span className="text-2xl text-black">${price}</span>/Person
            </h2>
          </div>
          <p className="text-lg text-gray-400 flex items-center gap-1">
            <FaCalendarAlt />
            {duration}
          </p>
          <div className="card-actions">
            <Link href={`/destinations/${_id}`}>
              {" "}
              <Button variant="outline" className="text-cyan-500">
                <FaArrowUpRightFromSquare />
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsCard;
