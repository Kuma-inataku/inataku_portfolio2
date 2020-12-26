<template>
  <div>
    <div class="container">
      <div class="l-search">
        <div class="l-main">
          <div class="l-result">  
            <h2>検索結果</h2>
            <!-- <p>「○○」の検索結果：<span class="l-result-num">5</span>件</p> -->
            <!-- <div class="l-result-sub"> -->
              <!-- <p><span class="l-result-num">5</span>件の内、<span class="l-result-num-1st">1</span>～<span class="l-result-num-1st">5</span>件を表示</p> -->
            <!-- </div> -->
          </div>
            <div class="l-list">
              <ul>
                <li>
                  <a href="#">
                    <div class="l-content">
                      <div class="l-img">
                        <img src="static/images/top_image1.jpg" alt="">
                      </div>
                      <div class="l-detail">
                        <h3 class="l-title">テスト</h3>
                        <p>テストテストテストテストテストテストテストテストテストテストテスト</p>
                        <p class="l-fav">"○○"いいね！</p>
                        <!-- <img src="../images/good1.png" alt=""> -->
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="l-content">
                      <div class="l-img">
                        <!-- <img src="../images/top_image1.jpg" alt=""> -->
                      </div>
                      <div class="l-detail">
                        <h3 class="l-title">テスト</h3>
                        <p>テストテストテストテストテストテストテストテストテストテストテスト</p>
                        <p class="l-fav">"○○"いいね！</p>
                        <!-- <img src="../images/good1.png" alt=""> -->
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="l-content">
                      <div class="l-img">
                        <!-- <img src="../images/top_image1.jpg" alt=""> -->
                      </div>
                      <div class="l-detail">
                        <h3 class="l-title">テスト</h3>
                        <p>テストテストテストテストテストテストテストテストテストテストテスト</p>
                        <p class="l-fav">"○○"いいね！</p>
                        <!-- <img src="../images/good1.png" alt=""> -->
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <p class="l-page">前 | 1 | 2 | 3 | 4 | 5 | 次</p>
        </div>
        <div class="l-side">
          <div class="t-c-search">
            <h2>フリーワード検索</h2>
            <form action="">
              <button type="submit" class="word-submit"></button>
              <input type="text" class="word-search" placeholder="キーワードを入力ください" name="freeword">
            </form>
          </div>
          <div class="category">
            <h2>カテゴリ検索</h2>
            <ul class="t-m-category">
              <li>
                <a href="">フェス 初心者</a>
              </li>
              <li>
                <a href="">ライブハウス 初心者</a>
              </li>
              <li>
                <a href="">フェス 注意点</a>
              </li>
              <li>
                <a href="">ツーステ</a>
              </li>
              <li>
                <a href="">ROCKIN'ON JAPAN</a>
              </li>
              <li>
                <a href="">日本の米は世界一</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/">TOP</router-link>
    <router-link to="/page3">DETAIL</router-link>
  </div>
</template>

<script>
</script>

<style>
/* ここからリストページ */
.container{
  color: #333;
}
.l-search{
  display: flex;
  flex-flow: row;
  padding-top: 20px;
}
.l-main{
  width: 70%;
  margin: 0 80px 0 30px;
}
.l-result span{
  font-weight: bold;
}
.l-result-sub{
  display: flex;
  justify-content: space-between;
}
.l-list li{
  padding: 10px 0;
  border-bottom: 3px dotted #ccc;
  background: #fff;
  margin: 10px 0;
}
.l-content{
  display: flex;
}
.l-img img{
  width: 200px;
}
.l-detail{
  margin-left: 20px;
}
.l-title{
  color: #0066CC;
}
.l-fav{
  background: beige;
  display: inline-block;
}
.l-page{
  margin: 20px 0;
  text-align: center;
}
/* ここからサイドバー */
.l-side{
  width: 30%;
  margin: 0 30px 0 0;
}
/* ここからフリーワード検索 */
.l-c-search{
  border-bottom: 2px dotted #ccc;
  background: #fff;
}
h2{
  margin-bottom: 30px;
}
/* ここからカテゴリ検索 */
.category{
  border-bottom: 2px dotted #ccc;
  background: #fff;
  margin-top: 20px;
}
.t-m-category{
  display: flex;
  flex-wrap: wrap;
}
.t-m-category li{
  background:rgb(230, 230, 230, 0.8);
  margin: 10px;
  padding: 10px;
}
</style>