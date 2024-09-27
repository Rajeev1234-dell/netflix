const baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjg2ZjJhMGUyZWY5ODE4MTg5MWFjZjkwNzBiNmY4OCIsIm5iZiI6MTcyNzM0NTUzNy44MzE0ODksInN1YiI6IjY2ZjE1ODFjYzIzNzI1OGU0YzI2ODY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uX7pKE6ZT-Pajhx02T9x4ILNpLQX5nt2MRj9oPPpV6c",
  },
};

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
