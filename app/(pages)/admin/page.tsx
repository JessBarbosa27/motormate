"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const AdminHomePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [appointments, setAppointments] = useState<any[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [unavailableSlots, setUnavailableSlots] = useState<string[]>([]);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      fetch(`/api/appointments?date=${formattedDate}`)
        .then((res) => res.json())
        .then((data) => {
          setAppointments(data.appointments);
          setTimeSlots(data.availableSlots);
          setUnavailableSlots(data.unavailableSlots);
        });
    }
  }, [selectedDate]);

  const handleSlotToggle = (slot: string) => {
    setUnavailableSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  const saveUnavailableSlots = () => {
    if (selectedDate) {
      fetch("/api/admin/unavailable-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: format(selectedDate, "yyyy-MM-dd"),
          unavailableSlots,
        }),
      }).then((res) => res.json());
    }
  };

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value.length === 1) {
      // Handling single date when an array of length 1 is returned
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Card style={{ flex: 1 }}>
          <h2>Calendar</h2>
          <Calendar
            // onChange={handleDateChange}
            value={selectedDate}
          />
        </Card>

        <Card style={{ flex: 2 }}>
          <h2>Manage Unavailable Slots</h2>
          {selectedDate && (
            <>
              <div>
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    onClick={() => handleSlotToggle(slot)}
                    style={{
                      margin: "5px",
                      backgroundColor: unavailableSlots.includes(slot)
                        ? "red"
                        : "green",
                    }}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              <Button
                onClick={saveUnavailableSlots}
                style={{ marginTop: "10px" }}
              >
                Save Changes
              </Button>
            </>
          )}
        </Card>
      </div>

      <Card style={{ marginTop: "20px" }}>
        <h2>Appointments</h2>
        <Table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.customerName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminHomePage;
