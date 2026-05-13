import DestinationsCard from "@/components/DestinationsCard";
import SelectComponents from "@/components/SelectComponents";
import React from "react";
import { FaRectangleAd } from "react-icons/fa6";

const Destinations = async () => {

    const res=await fetch('http://localhost:8000/destination')
    const destinations=await res.json()

  return (
    <div className="container mx-auto">
      <div className="space-y-3">
        <h1 className="font-semibold text-4xl">Explore All Destination</h1>
        <p className="text-lg text-gray-400">
          Find your perfect travel experience from our curated collection
        </p>
      </div>
      <div className="my-6 space-y-3">
       <SelectComponents/>
       <p className="text-lg text-gray-400">Showing 4 destinations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-3">
        {
            destinations.map(destination=><DestinationsCard key={destination._id} destination={destination}/>)
        }
      </div>
    </div>
  );
};

export default Destinations;
