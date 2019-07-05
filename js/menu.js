$(function() {
	var menuwidth = 240; // 边栏宽度
	var menuspeed = 400; // 边栏滑出耗费时间

	var $bdy = $('body');
	var $container = $('#pgcontainer');
	var $burger = $('#hamburgermenu');
	var negwidth = "-" + menuwidth + "px";
	var poswidth = menuwidth + "px";

	$('.menubtn').on('click', function(e) {
		if ($bdy.hasClass('openmenu')) {
			jsAnimateMenu('close');
		} else {
			jsAnimateMenu('open');
		}
	});

	$('.overlay').on('click', function(e) {
		if ($bdy.hasClass('openmenu')) {
			jsAnimateMenu('close');
		}
	});

	function jsAnimateMenu(tog) {
		if (tog == 'open') {
			$bdy.addClass('openmenu');

			$container.animate({
				marginRight: negwidth,
				marginLeft: poswidth
			}, menuspeed);
			$burger.animate({
				width: poswidth
			}, menuspeed);
			$('.overlay').animate({
				left: poswidth
			}, menuspeed);
		}

		if (tog == 'close') {
			$bdy.removeClass('openmenu');

			$container.animate({
				marginRight: "0",
				marginLeft: "0"
			}, menuspeed);
			$burger.animate({
				width: "0"
			}, menuspeed);
			$('.overlay').animate({
				left: "0"
			}, menuspeed);
		}
	}

	$(window).scroll(function() {
		if ($(window).scrollTop() > 150) {
			$(".goback").fadeIn();
		} else {
			$(".goback").fadeOut();
		}
	});

	//当点击跳转链接后，回到页面顶部位置
	$(".goback").click(function() {
		//$('body,html').animate({scrollTop:0},1000);
		if ($('html').scrollTop()) {
			$('html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		}
		$('body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});
