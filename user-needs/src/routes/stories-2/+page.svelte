,<script>

import Story from '../../components/layout/story.svelte';

</script>

<!-- <header>

    <div class="heading">
        <a href="/stories">back</a>
        <h1>All stories</h1>
    </div>

    <input type="text" placeholder="Search for stories">

    <ul>
        <li>
            <details>
                <summary>Animal</summary>Animal
            </details>
        </li>
        <li>
            <details>
                <summary>Season</summary>Summer
            </details>
        </li>
        <li>
            <details>
                <summary>Language</summary>English
            </details>
        </li>
    </ul>
</header> -->

<main>
    <section>
        <Story/>
    </section>
</main>
  
  
<style>

html, body {
    max-width: 100%;
    overflow-x: hidden; /* Verwijdert horizontale scrollbars */
}

.story-1 {
    background-color: #5A5BE5;
}

.story-2 {
    background-color: pink;
}

.story-3 {
    background-color: #fdd81f;
}

.story-4 {
    background-color: lightgreen;
}



    .story-title {
      font-size: 10px;
      font-weight: 600;
      grid-area: 1 / 3 / 2 / 6;
    }

    p {
      font-size: 8px;
    }

    img {
      max-width: 1.1em;
    }

    .story-image {
      grid-area: 1 / 1 / 4 / 2;
    }

    .story-image img{
      max-width: 3.75em;
      min-height: 4em;
      object-fit: cover;
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
      line-clamp: 2;
      overflow: hidden;
    }

    .story-playtime {
      grid-area: 3 / 3 / 4 / 6; 
    }

    .story-playtime a {
      display: flex;
      align-items: center;
    }

    .story-icons {
      grid-area: 3 / 6 / 4 / 7; 
      justify-content: flex-end;
    }

    .flex-items {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* tumi mudno styling boven */
.heading{
    display: flex;
    justify-content: space-between;
}
ul:nth-of-type(1){
    display: flex;
    width: 100%;
}
ul:nth-of-type(1) > li{
    width: 100%;
    list-style-type: none;
}

/* test issue */
:root{
    /* --card-height: 40vw; */
    --card-margin: 4vw;
    --card-top-offset: .4em;
    background-image: linear-gradient(#471871, #142151);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    position: fixed;
    z-index: 10;
    width: 100%; /* Zorg ervoor dat de header de volledige breedte beslaat */
    height: 10vh; /* Stel een consistente hoogte in */
    background-color: white; 
}


main{
    /* height: auto; */
    height: 198vh;
    transform: translateY(15vh);
}

@media only screen and (min-width: 500px) {
  main {
    height: 190vh;
  }
}
@media only screen and (min-width: 1280px) {
  main {
    height: 187vh;
  }
}

section{
    width: 90vw;
    margin: 0 auto;

}

/* card content */

@supports (animation-timeline: view()) {
    .card__content {
        --start-range: calc(var(--index0) / var(--numcards)* 100%);
        --end-range: calc((var(--index)) / var(--numcards)* 100%);
        animation: linear scale forwards;
        animation-timeline: --cards-element-scrolls-in-body;
        animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
    }
}

.card__content {
    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    color: rgb(10, 5, 7);
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    height: var(--card-height);
    grid-template-areas: "text img";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: stretch;
    outline: var(--outline-width) solid blue;
    opacity: .8;
}

/* .card__content {
      width: 22.5em;
      max-height: 5.3em;
      display: grid;
      grid-template-columns: repeat(6, auto);
      grid-template-rows: repeat(3, 1fr);
      background-color: #fff;
      overflow: hidden;
      padding: 10px;
      border-radius: 4px;
      color: black;
    } */

.card:nth-child(1) .card__content {
    background: #5A5BE5;
}

.card:nth-child(2) .card__content {
    background: pink;
}

.card:nth-child(3) .card__content {
    background: #fdd81f;
}

.card:nth-child(4) .card__content {
    background: lightgreen;
}

.card:nth-child(5) .card__content {
    background: violet;
}

.card:nth-child(6) .card__content {
    background: turquoise;
}


.card__content {
    transform-origin: 50% 0%;
    will-change: transform;
}

/* li */
#card_1{
    --index: 1;
}

@supports (animation-timeline: view()) {
    .card {
        --index0: calc(var(--index) - 1);
        --reverse-index: calc(var(--numcards) - var(--index0));
        --reverse-index0: calc(var(--reverse-index) - 1);
    }
}

.card {
    position: sticky;
    top: 0;
    padding-top: calc(var(--index)* var(--card-top-offset));
    height: var(--card-height);
}

@keyframes scale {
	to {
		transform:
			scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
	}
}

@supports (animation-timeline: view()){
    #cards {
	--numcards: 8;
	view-timeline-name: --cards-element-scrolls-in-body;
 }
}


/* ul */
#cards{
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(var(--numcards), var(--card-height));
    /* gap: 10px; */
}
#cards {
    padding-bottom: calc(var(--numcards)* var(--card-top-offset));
    margin-bottom: var(--card-margin);
}

.card__content {
    position: sticky;
	--start-range: calc(var(--index0) / var(--numcards) * 100%);
	--end-range: calc((var(--index)) / var(--numcards) * 100%);

	animation: linear scale forwards;
	animation-timeline: --cards-element-scrolls-in-body;
	animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
}

/* tm */

.card__content {
    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    color: rgb(10, 5, 7);
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* Raster met 6 kolommen */
    grid-template-rows: repeat(3, auto); /* Dynamische rijen */
    gap: 10px;
    padding: 10px;
    align-items: start;
    height: var(--card-height);
    position: relative;
    transform-origin: 50% 0%;
    will-change: transform;
}

/* Story specifieke elementen binnen .card__content */
.story-image {
    grid-area: 1 / 1 / 4 / 2;
}
.story-image img {
    max-width: 3.75em;
    min-height: 4em;
    object-fit: cover;
}

.story-title {
    font-size: 10px;
    font-weight: 600;
    grid-area: 1 / 3 / 2 / 6;
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
    line-clamp: 2;
    overflow: hidden;
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
.story-title,
.story-summary,
.story-icons {
    max-width: 100%;
    overflow: hidden; /* Voorkom dat tekst of iconen uitrekken */
    text-overflow: ellipsis; /* Voeg een ... toe aan lange tekst */
    white-space: nowrap; /* Optioneel: voorkom regelafbreking */
}



</style>