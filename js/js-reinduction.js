jQuery(function(){
    jQuery('.button--item').click(function(){
       var target = $(this).attr('target');
		$('#content--'+target).toggle('.hide');
		$('.content--default-section').toggle('.hide');
    });
});