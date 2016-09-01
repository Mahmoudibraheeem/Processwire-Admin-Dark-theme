
$(window).scroll(function() {
	if ($(this).scrollTop() > 1) {  
		if ($('#sidebar').hasClass('closed')) {
			$('body').addClass('ad-stickyFull');
		} else {
			$('body').removeClass('ad-stickyFull')
		}
    	$('#headline').addClass("sticky");
  	} else {
    	$('#headline').removeClass("sticky");
  	}
});


$(document).ready(function() {
	var AdminDark = (ProcessWire && ProcessWire.config && ProcessWire.config.adminDark) ? JSON.parse(ProcessWire.config.adminDark) : null;

	if (AdminDark == null || AdminDark.options == null) {
		return;
	}

	if (AdminDark.options.indexOf('StickyHeader') !== -1) {
		$('body').addClass('ad-sticky');
					var breadcrumbs = $('#breadcrumbs').html();
		$('#masthead').append(breadcrumbs);
		$('body').addClass('ad-breadcrumbs');
		$('#topnav').prepend($('#NotificationBug').addClass('in-nav'));
	} else {
		$('#breadcrumbs').show();
	}

	//add host name, move home link and add target=blank
	if (AdminDark.options.indexOf('HostName') !== -1) {
		var siteName = "<p id='site-name'>" + $('#topnav i.fa-home').parents('#topnav li').html() +window.location.host + "</p>";
		$('#topnav i.fa-home').parent().remove();
		$('#masthead').prepend(siteName);
		$('#site-name a').attr('target', '_blank');
		$('#topnav').prepend($('#NotificationBug').addClass('in-nav'));
	}

	if (AdminDark.options.indexOf('ExpandPages') !== -1) {
		$('body').addClass('ad-page');
			//open sections with single click
		$('#main-nav a.parent.page').on('click', function(e){
    		$(this).trigger('click');
		});
	}

	if (AdminDark.options.indexOf('ExpandSetup') !== -1) {
		$('body').addClass('ad-setup');
			//open sections with single click
		$('#main-nav a.parent.setup').on('click', function(e){
    		$(this).trigger('click');
		});
	}

	if (AdminDark.options.indexOf('ExpandModules') !== -1) {
		$('body').addClass('ad-module');
			//open sections with single click
		$('#main-nav a.parent.module').on('click', function(e){
    		$(this).trigger('click');
		});
	}

	if (AdminDark.options.indexOf('ExpandAccess') !== -1) {
		$('body').addClass('ad-access');
			//open sections with single click
		$('#main-nav a.parent.access').on('click', function(e){
    		$(this).trigger('click');
		});
	}

	if (AdminDark.options.indexOf('CollapsedModules') !== -1) {
		$('body').addClass('ad-moduleHide');
		//open sections with single click
		$('#main-nav a.parent.module').on('click', function(e){
    		$(this).trigger('click');
		});
	}

	if (AdminDark.options.indexOf('CollapsedPages') !== -1) {
		$('body').addClass('ad-pageHide');
		//open sections with single click
		$('#main-nav a.parent.page').on('click', function(e){
    		$(this).trigger('click');
		});
	}

	if (AdminDark.options.indexOf('CollapsedSetup') !== -1) {
		$('body').addClass('ad-setupHide');
		//open sections with single click
		$('#main-nav a.parent.setup').on('click', function(e){
    		$(this).trigger('click');
		});
	}

		if (AdminDark.options.indexOf('CollapsedAccess') !== -1) {
		$('body').addClass('ad-accessHide');
		//open sections with single click
		$('#main-nav a.parent.access').on('click', function(e){
    		$(this).trigger('click');
		});
	}
	
	//select only current link without selecting parent too
	$( "#main-nav .current:last" ).addClass('single');
    
    //on closing notices do not jump to top of a page
    $('.notice-remove').on('click', function(event) {
        $("#notices").remove();
        return false;
    });

	$('#footer').appendTo($('#main-nav'));
	
});
