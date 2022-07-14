import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";
  console.log(li);

  // liの中のpタグ生成
  // const listText = document.createElement("p");
  // listText.className = "p";
  // console.log(listText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
