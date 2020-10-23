$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const questOne = parseInt($("#morning").val());
    const questTwo = parseInt($("#apples").val());
    const questThree = parseInt($("#potter").val());
    const questFour = parseInt($("#animal").val());
    const questFive = parseInt($("#coffee").val());
    const results = $(".results");

    if (questOne === "1"){
      $(".results").children().hide();
      $("#Java").show();
    } else if (questTwo === "1"){
      $(".reults").children().hide();
      $("Swift").show();
    } else if (questFive === "1"){
      $(".results").children().hide();
      $("#ruby").show();
    }

  })
})