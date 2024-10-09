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

// fetch Data -------
const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Request Error", error);
    throw error;
  }
};

// GET all movie data
export const getMovies = async () => {
  const url = `${baseURL}/movie/upcoming?language=en-US&page=1`;
  return fetchData(url);
};

// Trending Movie Data
export const trendingMovies = async () => {
  const url = `${baseURL}/trending/movie/day`;
  return fetchData(url);
};

// GET single Movie Data
export const getSingle = async (id) => {
  const url = `${baseURL}/movie/${id}?api_key=${api_key}`;
  return fetchData(url);
};

// Get Cast and Director Data
export const getCastDirector = async (id) => {
  const url = `${baseURL}/movie/${id}/credits`;
  return fetchData(url);
};

// Get Trailer Data
export const getTrailer = async (id) => {
  const url = `${baseURL}/movie/${id}/videos`;
  return fetchData(url);
};

// Search Movies
export const searchData = async (query) => {
  const url = `${baseURL}/search/movie?query=${query}&api_key=${api_key}`;
  return fetchData(url);
};
