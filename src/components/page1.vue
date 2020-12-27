<template>
  <div>
   <!-- ここからVue-carousel -->
    <div id="app">
      <carousel autoplay="true" :autoplay-hoverpause="false" loop="true" speed="2000" :per-page="1" autoplayTimeout="4500" :pagination-enabled="false">
        <slide>
          <img src="static/images/top_image3.jpg" alt="" width="100%" max-width="1000px" height="800px">
        </slide>
        <slide>
          <img src="static/images/top_image4.jpg" alt="" width="100%" max-width="1000px" height="800px">
        </slide>
        <slide>
          <img src="static/images/top_image5.jpg" alt="" width="100%" max-width="1000px" height="800px">
        </slide>
      </carousel>
    </div>
    <!-- ここまでVue-carousel -->
      <div class="subtitle">
        <div class="subtitle-comment">
          <h2>Hello, J-Rock World!</h2>
          <p>J-Rockのあらゆる「困った」を即解決！</p>
        </div>
      </div>
      <div class="select">
        <div class="select-menu">
          <router-link to="/page2" class="router">
           GO TO SEARCH⇒
          </router-link>
        </div>
        <div class="select-submenu">
          <div class="select-about">
            <p>ABOUT</p>
          </div>
          <div class="select-contact">
            <p>CONTACT</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
/* ここからVue-carousel */
.VueCarousel{
  height: 600px;
}
.VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide{
  height: 100% !important;
}
.VueCarousel-slide .slider-inner {
  height: 100%;
  /* background-color: #62caaa;  */
  display: flex; 
  justify-content: center; 
  align-items: center; 
  color: #fff; 
  border: 2px solid #ccc;
  font-size: 30px; 
  border-radius: 10px;
}
.subtitle{
  position: absolute;
  bottom: 150px;
  left: 50px;
  width: 350px;
  height: 100px;
  background-color:rgba(255,255,255,0.7);
}
.subtitle-comment{
  background-color:rgba(255,255,255,0.7);
  position: absolute;
  top: 20px;
  left: 20px;
  width: 350px;
  height: 100px;
  text-align: center;/*一応BOX内の文字も中央寄せ*/
}
.select{
  position: absolute;
  bottom: 80px;
  left:900px;
  width: 500px;
  background-color:rgba(255,255,255,0.7);
}
.select-menu{
  display: table;
  width: 100%;
  background-color:rgba(255,255,255,0.7);
  width: 250px;
  height: 50px;
  margin:0 auto;
  margin-top:10px;
}
.select-submenu{
  display: flex;
  justify-content: space-around;
  margin:20px 0;
}
.select-about{
  display: table;
  width: 100%;
}

.select-about p{
  width:px;
  height: 50px;
  background:yellow;
  display: table-cell;
  vertical-align: middle;
}
.select-contact{
  display: table;
  width:100%;
}

.select-contact p{
  width: 100px;
  height: 50px;
  background: white;
  display: table-cell;
  vertical-align: middle;
}

/* ここからフリーワード検索 */
.t-c-search{
  border-bottom: 2px solid #ccc;
  display: flex;
  justify-content: center;
  padding-bottom:30px;
  margin-bottom: 50px;
}
.t-word-submit{
  /* width: 50px; */
  border: 1px solid ;
  padding: 10px;
  color: #fffffe;
  background-color: #3da9fc;
  /* background: #ccc; */
  /* margin-left: 30px; */
}
.t-word-search{
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 10px 8px 10px;
  font-size: 15px;
  background-color: beige;
  background-size: 18px;
  outline: none;
}

/* ここからカテゴリ検索 */
.t-other_search{
  display: flex;
  flex-flow: row;
}
.t-main{
  width: 50%;
}
.t-m-category{
  display: flex;
  flex-wrap: wrap;
  /* white-space: nowrap; */
}
.t-m-category li{
  background:rgb(230, 230, 230, 0.8);
  margin: 10px;
  padding: 10px;
}
/* ここからランキング検索 */
.t-side{
  width: 50%;
  border-left: 2px solid #ccc;
}
.t-s-search{
  background:rgb(230, 230, 230, 0.8);
  margin-left: 10px;
  padding: 10px 10px 0;
  display: inline-block;
  text-align: left;
}
.t-s-search li{
  margin-bottom: 10px;
}
.ranking_1{
  border-bottom: 1px dotted #000;
}
.ranking_2{
  border-bottom: 1px dotted #000;
}
.ranking_1::before{
  content: "1位";
}
.ranking_2::before{
  content: "2位";
}
.ranking_3::before{
  content: "3位";
}  
</style>