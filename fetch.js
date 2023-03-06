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

const promise2 = fetch("http://google.com/some/post/url", {
  method: "POST",
  body: JSON.stringify({ kek: "345678werty" }),
})
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json.kek);
  });
