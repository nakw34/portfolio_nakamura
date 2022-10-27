$(function(){
	$('a[href^="#"]').click(function(){
	  var adjust = 230;
	  var speed = 400;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top + adjust;
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
	});
  });

// sample.js
$(function(){
    var headerHeight = 109; // ヘッダーの高さ
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

$(function () {
  //////////// 一番目以外のコンテンツは非表示
  $(".menu-box:not(:first-of-type)").css("display", "none");
  //////////// タブの制御
  $('.tab').hover(function () { // タブメニューをhoverしたら
    var index = $('.tab').index(this); // hoverしたタブ番号を取得
    $('.tab').removeClass('current'); // タブ現在地クラスを削除し、
    $(this).addClass('current'); // hoverしたタブにタブ現在地クラスを付与
    //////////// コンテンツの制御
    $('.menu-box').hide().eq(index).show(); // hoverしてないコンテンツは非表示、hoverした番号は表示
  });
});
