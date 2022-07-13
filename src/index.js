import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("inputText").value;
  alert(inputText);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
