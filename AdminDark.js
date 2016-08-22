$(window).scroll(function() {
	if ($(this).scrollTop() > 1) {  
    	$('#headline').addClass("sticky");
  	} else {
    	$('#headline').removeClass("sticky");
  	}
});

$(document).ready(function() {
	//add host name, move home link and add target=blank
	var siteName = "<p id='site-name'>" + $('#topnav i.fa-home').parents('#topnav li').html() +window.location.host + "</p>";
	$('#topnav i.fa-home').parent().remove();

	var breadcrumbs = $('#breadcrumbs').html();
	$('#masthead').prepend(siteName + breadcrumbs);
	$('#site-name a').attr('target', '_blank');

	//open sections with single click
	$('#main-nav a.parent').on('click', function(e){
	    $(this).trigger('click');
	});
	
	//select only current link without selecting parent too
	$( "#main-nav .current:last" ).addClass('single');
    
    //on closing notices do not jump to top of a page
    $('.notice-remove').on('click', function(event) {
        $("#notices").remove();
        return false;
    });

	$('#footer').appendTo($('#sidebar'));
});
