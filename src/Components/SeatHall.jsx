import React, { useState } from "react";
import Navbar from "./Navbar";
const rows = ["A", "B", "C", "D", "E", "F"];
const seatsPerRow = 10;

// booked seats (not clickable)
const bookedSeats = ["A3", "A4", "A5", "C5", "D2", "E7"];

// ticket price
const TICKET_PRICE = 150;

const TheaterSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (id) => {
    if (bookedSeats.includes(id)) return; // block booked seats
    setSelectedSeats((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  // calculate total
  const totalAmount = selectedSeats.length * TICKET_PRICE;

  return (
    <>
   
    <div className="w-full flex flex-col items-center py-10">

      {/* SCREEN */}
      <div className="w-3/4 max-w-xl mb-12">
        <div className="h-10 bg-gray-300 rounded-b-3xl flex items-center justify-center shadow">
          <span className="tracking-widest text-gray-700 font-semibold">
            SCREEN
          </span>
        </div>
      </div>

      {/* SEATS */}
      <div className="space-y-6">
        {rows.map((row) => (
          <div key={row} className="flex items-center justify-center gap-4">

            <span className="font-semibold w-5">{row}</span>

            <div className="flex gap-3">
              {Array.from({ length: seatsPerRow }, (_, i) => {
                const id = `${row}${i + 1}`;
                const isBooked = bookedSeats.includes(id);
                const isSelected = selectedSeats.includes(id);

                return (
                  <button
                    key={id}
                    onClick={() => toggleSeat(id)}
                    disabled={isBooked}
                    className={`
                      w-12 h-12 rounded-xl
                      flex items-center justify-center font-semibold text-sm
                      transition
                      ${
                        isBooked
                          ? "bg-red-500 text-white"
                          : isSelected
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                      }
                    `}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Seats */}
      <div className="mt-8 text-lg font-semibold text-gray-800">
        Selected Seats:{" "}
        {selectedSeats.length ? selectedSeats.join(", ") : "None"}
      </div>

      {/* Price Display */}
      <div className="mt-4 p-4 bg-gray-100 rounded-xl shadow w-72 text-center">
        <p className="text-xl font-bold text-gray-800">Price Details</p>
        <p className="mt-2 text-gray-700">
          Ticket Price: ₹{TICKET_PRICE} x {selectedSeats.length}
        </p>
        <p className="mt-1 text-2xl font-bold text-green-600">
          Total: ₹{totalAmount}
        </p>
      </div>

      {/* Payment Buttons */}
      <div className="mt-6 flex flex-col gap-4 w-72">
        
        <button
          className="w-full py-3 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:bg-purple-700 transition"
          disabled={selectedSeats.length === 0}
        >
          Pay via UPI
        </button>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          disabled={selectedSeats.length === 0}
        >
          Pay via Credit / Debit Card
        </button>

        <button
          className="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition"
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </button>

      </div>
    </div>
</>
  );
};

export default TheaterSeats;
