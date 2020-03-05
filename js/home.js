(function($){
    $(function(){
        //$("#index-page").css("padding-top", $(".slider").height()+50);
	$("#index-page").css("padding-top", $(".slider").height()*1.0);
        $("#chevron-banner").click(function(){
            $('html, body').animate({
                scrollTop: ($(".slider").height())
            },500);
        });
	$( window ).resize(function() {
            $("#index-page").css("padding-top", $(".slider").height()*1.0);
	});
    }); // end of document ready
})(jQuery); // end of jQuery name space

