<header>

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
</header>

<main>
    <section>
        <ul id="cards">
        <li class="card" style="--index: 1;">
            <div class="card__content">Card 1</div>
        </li>
        <li class="card" style="--index: 2;">
            <div class="card__content">Card 2</div>
        </li>
        <li class="card" style="--index: 3;">
            <div class="card__content">Card 3</div>
        </li>
        <li class="card" style="--index: 4;">
            <div class="card__content">Card 4</div>
        </li>
        <li class="card" style="--index: 5;">
            <div class="card__content">Card 5</div>
        </li>
        <li class="card" style="--index: 6;">
            <div class="card__content">Card 6</div>
        </li>
        </ul>
    </section>
</main>
  
  
<style>
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


:root{
    --card-height: 40vw;
    --card-margin: 4vw;
    --card-top-offset: 1em;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header {
    position: relative;
    z-index: 10; /* Zorg ervoor dat de header boven andere elementen staat */
}

main{
    /* background-color: purple; */
    /* pas aan per scherm grootte */
    /* height: 300vh; */
    height: auto;
}

section{
    width: 80vw;
    margin: 0 auto;
    /* height: 200vh; */

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
    opacity: .7;
}

.card:nth-child(1) .card__content {
    background: blue;
}

.card:nth-child(2) .card__content {
    background: pink;
}

.card:nth-child(3) .card__content {
    background: yellow;
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
	--numcards: 6;
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

</style>