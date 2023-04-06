const button = document.getElementsByTagName("button")[0];

button.onclick = () => {
  const input = document.getElementsByTagName("input")[0];

  const block1 = document.getElementsByClassName("block1")[0];

  block1.innerHTML = input.value;
};
