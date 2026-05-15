import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";


const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user=session?.user

  const res= await fetch(`http://localhost:8000/booking/${user?.id}`)
  const bookings=await res.json()
  

  return (
    <div className="container mx-auto">
      <div className="text-center my-5 space-y-5">
        <h1 className="text-5xl font-semibold">My Booking</h1>
        <p className="text-gray-400 text-lg">
          Manage and view your upcoming travel plans
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {
            bookings.map(booking=><BookingCard key={booking._id} booking={booking}/>)
        }
      </div>
    </div>
  );
};

export default BookingsPage;
