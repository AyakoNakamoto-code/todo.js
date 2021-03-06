import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  createIncomplateList(inputText);
};

// 未完了リストから指定の要素を削除する関数作成
const deleteFromComplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomplateList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // liの中のpタグ生成
  const pText = document.createElement("p");
  // pText.innerText = inputText;
  pText.textContent = text;

  // button(完了)タグ生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 完了ボタンの親タグ(li)を選択（parentNode）し、未完了リストから削除
    deleteFromComplateList(complateButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = complateButton.parentNode;

    // TODOテキスト内容を取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const pText = document.createElement("p");
    pText.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncomplateList(text);
    });

    // liタグの子要素に各要素を追加
    addTarget.appendChild(pText);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(完了)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 作成された削除ボタンを未完了リストから削除 → 関数化し呼び出し
  deleteButton.addEventListener("click", () => {
    deleteFromComplateList(deleteButton.parentNode);
  });

  // liの子要素に各要素を設定
  li.appendChild(pText);
  li.appendChild(complateButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
