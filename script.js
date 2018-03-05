$(document).ready(function() {

  var count1 = parseInt($('#num1').html());
  var count2 = parseInt($('#num2').html());

  $("#add").click(function() {

    if (count1 < 100) {

      count1 += 1;

    }
    $("#num1").html(count1);
  });
  // grab add.
  $("#takeaway").click(function() {

    if (count1 > 0) {

      count1 -= 1;
    }
    $("#num1").html(count1);
  });
  // grab takeaway.

  $("#add2").click(function() {

    if (count2 < 100) {

      count2 += 1;
    }
    $("#num2").html(count2);
  });
  // grab next add.
  $("#takeaway2").click(function() {

    if (count2 > 0) {

      count2 -= 1;
    }
    $("#num2").html(count2);
  });
  // grab next takeaway.


  $('#start').click(function() {
cnt = 0;
    runner = setInterval(function() {
      if (count1 > 0) {
        $("#add, #takeaway, #start, #add2, #takeaway2").hide();
        count1 -= 1;
        $("#num1").html(count1);
        cnt ++;
if (cnt === count2 && count1 !== 0) {
  $('#thunder').trigger('play');
  cnt = 0;
}
      } else {
        $('#end').trigger('play');
        clearInterval(runner);
      }


    }, 1000);


  });
// grag the start button.


$("#reset").click(function () {
  location.reload();
})



  //end.
});
