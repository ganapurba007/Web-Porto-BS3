//  event pada saat link diklik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang diklik
	var elementTujuan = $(tujuan);

	// pindahkan scroll
	$('html').animate({
		scrollTop: elementTujuan.offset().top - 50

	}, 1500);

	e.preventDefault();

});