var $hands = $('#liveclock div.hand');
var moondisc = $('#liveclock div.moondisc');
var d = new Date();
var curr_date = d.getDate();
var month = d.getMonth()+1;
var day = d.getDay();
var date = d.getDate();
var year = d.getFullYear();

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) {
  return setTimeout(f, 1000 / 60);
};

document.getElementById("date-text").innerHTML = date;

function updateclock() {
  var curdate = new Date();
  var hour_as_degree = (curdate.getHours() + curdate.getMinutes() / 60) / 12 * 360;
  var minute_as_degree = (curdate.getMinutes() + curdate.getSeconds() / 60) / 60 * 360;
  var second_as_degree = (curdate.getSeconds() + curdate.getMilliseconds() / 1000)*6;
  
  var month_as_degree = month*30;
  var day_as_degree = day*51.42;
  
  $hands.filter('.hour').css({
    transform: 'rotate(' + hour_as_degree + 'deg)'
  });
  $hands.filter('.minute').css({
    transform: 'rotate(' + minute_as_degree + 'deg)'
  });
  $hands.filter('.second').css({
    transform: 'rotate(' + second_as_degree + 'deg)'
  });
  $hands.filter('.month').css({
    transform: 'rotate(' + month_as_degree + 'deg)'
  });
  $hands.filter('.day').css({
    transform: 'rotate(' + day_as_degree + 'deg)'
  });
  requestAnimationFrame(updateclock); // 
  
  /*if (hour_as_degree < 530) {
    $hands.filter('.hour').css({
    'background-image': 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/25305/Hour_Hand_1.png)'});
  }
  
  if (minute_as_degree > 165) {
    $hands.filter('.minute').css({
    'background-image': 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/25305/Minute_Hand_2.png)'});
  }*/
  
}


function Simple(year,month,day) {
    var lp = 2551443; 
    var now = new Date(year,month-1,day,20,35,0);           
    var new_moon = new Date(1970, 0, 7, 20, 35, 0);
    var phase = ((now.getTime() - new_moon.getTime())/1000) % lp;
    return Math.floor(phase /(24*3600)) + 1;
}

var phase = Simple(year,month,date);
var phase_as_degree;

switch(phase) {
    case 1: phase_as_degree = 0; break;
    case 2: phase_as_degree = 18; break;
    case 3: phase_as_degree = 23; break;
    case 4: phase_as_degree = 26; break;
    case 5: phase_as_degree = 28; break;
    case 6: phase_as_degree = 31; break;
    case 7: phase_as_degree = 34; break;
    case 8: phase_as_degree = 38; break;
    case 9: phase_as_degree = 42; break;
    case 10: phase_as_degree = 45; break;
    case 11: phase_as_degree = 48; break;
    case 12: phase_as_degree = 51; break;
    case 13: phase_as_degree = 60; break;
    case 14: phase_as_degree = 70; break;
    case 15: phase_as_degree = 92; break;
    case 16: phase_as_degree = 105; break;
    case 17: phase_as_degree = 109; break;
    case 18: phase_as_degree = 120; break;
    case 19: phase_as_degree = 130; break;
    case 20: phase_as_degree = 138; break;
    case 21: phase_as_degree = 142; break;
    case 22: phase_as_degree = 145; break;
    case 23: phase_as_degree = 148; break;
    case 24: phase_as_degree = 150; break;
    case 25: phase_as_degree = 152; break;
    case 26: phase_as_degree = 155; break;
    case 27: phase_as_degree = 158; break;
    case 28: phase_as_degree = 166; break;
  default: phase_as_degree = 0;
}

$(moondisc).css("transform",'rotate(' + phase_as_degree + 'deg)') ;

requestAnimationFrame(updateclock);