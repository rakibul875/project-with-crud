import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdDeleteSweep, MdLocationPin } from "react-icons/md";
import Image from "next/image";

const BookingCard = ({booking}) => {
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
              <h1 className="font-bold text-4xl">Name</h1>
              <p className="text-lg flex items-center text-gray-400">
                <IoCalendarNumberOutline />
                Departure:
              </p>
              <p className="text-xl flex items-center text-gray-400">
                <MdLocationPin />
                BookingId:
              </p>
              <p className="text-3xl text-cyan-500 font-semibold">$4000</p>
            </div>
            <div className="card-actions justify-end gap-3">
              <button className="btn btn-outline text-red-400 items-center">
                <MdDeleteSweep /> Cancel
              </button>
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