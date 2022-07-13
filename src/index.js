import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("inputText").value;
  alert(inputText);
  document.getElementById("addText").value = "";
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
