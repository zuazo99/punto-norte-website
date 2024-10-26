interface Props {
  date: Date;
}

interface Weekday {
  name: string;
  number: number;
  selected?: boolean;
}

function Week({ date }: Props) {
  function generateWeekdays(): Weekday[] {
    const todayWeek = date.getDay() || 7;
    const startWeekDate = date.getDate() - todayWeek;
    const weekdays = [];

    for (let i = 1; i <= 7; i++) {
      const currentDate = new Date(date);
      currentDate.setDate(startWeekDate + i);

      weekdays.push({
        name: currentDate.toLocaleString("es", { weekday: "short" }),
        number: currentDate.getDate(),
        selected: i === todayWeek,
      });
    }
    return weekdays;
  }

  const weekdays = generateWeekdays();

  return (
    <div className="flex h-full w-full flex-col justify-evenly bg-neutral-900 font-brush shadow-md text-xl">
      <header className=" my-2 text-center font-brush font-bold text-4xl">
        <span className="text-primary">{date.toLocaleString("es", { month: "long" })}</span> /
        <span>{" " + date.getFullYear()}</span>
      </header>
      <div className="flex justify-start overflow-x-scroll pt-3 md:justify-center">
        {weekdays.map((day) => {
          if (day.selected) {
            return (
              <div className="light-shadow group relative flex w-16 cursor-pointer content-center justify-center rounded-lg bg-pink-500/30 shadow-lg">
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary "></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                </span>
                <div className="flex items-center py-4">
                  <div className="text-center">
                    <p className="text-primary text-sm"> {day.name} </p>
                    <p className="mt-3  font-bold text-primary">
                      {" "}
                      {day.number}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="hover-light-shadow group flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300  ">
                <div className="flex items-center py-4">
                  <div className="text-center">
                    <p className="text-white transition-all duration-300 text-sm	">
                      {day.name}
                    </p>
                    <p className="mt-3 text-white transition-all duration-300 	">
                      {day.number}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Week;
