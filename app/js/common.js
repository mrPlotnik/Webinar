$(function() {

	//////////////////////////////////////////////////////
	// Обратный отсчет
	//////////////////////////////////////////////////////
	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 24);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
 
	function initializeClock(id, endtime) {
		var clock = document.getElementById(id);

		var daysSpan1 = clock.querySelector('.days1');
		var daysSpan2 = clock.querySelector('.days2');

		var hoursSpan1 = clock.querySelector('.hours1');
		var hoursSpan2 = clock.querySelector('.hours2');

		var minutesSpan1 = clock.querySelector('.minutes1');				
		var minutesSpan2 = clock.querySelector('.minutes2');				

		var secondsSpan1 = clock.querySelector('.seconds1');		
		var secondsSpan2 = clock.querySelector('.seconds2');		
	 
		function updateClock() {
			var t = getTimeRemaining(endtime);
	 
			daysSpan1.innerHTML = '0';
			daysSpan2.innerHTML = t.days;

			hoursSpan1.innerHTML = ('0' + t.hours).slice(-2,-1);
			hoursSpan2.innerHTML = ('0' + t.hours).slice(-1);

			minutesSpan1.innerHTML = ('0' + t.minutes).slice(-2, -1);
			minutesSpan2.innerHTML = ('0' + t.minutes).slice(-1);			

			secondsSpan1.innerHTML = ('0' + t.seconds).slice(-2, -1);
			secondsSpan2.innerHTML = ('0' + t.seconds).slice(-1);
	 
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
	 
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}
	 
	var deadline = new Date(Date.parse(new Date()) + 5 * 18 * 60 * 60 * 1000); // for endless timer
	initializeClock('clock', deadline);

});
