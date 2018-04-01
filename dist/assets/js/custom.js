$( document ).ready(function() {
	// initialize paroller.js
	$(window).paroller();
	var Menu = $("#Menu");
	var menuPosition = Menu.offset().top;
	var currentScroll = $(window).scrollTop();
	var FullContainer = $(".FullContainer");
	var Jumbotron = $(".Jumbotron");
	var Content = $(".Content");
	var DropMenu = $(".DropMenu");
	var MenuBtn = $(".TopMenu-item--iconDots");
	var FilterMenuBtn = $(".ContentMenu-item--iconDots");
	var NotificationMenu = $(".NotificationMenu");

	Jumbotron.paroller({ factor: '-0.2', type: 'foreground', direction: 'vertical' });

	MenuBtn.click(function(event) {
		// DropMenu.toggleClass('DropMenu--isShown');
	});
	FilterMenuBtn.click(function(event) {
		// DropMenu.toggleClass('DropMenu--isShown');
	});
	$(".TopMenu-item--iconBell").click(function(event) {
		// NotificationMenu.toggleClass('NotificationMenu--isShown');
	});
	$(".ContentMenu-item--iconBell").click(function(event) {
		// NotificationMenu.toggleClass('NotificationMenu--isShown');
	});
	$(".FiltersPanel-header-collapse").click(function(event) {
		$('.FiltersPanel-body , .FiltersPanel-footer').toggle();
	});
	$(".FiltersPanel-header-close").click(function(event) {
		$('.FiltersPanelContianer').hide();
		$('.ItemsContainer').removeClass('ItemsContainer--filtespanelexpanded');
	});

	$(window).resize(function() {
		menuPosition = Menu.offset().top;
		currentScroll = $(window).scrollTop();
	});

	$(window).scroll(function() {

	    currentScroll = $(window).scrollTop();
	    //Temporary workaround
	    if (currentScroll >= ( menuPosition + Menu.height()/3) && (Content.height()>1350) ) {
	        // FullContainer.addClass('u-trans');
	        // FullContainer.css('margin-top', (Menu.height()*4/3 + 25 )+'px');
	        // Menu.addClass("MenuContainer--isFixed");
	    } else {
	    	// FullContainer.removeClass('u-trans');
	        // FullContainer.css('margin-top', '0px');
	        // Menu.removeClass("MenuContainer--isFixed");
	    }
	});
});
