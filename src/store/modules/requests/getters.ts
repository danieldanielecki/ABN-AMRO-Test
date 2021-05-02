export default {
  getCategories(state: { requests: any }) {
    const categories: Set<unknown> = new Set();
    const TVShows = state.requests;

    TVShows.filter((item: any) => {
      item.genres.forEach((element: string) => {
        categories.add(element);
      });
    });
    return categories;
  },
  getFilteredTVShowsList(state: { requests: any }, searchQuery: any) {
    const TVShows = state.requests;

    return TVShows.filter((TVShowItem: any) => {
      return TVShowItem.name
        .toString()
        .toLowerCase()
        .includes(searchQuery.toString().toLowerCase());
    });
  },
};
