$(document).ready(function() {
  $("formOne").submit(function(event) {
    const questOne =parseInt($("#morning").val());
    const questTwo =parseInt($("apples").val());
    const questThree =parseInt($("#potter").val());
    const questFour =parseInt($("#animal").val());
    const questFive =parseInt($("#coffee").val());
    const results =$(".results");

  event.preventDefault();
  });
});