import { sportsPredictionsData } from "../data";

const sportPredictionsContentRef = document.querySelector(".sports-predictions__content");
const predictionsOptionsListRef = document.querySelector(".sports-predictions__options-list");
const activeOptionRef = document.querySelector(".options__btn_active.sports-predictions__options-btn");

const createPredictionsMarkup = (data) => {
  if (data.length === 0) {
    return `
    <div class="warning">
			<p class="warning-text">Пока что нету матчей</p>
		</div>`;
  }

  return `<ul class="sports-predictions__list">${data
    .map(
      ({ teams, time, link, timeLabel, sport, isPopular, background }) => `
	    <li class='prediction__item'>
	      <a href='${link}' class='prediction__link'>
		      <div class="prediction__image-wrapper" style='background-image: url("${background}")'></div>
					<div class="prediction__content">
						<p class="prediction__text">
	            <span class="prediction__text-sport">${sport} </span>/
	            <span class="prediction__text-time"> ${timeLabel}</span>
	          </p>
						<h3 class="prediction__title">${teams[0].name} - ${teams[1].name}. Прогноз на матч ${time}</h3>
					</div>
	        ${isPopular ? '<span class="prediction__popular-text">популярный</span>' : ""}
	      </a>
	    </li>`
    )
    .join("")}</ul>`;
};

const generateData = (query) => {
  const dataToDisplay =
    query === "all" ? sportsPredictionsData : sportsPredictionsData.filter((item) => item.date === query);

  sportPredictionsContentRef.innerHTML = createPredictionsMarkup(dataToDisplay);
};

const onPredictionsOptionsClick = (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const time = event.target.dataset.predictionsQuery;

  generateData(time);

  const buttonsRef = [...document.querySelectorAll(".sports-predictions__options-btn")];
  buttonsRef.forEach((button) => button.classList.remove("options__btn_active"));

  event.target.classList.add("options__btn_active");
};

predictionsOptionsListRef.addEventListener("click", onPredictionsOptionsClick);

generateData(activeOptionRef.dataset.predictionsQuery);
