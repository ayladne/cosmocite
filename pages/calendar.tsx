"use client"
import { useState, useEffect } from "react";

export default function Calendar() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch the schedule data from an API or define it here
    const fetchedSchedule = [
      { day: "Monday", events: ["Event 1", "Event 2"] },
      { day: "Tuesday", events: ["Event 3", "Event 4"] },
      { day: "Wednesday", events: ["Event 5", "Event 6"] },
      { day: "Thursday", events: ["Event 7", "Event 8"] },
      { day: "Friday", events: ["Event 9", "Event 10"] },
      { 
        day: "Saturday", 
        events: [
          "10h30 : accès aux expositions permanentes 'De la Terre à l'Univers' + accès à la salle immersive. valable toute la journée, avec les tickets Expo et Planexpo",
          "10h45 : Visite 'Petits Monts & Merveilles'. valable uniquement avec le ticket Expokids",
          "11h : Planétarium film 'Noisettes'. valable uniquement avec le ticket Planexpo",
          "14h : Planétarium film 'Nous sommes des étoiles' valable uniquement avec le ticket Planexpo",
          "14h : Visite 'Petits Monts & Merveilles'. valable uniquement avec le ticket Expokids",
          "15h30 : Planétarium film 'GranPa et Zoé, Mission Lumière' valable uniquement avec le ticket Planexpo",
          "16h : Visite 'Petits Monts & Merveilles'. valable uniquement avec le ticket Expokids",
          "16h45 : Planétarium film 'Fantômes de l'univers' valable uniquement avec le ticket Planexpo"
        ] 
      },
      { day: "Sunday", events: ["Event 13", "Event 14"] },
    ];
    setSchedule(fetchedSchedule);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-2xl font-bold mb-8">Calendrier de la semaine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {schedule.map((daySchedule, index) => (
          <div key={index} className="p-4 border rounded shadow-lg">
            <h2 className="font-bold text-xl">{daySchedule.day}</h2>
            <ul>
              {daySchedule.events.map((event, eventIndex) => (
                <li key={eventIndex}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}