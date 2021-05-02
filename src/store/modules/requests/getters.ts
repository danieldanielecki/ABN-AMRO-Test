export default {
  getTVShows(state: { requests: any }) {
    return state.requests;
  },
  getCategories(_: null, getters: { getTVShows: any }) {
    const categories: Set<unknown> = new Set();
    const TVShows = getters.getTVShows;

    TVShows.filter((item: any) => {
      item.genres.forEach((element: string) => {
        categories.add(element);
      });
    });
    return categories;
  },
};
