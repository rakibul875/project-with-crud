

import SelectComponents from "@/components/SelectComponents";
import React from "react";

const Destinations = () => {
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
    </div>
  );
};

export default Destinations;
