"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { EditPage } from "./EditPage";
import { DeletePage } from "./DeletePage";
import Image from "next/image";
import { IoIosPin } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Button, DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const DetailsPage = ({ data }) => {
    const [date, setDate]=useState(null)
    const { data: session } = authClient.useSession();
      const user = session?.user;
    
  const handelBooking = async() => {
        const bookingData={
            userId:user?.id,
            userImage:user?.image,
            userName:user?.name,
            destinationId:data._id,
            destinationName:data.destinationName,
            destinationCountry:data.country,
            destinationImage:data.imageUrl,
            destinationPrice:data.price,
            BookingDate:new Date(date),

        }
        const {data:tokenData}=await authClient.token()
        console.log(tokenData.token)
        const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization': `bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const bookData=await res.json()
        toast.success("Booking success")
  };
  return (
    <div>
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
            <DeletePage data={data} />
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
            </div>
            <p className="text-lg text-gray-400 flex items-center gap-1">
              <FaCalendarAlt />
              {data.duration}
            </p>
            <div className="flex flex-col lg:flex-row gap-2">
              <p className="text-xl">{data.description}</p>
              <div className="bg-white p-2 lg:p-5 max-w-6xl shadow space-y-5">
                <p className="text-lg text-gray-400">Starting from</p>
                <p className="text-4xl text-cyan-500 font-bold">
                  ${data.price}
                </p>
                <p className="text-lg text-gray-400">per person</p>

                <DateField onChange={setDate} className="w-[256px]" name="date">
                  <Label>Date</Label>
                  <DateField.Group className="rounded-none bg-base-200">
                    <DateField.Input>
                      {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>

                <Button onClick={handelBooking} className="rounded-none w-full bg-cyan-500">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
