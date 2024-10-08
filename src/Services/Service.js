const baseURL = "https://api.themoviedb.org/3";
const api_key = "2b86f2a0e2ef98181891acf9070b6f88";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjg2ZjJhMGUyZWY5ODE4MTg5MWFjZjkwNzBiNmY4OCIsIm5iZiI6MTcyNzM0NTUzNy44MzE0ODksInN1YiI6IjY2ZjE1ODFjYzIzNzI1OGU0YzI2ODY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uX7pKE6ZT-Pajhx02T9x4ILNpLQX5nt2MRj9oPPpV6c",
  },
};

//GET all movie data ------
export const getMovies = async () => {
  try {
    const response = await fetch(
      `${baseURL}/movie/upcoming?language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//Trending Movie Data --------
export const trendingMovies = async () => {
  try {
    const response = await fetch(`${baseURL}/trending/movie/day`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//GET single Movie Data --------
export const getSingle = async (id) => {
  try {
    const response = await fetch(`${baseURL}/movie/${id}?api_key=${api_key}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getCastDirector = async (id) => {
  try {
    const response = await fetch(`${baseURL}/movie/${id}/credits`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Get Trailer
export const getTrailer = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
