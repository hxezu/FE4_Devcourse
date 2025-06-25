const url = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTYyOTg2MzI1Ny4xMjk5OTk5LCJzdWIiOiI2MTI1YmQ1OThjMzE1OTAwNjI5ODk1MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pkibN_qeBiimGs0Yhy8thv9kDfVTV8Jojx8tIAGGw48",
  },
};

const revalidateOption = {
  next: {
    revalidate: 60 * 60 * 24,
  },
};

export const getMovieData = async (path: string, genres = "") => {
  // await new Promise((resolve) => setTimeout(resolve, 50000));

  if (path === "discover/movie")
    return await (
      await fetch(`${url}/${path}?with_genres=${genres}`, {
        ...options,
        ...revalidateOption,
      })
    ).json();

  return await (
    await fetch(`${url}/movie/${path}`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieVideoData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}/videos`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieDetailData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieCreditData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}/credits`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieMoreData = async (
  page = 1,
  type = "now_playing",
  keyword = ""
) => {
  console.log(keyword);

  if (keyword) {
    return await (
      await fetch(
        `${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`,
        {
          ...options,
          ...revalidateOption,
        }
      )
    ).json();
  } else {
    return await (
      await fetch(`${url}/movie/${type}?page=${page}`, {
        ...options,
        ...revalidateOption,
      })
    ).json();
  }
};
