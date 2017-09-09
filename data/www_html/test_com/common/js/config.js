
/*	���j���[�{�^���iSP�j
-------------------------------------------------------- */
$(function(){
	$("#menu").dlmenu();
});


/*	�E�B���h�E�T�C�Y�摜�ؑւ�
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


/*	�T�C�h�X���C�_�[�i�e���r�ł��Ȃ��݂̌����ł��I�j
-------------------------------------------------------- */
$(function(){
	$("#slider").bxSlider({
		mode: "fade",
		auto: true,
		pause: 6000, //�Î~����
		speed: 1000, //�X���C�h���x
		pager: false, //�y�[�W���[�̗L��
		controls: false //prev/next�̗L��
	});
});


/*	���[���I�[�o�[
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


/*	���[���I�[�o�[������
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


/*	�X���[�Y�X�N���[��
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


/*	���T�C�Y�I�����ɏ��������s
-------------------------------------------------------- */
$(function(){
	var timer = false;
	$(window).on("load resize",function(){
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			// �h���b�v�_�E�����j���[
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
			
			// �u���b�N�v�f�̍����𑵂���
			$.onFontResize(function(){
				if (window.matchMedia( "(min-width:768px)" ).matches) {
					$(".widget_flow ol li").tile(3); // ���J���T�[�r�X�̗���m���ʁn
					$(".widget_blog ul li").tile(3); // �ŐV�u���O�m���ʁn
					$("#point .technology ul li").removeAttr("style"); // �Z�p�͂̔閧
					$("#ranking_item ul li:nth-child(n+8)").tile(); // ���̐��i �l�C�����L���O
					$("#point_works ul").each(function(i){ $(this).find("li").tile(2); }); // �H������
					$("#blog .new ul li a > span").removeAttr("style"); // �I�t�B�V�����u���O�ŋ߂̋L��
					$("#blog .month ul li a").tile(3); // �I�t�B�V�����u���O�摜�ꗗ
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
			
			// �T���l�C�����T�C�Y
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

