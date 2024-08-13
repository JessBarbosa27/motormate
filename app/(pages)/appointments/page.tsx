"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentPage = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [unavailableSlots, setUnavailableSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      fetch(`/api/appointments?date=${formattedDate}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeSlots(data.availableSlots);
          setUnavailableSlots(data.unavailableSlots);
        });
    }
  }, [date]);

  const handleSlotSelect = (slot: string) => {
    if (!unavailableSlots.includes(slot)) {
      setSelectedSlot(slot);
    }
  };

  const handleAppointmentConfirm = () => {
    if (date && selectedSlot) {
      fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: format(date, "yyyy-MM-dd"),
          slot: selectedSlot,
        }),
      }).then((res) => res.json());
    }
  };

  return (
    <div className="bg-black">
      <Card>
        <h1>Book an Appointment</h1>
        <Calendar
          // onChange={setDate}
          value={date}
        />
        {date && (
          <div>
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                disabled={unavailableSlots.includes(slot)}
                onClick={() => handleSlotSelect(slot)}
                style={{ margin: "5px" }}
              >
                {slot}
              </Button>
            ))}
          </div>
        )}
        <Button onClick={handleAppointmentConfirm} disabled={!selectedSlot}>
          Confirm Appointment
        </Button>
      </Card>
    </div>
  );
};

export default AppointmentPage;
