import { matchesData } from "../data";

import scoreboardIcon from "../assets/images/scoreboard.svg";

const createMatchesMarkup = (data) => {
  return data
    .map(
      ({ teams, time, canPredict, inLive }) => `
      <li class='matches__item ${inLive ? "matches__item_live" : ""}'>
	      <div class='matches__wrapper'>
		      <span class='matches__time'>${
            inLive ? `<span class='matches__time_accent'>${time.split(" ")[0]} </span>${time.split(" ")[1]}` : time
          }
					</span>
		      <div class='matches__teams-content'>
            <div class='matches__team-item'>
		      		<img class='matches__team-logo' src='${teams[0].logo}' alt='${teams[0].name}' />
		      		<span class='matches__team-name'>${teams[0].name}</span>
            </div>
						<div class='matches__team-scores ${teams[0].additionalScore !== null ? "matches__team-scores_multi" : ""}'>
		      		<span class='matches__team-main-score ${teams[0].score !== null ? "matches__team-main-score_active" : ""}'>	
								<span>${teams[0].score !== null ? teams[0].score : "-"}</span>
								<span class="colon"> : </span>
								<span>${teams[1].score !== null ? teams[1].score : "-"}</span>
							</span>
		      		${
                teams[0].additionalScore !== null
                  ? `
							<span class='matches__team-additional-score'>
								<span>(${teams[0].additionalScore})</span>
								<span class="colon">:</span>
								<span>(${teams[1].additionalScore})</span>					
							</span>`
                  : ""
              }		
					  </div>
						<div class='matches__team-item'>
		      		<img class='matches__team-logo' src='${teams[1].logo}' alt='${teams[1].name}' />
		      		<span class='matches__team-name'>${teams[1].name}</span>
            </div>		
					</div>
					${
            canPredict
              ? `<button class="matches__prediction-btn">
                  <img class='matches__scoreboard' src='${scoreboardIcon}' alt='Scoreboard' />
                  <span class="matches__prediction-text">Прогноз</span>
              </button>`
              : ""
          }
	      </div>
      </li>`
    )
    .join("");
};

const matchesListRef = document.querySelector(".matches__list");

matchesListRef.innerHTML = createMatchesMarkup(matchesData);
