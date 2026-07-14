import { Clock, MapPin } from 'lucide-react';

export default function SchedulePage() {
  const scheduleData = [
    {
      dayTitle: "Day 1 - Friday, 30 October 2026",
      events: [
        { time: "10:00 - 17:00", type: "Workshop", title: "Parallel Workshops by Faculty Members for Student Participants", track: "All Tracks", room: "Department Labs" }
      ]
    },
    {
      dayTitle: "Day 2 - Saturday, 31 October 2026",
      events: [
        { time: "09:30 - 10:15", type: "Keynote", title: "Opening Keynote Lecture", track: "Common Session", room: "Main Auditorium" },
        { time: "10:15 - 10:45", type: "Networking", title: "Tea Break & Group Photograph", track: "All Participants", room: "Foyer" },
        { time: "10:45 - 11:15", type: "Invited Talk", title: "Technical Session I", track: "Tracks 1-10 (Parallel)", room: "Various Rooms" },
        { time: "11:15 - 11:33", type: "Student Presentation 1", title: "Structural Analysis of Disc Bending and Torsion in a Simple Disc Brake Actuator", track: "Track 1", room: "Room A" },
        { time: "11:33 - 13:03", type: "Student Presentations 2-6", title: "Parallel Technical Sessions", track: "Tracks 1-10", room: "Various Rooms" },
        { time: "13:15 - 14:30", type: "Break", title: "Lunch Break", track: "All Participants", room: "Dining Hall" },
        { time: "14:30 - 15:00", type: "Invited Talk", title: "Technical Session II", track: "Tracks 1-10 (Parallel)", room: "Various Rooms" },
        { time: "15:00 - 16:12", type: "Student Presentations 7-10", title: "Parallel Technical Sessions", track: "Tracks 1-10", room: "Various Rooms" },
        { time: "16:30 - 17:00", type: "Invited Talk", title: "Technical Session III", track: "Tracks 1-10 (Parallel)", room: "Various Rooms" },
        { time: "17:00 - 18:30", type: "Student Presentations 11-15", title: "Parallel Technical Sessions", track: "Tracks 1-10", room: "Various Rooms" }
      ]
    },
    {
      dayTitle: "Day 3 - Sunday, 1 November 2026",
      events: [
        { time: "09:30 - 10:15", type: "Keynote", title: "Day 3 Keynote Lecture", track: "Common Session", room: "Main Auditorium" },
        { time: "10:45 - 11:15", type: "Invited Talk", title: "Technical Session I", track: "Tracks 1-10 (Parallel)", room: "Various Rooms" },
        { time: "11:15 - 13:03", type: "Student Presentations 1-6", title: "Parallel Technical Sessions", track: "Tracks 1-10", room: "Various Rooms" },
        { time: "13:15 - 14:30", type: "Break", title: "Lunch Break", track: "All Participants", room: "Dining Hall" },
        { time: "14:30 - 15:00", type: "Invited Talk", title: "Technical Session II", track: "Tracks 1-10 (Parallel)", room: "Various Rooms" },
        { time: "15:00 - 16:12", type: "Student Presentations 7-10", title: "Parallel Technical Sessions", track: "Tracks 1-10", room: "Various Rooms" },
        { time: "16:30 - 17:00", type: "Invited Talk", title: "Technical Session III", track: "Tracks 1-10 (Parallel)", room: "Various Rooms" },
        { time: "17:00 - 18:30", type: "Student Presentations 11-15", title: "Parallel Technical Sessions", track: "Tracks 1-10", room: "Various Rooms" },
        { time: "18:30 - 20:00", type: "Special Event", title: "Valedictory Function & Cultural Evening", track: "All Participants", room: "Outreach Auditorium" }
      ]
    }
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase">Program Schedule</h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          {scheduleData.map((day, index) => (
            <div key={index} className="bg-white border-t-4 border-blue-600 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                {day.dayTitle}
              </h2>
              
              <div className="space-y-4">
                {day.events.map((event, eIndex) => (
                  <div key={eIndex} className="flex flex-col md:flex-row md:items-center gap-4 p-4 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                    <div className="md:w-48 flex-shrink-0 flex items-center gap-2 text-slate-600 font-semibold font-mono">
                      <Clock size={16} className="text-blue-500" />
                      {event.time}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2.5 py-0.5 rounded bg-slate-800 text-xs font-bold text-white uppercase tracking-wider">
                          {event.type}
                        </span>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          {event.track}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                    </div>

                    <div className="md:w-48 flex-shrink-0 flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <MapPin size={16} />
                      {event.room}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}