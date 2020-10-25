$('.menu').on('click', function (event) {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
});

// ハンバーガーメニュー・ページ内リンクをクリックで閉じる
$('.gnav__menu a[href]').on('click', function (event) {
  $('.menu').trigger('click');
});

// topロゴ
$(function() {
	setTimeout(function(){
		$('.start h1').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
// topロゴ

// about
$(function () {
  $(window).scroll(function () {
    $('.about').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// about

// skill
$(function () {
  $(window).scroll(function () {
    $('.skill').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// skill

// m-service
$(function () {
  $(window).scroll(function () {
    $('.m-service').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// service

// l-service
$(function () {
  $(window).scroll(function () {
    $('.l-service').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});
// l-service

// r-service
$(function () {
  $(window).scroll(function () {
    $('.r-service').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});
// r-service


// portfolio
$(function () {
  $(window).scroll(function () {
    $('.portfolio').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// portfolio

// contact
$(function () {
  $(window).scroll(function () {
    $('.contact').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// contact

//page topボタン
$(function () {
  var topBtn = $('#pageTop');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      //---- 画面を120pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    } else {
      //---- 画面が120pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
//page topボタン