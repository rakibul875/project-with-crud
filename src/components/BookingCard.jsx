import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdDeleteSweep, MdLocationPin } from "react-icons/md";
import Image from "next/image";
import { BookingDelete } from "./BookingDelete";

const BookingCard = ({ booking }) => {
  return (
    <div>
      <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-sm">
        <figure>
          <Image
            src={booking.destinationImage}
            alt="Movie"
            height={250}
            width={300}
            className="h-80 w-90 object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="bg-green-100 rounded-full px-3 py-1.5 text-center w-30">
            <p className="flex items-center text-green-700 text-center gap-1">
              <FaRegCheckCircle />
              Confirmed
            </p>
          </div>
          <div className="space-y-3">
            <h1 className="font-bold text-4xl">{booking.destinationName}</h1>
            <p className="text-lg flex items-center text-gray-400">
              <IoCalendarNumberOutline />
              Departure:{" "}
              {new Date(booking.BookingDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-xl flex items-center text-gray-400">
              <MdLocationPin />
              BookingId:{booking._id}
            </p>
            <p className="text-3xl text-cyan-500 font-semibold">
              ${booking.destinationPrice}
            </p>
          </div>
          <div className="card-actions items-center justify-end gap-3">
            <BookingDelete bookingId={booking._id} />
            <button className="btn bg-cyan-500 items-center">
              <FaEye />
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
