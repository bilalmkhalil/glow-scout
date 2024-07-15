"use client";

import { useState } from "react";

const Appointment = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <div>
        <h1>Demo</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="First name"
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="Last name"
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="Enter address"
          />

          <h3 className="text-xl font-semibold mb-4 mt-6">Contact details</h3>
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="Mobile/Telephone"
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="Email address"
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            placeholder="Alternate Email address"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Date & Timings</h3>
          <div className="flex items-center mb-4">
            <input
              type="date"
              className="w-full p-2 border rounded mr-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="time"
              className="w-full p-2 border rounded mr-2"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <span className="text-sm text-gray-500">AM</span>
            <span className="text-sm text-white bg-purple-700 px-2 py-1 rounded ml-2">
              PM
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-6">Comment</h3>
          <textarea
            className="w-full p-2 border rounded h-32"
            placeholder="Write any instruction here."
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button type="button" className="px-4 py-2 bg-gray-200 rounded mr-2">
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-700 text-white rounded"
        >
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default Appointment;
