fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // console.log(data.joke);

    const jokesEl = document.querySelector(".jokes");
    const jokeUl = document.createElement("ul");

    jokeUl.innerHTML = `
    <li>${data.joke}</li>
    `;
    jokesEl.append(jokeUl);
  });
