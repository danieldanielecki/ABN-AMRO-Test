export default {
  async fetchRequests(context: {
    commit: (
      arg0: string,
      arg1: {
        id: number;
        genres: [];
        images: Record<string, unknown>;
        language: string;
        name: string;
        officialSite: string;
        premiered: string;
        rating: number;
        schedule: Record<string, unknown>;
        status: string;
        summary: string;
        type: string;
        url: string;
      }[]
    ) => void;
  }) {
    const response = await fetch(`http://api.tvmaze.com/shows`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests."
      );
      throw error;
    }

    const requests: any = [];

    for (const key in responseData) {
      const request = {
        id: responseData[key].id,
        genres: responseData[key].genres,
        images: responseData[key].image,
        language: responseData[key].language,
        name: responseData[key].name,
        officialSite: responseData[key].officialSite,
        premiered: responseData[key].premiered,
        rating: responseData[key].rating.average,
        schedule: responseData[key].schedule,
        status: responseData[key].status,
        summary: responseData[key].summary,
        type: responseData[key].type,
        url: responseData[key].url,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
