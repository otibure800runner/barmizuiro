//ロゴフェード
$(document).ready(function(){
  //クッキーを用いてアクセスが無い時の処理の設定
  if($.cookie("access") == undefined) {
    //accsessに値を設定(undifinedの解除)
    $.cookie("access","onece");
    $.cookie("access", { expires: 0 });
    setTimeout(function(){
      $(".start img").fadeIn(1600);
    },500);//0.5秒後にロゴを1.6秒フェードイン
    setTimeout(function(){
      $(".start img").fadeOut(500);
    },2500);//2.5秒後にロゴをo.5秒フェードアウト
    setTimeout(function(){
      $(".start p:last-child").fadeIn(1600);
    },3100);//3.1秒後にロゴを1.6秒フェードイン
    setTimeout(function(){
      $(".start").fadeOut(500);
    },5700);//5.7秒後にロゴを0.5秒フェードアウト
  }else{
    //最初に設定してた背景の水色の削除
    $(".start").css("display","none");
  }
});
//ロゴフェードここまで
//ハンバーガーメニュー
$(document).ready(function(){
  $("#btn").on("click",function(){
    $("#nav").slideToggle();
    $(".menu-trigger").toggleClass("active");
    return false;
  });
});
//ハンバーガーメニューここまで
//スライドショー
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',	//'horizontal', 'vertical', 'fade'
    speed: 2000,	//2秒掛けてアニメーション移動（2000=2秒）
    startSlide: 0,	//最初のスライドを設定：0からカウントします
    auto: true,	//自動再生［true=ON、false=OFF］
    autoControls: false,	//自動再生のコントローラを表示［true=ON、false=OFF］
    adaptiveHeight: true,	//高さが大きい場合に自動でフィットします
    captions: false	//true=imgタグのtitle属性を表示［true=表示、false=非表示］
  });
});
//スライドショーここまで

$(function(){
  $(".right i").hover(
    function(){
      $(this).css("font-size","40px")
    },
    function(){
      $(this).css("font-size","30px")
    }
  );
});
