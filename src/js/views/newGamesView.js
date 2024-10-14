import View from "./view.js";

class NewGamesView extends View {
  _parentEl = document.querySelector(".new-games");

  _generateMarkup() {
    return this._data.reduce((sum, curr) => (sum += this.#generateGame(curr)), "");
  }

  #generateGame(game) {
    return `<article class="game">
                    <figure class="game__header">
                        <img class="game__img" src="${game.thumbnail}" alt="${game.title}" />
                    </figure>
                    <div class="game__body">
                        <div class="game__title">
                            <h3 class="heading heading--tertiary"><a href="${game.gameUrl}">${game.title}</a></h3>
                            <div class="game__title-sub">
                                <p class="game__dev">${game.developer}</p>
                                <p class="game__date">${game.releaseDate}</p>
                            </div>
                        </div>
                        <p class="game_desc">${game.shortDescription}</p>
                    </div>
                </article>`;
  }

  //   #formatDate(date) {
  //     const date = new Date(date);
  //   }
}

export default new NewGamesView();
