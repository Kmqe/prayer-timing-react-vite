const Prayer = ({ name, time }) => {
  if (time) {
    let hour24 = parseInt(time.slice(0, 2));
    time = "AM " + time;
    if (hour24 > 12) {
      hour24 = hour24 - 12;
      time = "PM " + hour24 + time.slice(5);
    } else if (hour24 == 12) {
      time = "PM " + hour24 + time.slice(5);
    }
  }

  return (
    <div className="prayer">
      <p className="name_prayer">{name}</p>
      <p className="time_prayer">{time}</p>
    </div>
  );
};

export default Prayer;
