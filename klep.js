// $(document).ready(function(){
// 	$('#vin').css('display','block');
// 	}
// );

var number = 0;
var count = 2;

// $(document).ready(function){
// 	$('#vin').css('display', 'block');
// }

               

document.getElementById('check').onclick = function (){
	if (count > 0) {
		var usernum = document.getElementById('mynum').value;
		usernum = parseInt(usernum);
		var out = document.getElementById('out');
		var song = document.getElementById('song');
		// var df = document.getElementById('df');
		// var stop = document.getElementById('stop_song');
		// var main = document.getElementById('main');
		
		if (usernum == number) {

			out.innerHTML = 'Ура вы угадали!!!';
			song.innerHTML = '<audio id="df" src="win.mp3"  autoplay>';
			// var df = document.getElementById('df');
			// df.removeAttribute('id');
			// document.getElementById('stop_song').onclick = function() {
			// 	document.getElementById('df').removeAttribute('autoplay');
			// }
		}
		else if (usernum != number) {
			out.innerHTML = 'Вы не угадали!!!';
			song.innerHTML = '<audio id="df" src="false.mp3"  autoplay>';
		}
		
		document.getElementById('count').innerHTML = 'Осталось попыток '+ count;
		count = count - 1;
	}
	else {
		alert ('Попытки закончены, вы проиграли. Страница будет перезагружена');
		location.reload();
	}
}
document.getElementById('stop_song').onclick = function() {
				document.getElementById('df').remove();
				
				
			}
			