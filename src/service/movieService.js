async function movieService() {
  return await fetch(`https://swapi.dev/api/films/?format=json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .catch((err) => {
        console.err(err.message);
      });
 
}

export default movieService;
