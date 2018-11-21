$(document).ready(function(){

	var audio = $('#audioTrack')[0];
	audio.volume = 0.04;
	console.log(audio);

	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');
	$audioControl = $('[data-type="audio-control"]');

	setTimeout(initAudioPlayer, 2000);

	function initAudioPlayer(){
		$pauseBtn.parent().show();
		audio.loop = true;
		audio.play();

		$audioControl.click(function(){
			console.log('audio control click');

			if ( audio.paused ) {
				audio.play();
				$playBtn.parent().hide();
				$pauseBtn.parent().show();
				console.log("playing now");
			} else {
				audio.pause();
				$playBtn.parent().show();
				$pauseBtn.parent().hide();
				console.log("paused now");
			}
		});
	}

});
