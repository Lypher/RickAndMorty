const getCharDetail = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    .then((data) => {
      let character = {
        name: data.name,
        image: data.image,
        gender: data.image,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) => res.writeHead(500, { "Content-Type": "text/plain" }))
    .end("Error id no encontrado");
};

module.exports = getCharDetail;
