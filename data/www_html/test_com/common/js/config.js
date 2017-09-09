
/*	メニューボタン（SP）
-------------------------------------------------------- */
$(function(){
	$("#menu").dlmenu();
});


/*	ウィンドウサイズ画像切替え
-------------------------------------------------------- */
$(function(){
	var $setElem = $(".switch");
	var pc = "_pc";
	var sp = "_sp";
	var replaceWidth = 768;
	
	$setElem.each(function(){
		var $this = $(this);
		function imgSize(){
			if(window.innerWidth > replaceWidth) {
				$this.attr("src",$this.attr("src").replace(sp,pc)).css({visibility:"visible"});
			} else {
				$this.attr("src",$this.attr("src").replace(pc,sp)).css({visibility:"visible"});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});
});


/*	サイドスライダー（テレビでおなじみの鍵屋です！）
-------------------------------------------------------- */
$(function(){
	$("#slider").bxSlider({
		mode: "fade",
		auto: true,
		pause: 6000, //静止時間
		speed: 1000, //スライド速度
		pager: false, //ページャーの有無
		controls: false //prev/nextの有無
	});
});


/*	ロールオーバー
-------------------------------------------------------- */
$(function(){
	var suffix = "_on";
	$(".over, #type_detail .navi img").each(function() {
		var img  = $(this);
		var src  = img.attr("src");
		var name = src.substr(0, src.lastIndexOf("."));
		var ext  = src.substring(src.lastIndexOf("."));
		if (name.match(suffix + "$")) return;
		var src_on = name + suffix + ext;
		$("<img>").attr("src", src_on);
		img.hover(
			function() { img.attr("src", src_on); },
			function() { img.attr("src", src); }
			);
	});
});


/*	ロールオーバー半透明
-------------------------------------------------------- */
$(function(){
	$("a img, .fade, .fades a, input[type='image'], button, #menu a, #blog .navi a").hover(function(){
		$(this).stop(true).fadeTo(200,0.8);
	},function() {
		$(this).fadeTo(200,1); 
	});
	$(".over, .fades img").hover(function(){ 
		$(this).stop(true);
	});
});


/*	スムーズスクロール
-------------------------------------------------------- */
$(function(){
	$('a[href^=#]' + 'a:not(.inline)').click(function(){
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top;
		$("body,html").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


/*	リサイズ終了時に処理を実行
-------------------------------------------------------- */
$(function(){
	var timer = false;
	$(window).on("load resize",function(){
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			// ドロップダウンメニュー
			if (window.matchMedia("(min-width:768px)").matches) {
				$("header nav ul li ul").hide();
				var dropDown = $("header nav ul li").hover(function(){
					$(this).children("ul").stop(true).slideDown(200);
				}, function() {
					$(this).children("ul").slideUp(200);
				});
			} else {
				$("header nav ul li ul").show();
				$("header nav ul li").off(dropDown);
			}
			
			// ブロック要素の高さを揃える
			$.onFontResize(function(){
				if (window.matchMedia( "(min-width:768px)" ).matches) {
					$(".widget_flow ol li").tile(3); // 鍵開けサービスの流れ［共通］
					$(".widget_blog ul li").tile(3); // 最新ブログ［共通］
					$("#point .technology ul li").removeAttr("style"); // 技術力の秘密
					$("#ranking_item ul li:nth-child(n+8)").tile(); // 鍵の製品 人気ランキング
					$("#point_works ul").each(function(i){ $(this).find("li").tile(2); }); // 工事実績
					$("#blog .new ul li a > span").removeAttr("style"); // オフィシャルブログ最近の記事
					$("#blog .month ul li a").tile(3); // オフィシャルブログ画像一覧
				} else {
					$(".widget_flow ol li").tile(2);
					$(".widget_blog ul li").removeAttr("style");
					$("#point .technology ul li").tile(2);
					$("#ranking_item ul li:nth-child(n+8)").removeAttr("style");
					$("#point_works ul li").removeAttr("style");
					$("#blog .new ul li a > span").tile(2);
					$("#blog .month ul li a").tile(3);
				}
			});
			
			// サムネイルリサイズ
			if (window.matchMedia("(min-width:768px)").matches) {
				$("#blog .new img, #blog .month img").each(function(){
					if ($(this).is(".new img")) {
						var maxWidth = 146;
						var maxHight = 146;
					} else if ($(this).is(".month img")) {
						var maxWidth = 210;
						var maxHight = 210;
					}
					var img = new Image();
					img.src = $(this).attr('src');
					var Ratio = 1;
					var w = img.width;
					var h = img.height;
					var wRatio = maxWidth / w;
					var hRatio = maxHight / h;
					if (maxWidth==0 && maxHight==0) {
						Ratio = 1;
					} else if (maxWidth==0) {
						if (hRatio<1) Ratio = hRatio;
					} else if (maxHight==0) {
						if (wRatio<1) Ratio = wRatio;
					} else if (wRatio<1 || hRatio<1) {
						Ratio = (wRatio<=hRatio?wRatio:hRatio);
					}
					if (Ratio<1) {
						w = w * Ratio;
						h = h * Ratio;
					}
					$(this).css({"width":w, "height":h});
				});
			} else {
				$("#blog .new img, #blog .month img").css({"width":"auto", "height":"auto"});
			}
			
		}, 200);
	});
});

