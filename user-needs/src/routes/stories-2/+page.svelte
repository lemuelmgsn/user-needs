<script>
    import Story from '../../components/layout/story.svelte';
  </script>
  
  <main>
    <section>
      <Story />
    </section>
  </main>
  
  <!-- <img src="/nyan-cat.svg" class="unicorn-3" alt="unicorn">
  <img src="/nyan-cat2.svg" class="unicorn-4" alt="unicorn"> -->

    <img src="/nyan-cat-tilted2.svg" class="unicorn-5" alt="unicorn">

    <img src="/nyan-cat-tilted.svg" class="unicorn-6" alt="unicorn">
  
  

  <style>

  /* Algemene reset en stijlregels */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }
  
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  :root {
    --card-margin: 4vw;
    --card-top-offset: 0.4em;
    background-image: linear-gradient(#471871, #142151);
  }
  
  /* Unicorn styling */
   .unicorn {
    height: 20rem;
    width: 20rem;
    position: fixed;
    top: 50%;
    animation: yayy infinite;
    animation-duration: 3s;
  }
  .unicorn-2 {
    height: 20rem;
    width: 20rem;
    position: fixed;
    top: 20%;
    animation: yayy2 infinite;
    animation-duration: 2.5s;
  }
  .unicorn-3{
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 20%;
    animation: yayy infinite;
    animation-duration: 3s;
    animation-delay: 2s;
  }
  .unicorn-4{
    height: 6rem;
    width: 6rem;
    position: fixed;
    top: 70%;
    animation: yayy2 infinite;
    animation-duration: 3s;
    animation-delay: 2s;
  }

  @keyframes yayy{
    from{
        transform: translateX(-100vw);
    }
    to{
        transform: translateX(100vw);
    }
  }
  @keyframes yayy2{
    from{
        transform: translateX(100vw);
    }
    to{
        transform: translateX(-100vw);
    }
  } 

/* test scroll */

.unicorn-5{
    height: 20rem;
    width: 30rem;
    position: fixed;
    top: 50%;
    animation: yayy2 infinite;
    animation-duration: 3s;
    animation-delay: 2s;
}
.unicorn-5 {
  animation: scrollOut linear forwards;
  animation-timeline: scroll();
}

.unicorn-6{
    height: 20rem;
    width: 30rem;
    position: fixed;
    top: 10%;
    animation: yayy2 infinite;
    animation-duration: 3s;
    animation-delay: 2s;
    transform: rotateX(45deg);
}
.unicorn-6 {
  animation: scrollOut2 linear forwards;
  animation-timeline: scroll();
}

@keyframes scrollOut {
  from {
    transform: translateX(-200vw) translateY(50%);
  }
  to {
    transform: translateX(100vw) translateY(-40%);
  }
}
@keyframes scrollOut2 {
  from {
    transform: translateX(100vw) translateY(70%);
  }
  to {
    transform: translateX(-130vw) translateY(-50%);
  }
}

  
  /* Main layout */
  main {
    height: 200vh;
    transform: translateY(15vh);
  }
  
  section {
    width: 90vw;
    margin: 0 auto;
  }
  
  /* Responsive heights */
  @media (min-width: 1280px) {
    main {
      height: 187vh;
    }
  }
  
  /* styling for cards */
  .card__content {
    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
    background: #fff;
    color: #0a0507;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 10px;
    padding: 10px;
    height: var(--card-height);
    transform-origin: 50% 0%;
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .story-summary {
    grid-area: 2 / 3 / 3 / 7;
    max-height: 1.5em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  
  .story-playtime,
  .story-icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  /* Sticky cards */
  .card {
    position: sticky;
    top: 0;
    height: var(--card-height);
  }
  
  #cards {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(var(--numcards), var(--card-height));
    padding-bottom: calc(var(--numcards) * var(--card-top-offset));
    margin-bottom: var(--card-margin);
  }
  </style>
  