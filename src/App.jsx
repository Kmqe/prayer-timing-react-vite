import { useEffect, useState } from "react";
import Prayer from "./components/Prayer";

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [date, setDate] = useState("01-01-2025");
  const [city, setCity] = useState("Medina");

  const cities = [
    { name: "المدينة المنورة", value: "Madinah" },
    { name: "مكة المكرمة", value: "Makkah" },
    { name: "الرياض", value: "Riyadh" },
    { name: "جدة", value: "Jeddah" },
    { name: "الدمام", value: "Dammam" },
    { name: "بريدة", value: "Buraydah" },
    { name: "أبها", value: "Abha" },
    { name: "حائل", value: "Ha'il" },
    { name: "تبوك", value: "Tabuk" },
    { name: "سكاكا", value: "Sakaka" },
    { name: "الباحة", value: "baha" },
    { name: "جازان", value: "Jizan" },
    { name: "عرعر", value: "Arar" },
  ];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress?address=${city},SA&date=2025-05-20`
        );
        const data = await response.json();
        setPrayerTimes(data.data.timings);
        setDate(data.data.date.gregorian.date);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrayerTimes();
  }, [city]);

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>المدينة</h3>

            <select name="" id="" onChange={(e) => setCity(e.target.value)}>
              {cities.map((city) => {
                return (
                  <option key={city.value} value={city.value}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="date">
            <h3>التاريخ</h3>
            <h4>{date}</h4>
          </div>
        </div>

        <Prayer name="الفجر" time={prayerTimes.Fajr} />
        <Prayer name="الظهر" time={prayerTimes.Dhuhr} />
        <Prayer name="العصر" time={prayerTimes.Asr} />
        <Prayer name="المغرب" time={prayerTimes.Maghrib} />
        <Prayer name="العشاء" time={prayerTimes.Isha} />
      </div>
    </section>
  );
}

export default App;
