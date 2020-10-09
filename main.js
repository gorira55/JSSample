//cの部分には最終的にぴょんぴょんが入る
function randomCharactor(c) {

    //羽させる要素を全て取得
    var randomChar = document.getElementsByClassName(c);

    //forで総当たり
    for (var i = 0; i < randomChar.length; i++) {

        //クロージャー
        (function(i) {

            //i番目の要素、テキスト内容、文字列の長さを取得
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;

            //何番目の文字を羽させるかをランダムで決める
            var Num = ~~(Math.random() * randomCharLength);

            //跳ねさせる文字をspanタグで囲む、それ以外の文字と合わせて再び文字列を作る
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" +
            randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;

            //アニメーションが終わったら再び関数を発火する
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function() {
                randomCharactor(c)
            }, false)
        })(i)
    }
}

//クラス名がpyonpyon
randomCharactor("pyonpyon");

function randomColor(d) {

    var rdc = document.getElementsByClassName(d);

    for (var i = 0; i < rdc.length; i++) {

        //クロージャー
        (function(i) {
            var rdcI = rdc[i];
            var rdcIText = rdcI.textContent;
            var rdcL = rdcIText.length;

            //南蛮目の文字を色変えするか
            var n = ~~(Math.random() * rdcL);

            //色変えする文字をspanタグで囲むそれ以外の文字と合わせて再び文字列を作る
            var newRC = rdcIText.substring(0, n) + "<span>" +
            rdcIText.charAt(n) + "</span>" + rdcIText.substring(n + 1, rdcL);
            rdcI.innerHTML = newRC;

            //アニメーションが終わったら再び関数を発火させる
            document.getElementsByClassName(d)
            [0].children[0].addEventListener("animationend", function() {
                randomColor(d)
            }, false)
        })(i)
    }
}

//クラス名がirokaeのクラスを色変えする
randomColor("irokae");