const promise = fetch("http://google.com", {
  method: "GET",
});

promise
  .then((res) => {
    return res.text();
  })
  .then((text) => {
    console.log(text);
  });
