/*
 * jQuery Mobile Slide Menu 1.0.0, jQuery Mobile plugin
 * https://github.com/donwalter/jquery-mobile-slide-menu
 *
 * Copyright(c) 2013, Don Walter
 * http://www.don-walter.com/
 *
 * A side aligned sliding menu for jQuery Mobile
 * Licensed under the MIT License
 */

(function($){
	$.fn.slideLogoutMenu = function(options) {
		// If options exist, merge them with the default settings
		options = $.extend({
			duration:	500,
			easing:		'swing'
		}, options);
		
		return this.each(function() {
			var obj = $(this);
			
			var menuStatus = false;
		
			$(document).on('click', 'a.logoutMenu', function(e) {
				if(!menuStatus){
					$('#logout-menu').css('visibility','visible');
					$('.ui-page-active').animate({
						marginLeft: '100px',
					}, options.duration, options.easing, function(){menuStatus = true});
					return false;
				} else {
					$('.ui-page-active').animate({
						marginLeft: '0px',
					}, options.duration, options.easing, function(){menuStatus = false});
					return false;
				}
			});
		
			$('#logout-menu li a').click(function(){
				var p = $(this).parent();
				if($(p).hasClass('active')){
					$('#logout-menu li').removeClass('active');
				} else {
					$('#logout-menu li').removeClass('active');
					$(p).addClass('active');
				}
				menuStatus = false;
			});
		});
	};
})(jQuery);