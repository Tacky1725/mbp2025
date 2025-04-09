(function(){
  // 正しいパスワードを設定（必要に応じて変更してください）
  var correctPassword = "20210329";
  // 初期状態はロックされている
  var isUnlocked = false; 
  
  // パスワード入力を促す
  var userInput = prompt("パスワード: YYYYMMDD"); 

  if (userInput === correctPassword || isUnlocked) {
    // 正解の場合は主要コンテンツを表示
    document.getElementById("content").style.display = "block";
  } else {
    // 不正解の場合：警告メッセージを表示し、ページ内容をブロック
    alert("パスワードが間違っています。ページを閲覧できません。");
    document.body.innerHTML = "<h1 style='text-align:center;margin-top:50px;'>アクセス拒否</h1><p style='text-align:center;'>正しいパスワードを入力してください。</p>";
  }
})();
