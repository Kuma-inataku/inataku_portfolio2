<template>
  <div id="app">
    <transition><!-- ページ遷移時のアニメーション -->
    <router-view></router-view>
    </transition><!-- ページ遷移時のアニメーション -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* ここからreset.css */
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
 margin:0;
 padding:0;
 border:0;
 outline:0;
 vertical-align:baseline;
 background:transparent;
}

body {
 /* プロジェクトによって変動 */
 min-width: 1000px;
 color: #2d334a;
 line-height: 1.6;
 font-weight: 400;
 font-family: 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'YuGothic', '游ゴシック', 'メイリオ', Meiryo, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
 

 width: 100%;
 font-smoothing: antialiased;
 font-variant-numeric: tabular-nums;
 /* safari hover対策 */
 -webkit-font-smoothing: antialiased;
 background:#fffffe;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
 display:block;
}

ul, ol {
 list-style:none;
}

blockquote, q {
 quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
 content:'';
 content:none;
}

a {
 margin:0;
 padding:0;
 vertical-align:baseline;
 text-decoration: none;
 color: inherit;
}

/* change colours to suit your needs */
ins {
 background-color:#ff9;
 color:#000;
 text-decoration:none;
}

/* change colours to suit your needs */
mark {
 background-color:#ff9;
 color:#000;
 font-style:italic;
 font-weight:bold;
}

del {
 text-decoration: line-through;
}

abbr[title], dfn[title] {
 border-bottom:1px dotted;
 cursor:help;
}

table {
 border-collapse:collapse;
 border-spacing:0;
}

/* change border colour to suit your needs */
hr {
 display:block;
 height:1px;
 border:0;
 border-top:1px solid #cccccc;
 margin:1em 0;
 padding:0;
}

input, select {
 vertical-align:middle;
}

img {
 vertical-align: bottom;
 line-height: 1.0;
}

button {
 line-height: 1.0;
 background-color: transparent;
 border: none;
 cursor: pointer;
 outline: none;
 padding: 0;
 appearance: none;
}
/* ここからナビバー */
.t-nav-list{
  display: flex;
  justify-content: flex-end;
  background: #094067;
  color: #ccc;
  height: 70px;
  list-style-type: none;
}
.t-nav-list a{
  display: block;
  padding: 15px;
  margin: 5px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}
.t-nav-list a:hover {
  background-color: #8cae47;
  }
  /* ここからタイトル */
.title{
  position: absolute;
  color: #fff;
  margin: 5px 10px;
}
h3{
  margin-bottom: 30px;
  font-size: 25px;
}

/* 遷移ボタンデザイン */
.router{

  line-height: 0;
  display: table-cell;
  vertical-align: middle;

  /* padding: 10px; */
  /* margin: 20px; */
  }
/* ここからフッター */
footer{
  color: #fff;
  background:#000; 
  text-align: center;
}
</style>
