import { useEffect, useState } from "react";
import holidays from "../data/holidays.json";
import "./Calendar.css";

export default function Calendar( {compact = false} ) {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(`https://isdayoff.ru/api/getdata?year=${year}&month=${month}`)
      .then((res) => res.text())
      .then((data) => {
        const arr = data.split("").map((val, i) => {
          const dayNum = i + 1;
          const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(
            dayNum
          ).padStart(2, "0")}`;
          return {
            date: dateStr,
            isHoliday: val === "1",
            title: holidays[dateStr] || "",
          };
        });
        setDays(arr);
      })
      .catch(() => setDays([]));
  }, [month, year]);

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const firstDay = new Date(year, month - 1, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  return (
    <section id="calendar" className="calendar">
      <div className={`calendar ${compact ? 'calendar-compact' : ''}`}>
      {/* <h2>Производственный календарь</h2> */}
      <div className="calendar-header">
        <button onClick={prevMonth}>←</button>
        <span>
          {monthNames[month - 1]} {year}
        </span>
        <button onClick={nextMonth}>→</button>
      </div>

      <div className="calendar-grid">
        {weekDays.map((wd, i) => (
          <div key={i} className="weekday">
            {wd}
          </div>
        ))}

        {Array.from({ length: offset }).map((_, i) => (
          <div key={`empty-${i}`} className="empty"></div>
        ))}

        {days.map((day, i) => (
          <div
            key={i}
            className={`day ${day.isHoliday ? "holiday" : "workday"} ${
              day.date === todayStr ? "today" : ""
            }`}
            title={day.title}
          >
            {day.date.split("-")[2]}
          </div>
        ))}
      </div>

      <div className="legend">
        <span className="workday-box"></span> Рабочий день
        <span className="holiday-box"></span> Выходной / праздник
        <span className="today-box"></span> Сегодня
      </div>
      </div>
    </section>
  );
}
