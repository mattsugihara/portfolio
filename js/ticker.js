var hour;
var minute;
var second;
var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');

function getCurrentTime () {
	var date = new Date ();
	
	hour = date.getHours();
	minute = date.getMinutes();
	second = date.getSeconds();
}

function spinHands () {

	hourHandPosition = (hour%12)*30;
	minuteHandPosition = minute*6;
	secondHandPosition = second*6;

	hourHand.style.webkitTransform = 'rotate('+hourHandPosition+'deg)';
  hourHand.style.mozTransform    = 'rotate('+hourHandPosition+'deg)';
  hourHand.style.msTransform     = 'rotate('+hourHandPosition+'deg)';
  hourHand.style.oTransform      = 'rotate('+hourHandPosition+'deg)';
  hourHand.style.transform       = 'rotate('+hourHandPosition+'deg)';

  minuteHand.style.webkitTransform = 'rotate('+minuteHandPosition+'deg)';
  minuteHand.style.mozTransform    = 'rotate('+minuteHandPosition+'deg)';
  minuteHand.style.msTransform     = 'rotate('+minuteHandPosition+'deg)';
  minuteHand.style.oTransform      = 'rotate('+minuteHandPosition+'deg)';
  minuteHand.style.transform       = 'rotate('+minuteHandPosition+'deg)';

  secondHand.style.webkitTransform = 'rotate('+secondHandPosition+'deg)';
  secondHand.style.mozTransform    = 'rotate('+secondHandPosition+'deg)';
  secondHand.style.msTransform     = 'rotate('+secondHandPosition+'deg)';
  secondHand.style.oTransform      = 'rotate('+secondHandPosition+'deg)';
  secondHand.style.transform       = 'rotate('+secondHandPosition+'deg)';
}

function updateClock () {
	getCurrentTime();
	spinHands();

}

hourHand.style.display = 'block';
minuteHand.style.display = 'block';
secondHand.style.display = 'block';

updateClock();
setInterval('updateClock()', 500);