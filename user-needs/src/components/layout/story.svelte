

<script>
  // Data met stories
  let stories = [
    { id: 1, title: "It was 8 o'clock", language: "/languages/Dutch.svg", summary: "Story about .... more information soon.", playtime: "3 min 26 sec" },
    { id: 2, title: "Another Story", language: "/languages/English.svg", summary: "A short story summary.", playtime: "5 min 10 sec" },
    { id: 3, title: "Mystery Tale", language: "/languages/French.svg", summary: "Exciting and mysterious story.", playtime: "7 min 50 sec" },
    { id: 4, title: "Adventure Time", language: "/languages/Spanish.svg", summary: "An adventurous journey.", playtime: "4 min 30 sec" },
    { id: 5, title: "It was 8 o'clock", language: "/languages/Dutch.svg", summary: "Story about .... more information soon.", playtime: "3 min 26 sec" },
    { id: 6, title: "Another Story", language: "/languages/English.svg", summary: "A short story summary.", playtime: "5 min 10 sec" },
    { id: 7, title: "Mystery Tale", language: "/languages/French.svg", summary: "Exciting and mysterious story.", playtime: "7 min 50 sec" },
    { id: 8, title: "Adventure Time", language: "/languages/Spanish.svg", summary: "An adventurous journey.", playtime: "4 min 30 sec" },
  ];

  // Kleurenarray
  const colors = ["turquoise", "violet", "#fdd81f", "lightgreen"];
</script>

<ul id="cards">
  {#each stories as story, index}
    <li class="card" style="--index: {index + 1};">
      <div
        class="card__content"
        style="background-color: {colors[index % colors.length]};"
      >
        <div class="story-image flex-items">
          <img src="/temp/profile-test.png" alt="Story image" />
        </div>
        <h3 class="story-title">{story.title}</h3>
        <div class="story-language flex-items">
          <img src="{story.language}" alt="Language flag" />
        </div>
        <p class="story-summary">{story.summary}</p>
        <div class="story-playtime flex-items">
          <a href="#">
            <img src="/icons/story-playtime.svg" alt="Icon for playtime" />
          </a>
          <p>{story.playtime}</p>
        </div>
        <div class="story-icons flex-items">
          <img src="/icons/download-icon.svg" alt="Icon for download" />
          <img src="/icons/add-to-playlist.svg" alt="Icon for adding to playlist" />
        </div>
      </div>
    </li>
  {/each}
</ul>

<style>

:root {
    /* --card-height: 40vw; */
    --card-margin: 4vw;
    --card-top-offset: 1em;
    background-image: linear-gradient(#471871, #142151);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    max-width: 100%;
    overflow-x: hidden; /* Verwijdert horizontale scrollbars */
}

/* Algemene styling */
header {
    position: fixed;
    z-index: 10;
    width: 100%; /* Zorg ervoor dat de header de volledige breedte beslaat */
    height: 10vh; /* Stel een consistente hoogte in */
    background-color: white;
}

main {
    height: auto;
    transform: translateY(15vh);
}

section {
    width: 100vw;
    margin: 0 auto;
}

/* Grid styling voor kaarten */
#cards {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(var(--numcards), var(--card-height));
    gap: 5px; /* Verminder de ruimte tussen kaarten */
    padding-bottom: calc(var(--numcards) * var(--card-top-offset));
    margin-bottom: var(--card-margin);
    view-timeline-name: --cards-element-scrolls-in-body; /* Voor animaties */
    --numcards: 8; /* Aantal kaarten */
}

.card {
    position: sticky;
    top: 0;
    padding-top: calc(var(--index) * var(--card-top-offset));
    height: var(--card-height);
    will-change: transform;
}

.card__content {
    position: sticky;
    background: rgb(255, 255, 255);
    color: rgb(10, 5, 7);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
    padding: 10px;
    align-items: start;
    height: 5.3rem;
    transform-origin: 50% 0%;
    opacity: 0.8;
    animation: linear scale forwards;
    animation-timeline: --cards-element-scrolls-in-body;
    --start-range: calc(var(--index0) / var(--numcards) * 100%);
    --end-range: calc(var(--index) / var(--numcards) * 100%);
    animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);    
}


/* Verklein en behoud structuur */
.story-image img {
    max-width: 3.75em;
    min-height: 4em;
    object-fit: cover;
}

/* Story elementen binnen een kaart */
.story-image { grid-area: 1 / 1 / 4 / 2; }
.story-title {
    font-size: 10px;
    font-weight: 600;
    grid-area: 1 / 3 / 2 / 6;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.story-language {
    grid-area: 1 / 6 / 2 / 7;
    justify-content: flex-end;
}
.story-summary {
    grid-area: 2 / 3 / 3 / 7;
    width: 275px;
    max-height: 1.5em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-clamp: 2;
}
.story-playtime {
    grid-area: 3 / 3 / 4 / 6;
    display: flex;
    align-items: center;
    gap: 8px;
}
.story-icons {
    grid-area: 3 / 6 / 4 / 7;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    gap: 8px;
}

.story-icons img, .story-title, .story-summary {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Flex items voor consistentie */
.flex-items {
    display: flex;
    align-items: center;
    /* gap: 8px; */
}

p {
    font-size: 8px;
}

img {
    max-width: 1.1em;
}

/* Animatie */
/* Variabelen voor kaarten */
@supports (animation-timeline: view()) {
    .card {
        --index0: calc(var(--index) - 1);
        --reverse-index: calc(var(--numcards) - var(--index0));
        --reverse-index0: calc(var(--reverse-index) - 1);
    }

    .card__content {
        --start-range: calc(var(--index0) / var(--numcards) * 100%);
        --end-range: calc(var(--index) / var(--numcards) * 100%);
        animation: linear scale forwards;
        animation-timeline: --cards-element-scrolls-in-body;
        animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
    }
}

@keyframes scale {
    to {
        transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
    }
}


</style>