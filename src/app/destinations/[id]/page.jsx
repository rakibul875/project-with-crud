
import { DeletePage } from "@/components/DeletePage";
import { EditPage } from "@/components/EditPage";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/destination/${id}`);
  const data = await res.json();
  
  return (
    <div className="container mx-auto">
      <div className="mt-5 flex justify-between lg:p-0 p-5">
        <div className="">
          <h1 className="text-gray-400 text-lg flex items-center gap-1">
            <FaArrowLeft />
            Back To Destination
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <EditPage data={data} />
          <DeletePage data={data}/>
       
        </div>
      </div>

      <div className="p-5">
        <Image
          src={data.imageUrl}
          height={600}
          width={800}
          alt=""
          className="w-full h-150 object-cover"
        />

        <div className="card-body p-1 mt-2">
          <p className="text-lg text-gray-500 flex items-center gap-1">
            <IoIosPin />
            {data.country}
          </p>
          <div className="flex justify-between">
            <h2 className="card-title text-3xl">{data.destinationName}</h2>
            <h2 className="card-title text-lg text-gray-400">
              <span className="text-2xl text-black">${data.price}</span>/Person
            </h2>
          </div>
          <p className="text-lg text-gray-400 flex items-center gap-1">
            <FaCalendarAlt />
            {data.duration}
          </p>
          <div className="">
            <p className="text-xl">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
