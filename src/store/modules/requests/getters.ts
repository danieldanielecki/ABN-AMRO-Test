export default {
  hasRequestedObjects(state: { requests: any }) {
    return state.requests && state.requests.length > 0;
  },
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
  getFilteredTVShowsList: (state: { requests: any }) => (
    searchQuery: string
  ) => {
    const TVShows = state.requests;

    return TVShows.filter((TVShowItem: any) => {
      return TVShowItem.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  },
  getSelectedTVShow: (state: { requests: any }) => (searchQuery: string) => {
    const TVShows = state.requests;

    return TVShows.filter((TVShowItem: any) => {
      return TVShowItem.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  },
};
