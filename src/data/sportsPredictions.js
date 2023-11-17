import matchPreview1 from "../assets/images/footbal-preview-1.png";
import matchPreview2 from "../assets/images/footbal-preview-2.png";
import matchPreview3 from "../assets/images/footbal-preview-3.png";

const date = {
  TODAY: "today",
  TOMORROW: "tomorrow"
};

export const sportsPredictionsData = [
  {
    time: "11.04.2022",
    timeLabel: "Завтра в 09:20",
    date: date.TOMORROW,
    sport: "Футбол",
    teams: [{ name: "Металлург Магнитогорск" }, { name: "Трактор" }],
    isPopular: true,
    background: matchPreview1,
    link: "#"
  },
  {
    time: "10.04.2022",
    timeLabel: "Завтра в 09:20",
    date: date.TOMORROW,
    sport: "Футбол",
    teams: [{ name: "Лейпциг" }, { name: "Хоффенхайм" }],
    isPopular: true,
    background: matchPreview2,
    link: "#"
  },
  {
    time: "10.04.2022",
    timeLabel: "Завтра в 09:20",
    date: date.TOMORROW,
    sport: "Футбол",
    teams: [{ name: "Манчестер Сити" }, { name: "Ливерпуль" }],
    isPopular: false,
    background: matchPreview3,
    link: "#"
  }
];
