import "./styles.css";

const onClickAdd = function () {
  const inputText = document.getElementById("inputText").values;

  alert(inputText);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
