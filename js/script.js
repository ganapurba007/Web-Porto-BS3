$('.page-scroll').on('click', function(e){


	var tujuan = $(this).attr('href');

	var elementTujuan = $(tujuan);

	$('html').animate({
		scrollTop: elementTujuan.offset().top - 50

	}, 1500);

	e.preventDefault();

});