$(document).ready(function(){
 
	// № активной фотографии
	var slideIndex = 0;

	showPhotos();

	function showPhotos(){

		var i;
		// var slides = $('.photo img');
		var slides = $('#instafeed a');
	
		// Запускаем цикл для скрытия фотографий
		for (i=0; i < slides.length; i++){
			$(slides[i]).hide();
		}

		// Считаем индекс фотографии, которую будем показывать.
		slideIndex++;
		if ( slideIndex > slides.length ){
			slideIndex = 1;
		}

		// Показываем активную фотографию
		$(slides[slideIndex-1]).show();
		setTimeout(showPhotos, 3000);

	}

});