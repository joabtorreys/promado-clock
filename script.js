$(document).ready(function () {

var count1 = parseInt($('#num1').html());
var count2= parseInt($('#num2').html());

$("#add").click(function () {

  if (count1 < 100) {

    count1 += 5;

  }
  $("#num1").html(count1);
});
// grab add.
$("#takeaway").click(function () {

  if (count1 > 5) {

    count1 -= 5;
  }
  $("#num1").html(count1);
});
// grab takeaway.

$("#add2").click(function () {

  if (count2 < 100) {

    count2 += 5;
  }
  $("#num2").html(count2);
});
// grab next add.
$("#takeaway2").click(function () {

  if (count2 > 5) {

    count2 -= 5;
  }
  $("#num2").html(count2);
});
// grab next takeaway.


$('#start').click(function () {

runner = setInterval(function () {
if (count1 > 5) {
  $("#add, #takeaway, #start").hide();
  count1 -= 1;
  $("#num1").html(count1);

}else{
  $('#thunder').trigger('play');
  clearInterval(runner);
}


}, 1000);});







//end.
});
