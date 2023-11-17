import { leaguesData } from "../data";

const createLeaguesMarkup = (data) => {
  return data
    .map(
      ({ name, icon, link }) => `
      <li class="leagues__item">
				<a href="${link}" class="leagues__link">
					<img class="leagues__icon" src="${icon}" alt="${name}">
				  <span class="leagues__text">${name}</span>
				</a>
			</li>
    `
    )
    .join("");
};

const leaguesListRef = document.querySelector(".leagues__list");

leaguesListRef.innerHTML = createLeaguesMarkup(leaguesData);
