"use client";

import {
  Card,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";


import React from "react";

const AddDestination = () => {
  
  const handelDestinationSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const destinationData = Object.fromEntries(fromData.entries());
    

    const res = await fetch("http://localhost:8000/destination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destinationData),
    });

    const data = await res.json();

    
  
  };

  return (
    <div className="container mx-auto px-4 sm:px-2 lg:px-8 py-6 space-y-5">
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Add Destination
      </h1>

      <Card>
        <form
          onSubmit={handelDestinationSubmit}
          className="p-8 sm:p-2 md:p-7 space-y-6 sm:space-y-5 lg:w-3xl lg:mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            <div className="sm:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {[
                      "Beach",
                      "Mountain",
                      "City",
                      "Adventure",
                      "Cultural",
                      "Luxury",
                    ].map((item) => (
                      <ListBox.Item key={item} id={item}>
                        {item}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <div className="sm:col-span-2">
              <TextField name="departureDate" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl w-full" />
                <FieldError />
              </TextField>
            </div>

            <div className="sm:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            <div className="sm:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 text-base sm:text-lg"
          >
            Add Travel Package
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddDestination;
