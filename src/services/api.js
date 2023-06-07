// api.js

export const searchShows = async (query) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  };

  export const searchShowsSummary = async (query) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${query}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  };
  