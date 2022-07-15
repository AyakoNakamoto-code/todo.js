import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // liの中のpタグ生成
  const pTxt = document.createElement("p");
  // pTxt.innerText = inputText;
  pTxt.textContent = inputText;

  // button(完了)タグ生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を選択（parentNode）し、未完了リストから削除
    const deleteTarget = complateButton.parentNode;
    document.getElementById("incomplate-list").removeChild(deleteTarget);
  });

  // button(完了)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 作成された削除ボタンを未完了リストから削除
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplate-list").removeChild(deleteTarget);
  });

  // liの子要素に各要素を設定
  li.appendChild(pTxt);
  li.appendChild(complateButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
