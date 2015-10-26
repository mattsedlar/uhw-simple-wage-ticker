// amount lost as of September 30, 2015

  var sept = new Date(2015,8,30),
    septloss = 116476827,
    diff,
    totalloss;

// adding commas function

  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

setInterval(function(){

  // comparing today with september and storing the seconds

  diff = Math.abs(new Date() - sept)/1000;

  // multiply seconds by $1.71 and adding to the loss since September

  var totalloss = "$" + commaSeparateNumber(((diff * 1.71) + septloss).toFixed(2));

  $('#loss').text(totalloss);


}, 1000);