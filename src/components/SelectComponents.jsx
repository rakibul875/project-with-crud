import React from "react";
import { Label, ListBox, Select } from "@heroui/react";

const SelectComponents = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
      <div className="w-full space-y-4">
        <Select
          fullWidth
          placeholder="CATEGORY"
          className="bg-white rounded-xl border border-gray-300 shadow-md p-2"
        >
          <Select.Trigger className="bg-blue-50 hover:bg-blue-100 rounded-lg px-3 py-2">
            <Select.Value className="text-gray-700" />
            <Select.Indicator className="text-blue-500" />
          </Select.Trigger>

          <Select.Popover className="bg-white rounded-xl shadow-xl border border-gray-200">
            <ListBox>
              <ListBox.Item id="cat" textValue="Cat">
                Cat
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="dog" textValue="Dog">
                Dog
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="bird" textValue="Bird">
                Bird
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      <div className="w-full space-y-4">
        <Select
          fullWidth
          placeholder="PRICE RANGE"
          className="bg-white rounded-xl border border-gray-300 shadow-md p-2"
        >
          <Select.Trigger className="bg-blue-50 hover:bg-blue-100 rounded-lg px-3 py-2">
            <Select.Value className="text-gray-700" />
            <Select.Indicator className="text-blue-500" />
          </Select.Trigger>

          <Select.Popover className="bg-white rounded-xl shadow-xl border border-gray-200">
            <ListBox>
              <ListBox.Item id="cat" textValue="Cat">
                Cat
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="dog" textValue="Dog">
                Dog
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="bird" textValue="Bird">
                Bird
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      <div className="w-full space-y-4">
        <Select
          fullWidth
          placeholder="SORT BY"
          className="bg-white rounded-xl border border-gray-300 shadow-md p-2"
        >
          <Select.Trigger className="bg-blue-50 hover:bg-blue-100 rounded-lg px-3 py-2">
            <Select.Value className="text-gray-700" />
            <Select.Indicator className="text-blue-500" />
          </Select.Trigger>

          <Select.Popover className="bg-white rounded-xl shadow-xl border border-gray-200">
            <ListBox>
              <ListBox.Item id="cat" textValue="Cat">
                Cat
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="dog" textValue="Dog">
                Dog
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="bird" textValue="Bird">
                Bird
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
};

export default SelectComponents;
