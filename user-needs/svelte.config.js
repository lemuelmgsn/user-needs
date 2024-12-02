import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter(),
    // Zorg ervoor dat deze routes juist worden verwerkt
    prerender: {
      entries: ['*']
    }
  }
};
