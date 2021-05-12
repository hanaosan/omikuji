'use strict';

{
    const btn= document.getElementById('btn')

    btn.addEventListener('click', () => {
        const results = ["大吉","中吉","小吉","末吉",]
        btn.textContent = results[Math.floor(Math.random() * results.length)];

    });
}

//復習用メモ
//ランダムな整数値はmath.random。
//定数nの式の後にtextContent書かないと処理されない

//Math.randomだけをつかうと0,0.01,0.02~1までの100個の数がランダムに生成される。
//ifで100％内の内約を操作することが出来る