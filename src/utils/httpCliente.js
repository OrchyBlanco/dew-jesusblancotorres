const API = "https://api.themoviedb.org/3";

export function get(path) {
 return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTBiOGIyMzZjYTc1Y2M3YTQ0NzgzZWQyNjNhNzcxYSIsInN1YiI6IjYyMjUyNGIwNDE0NjVjMDAxYjExOWJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LaVKveESjipsBWNGRRHALZlYIDRgB2GpJgT6OupFSMI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
}
