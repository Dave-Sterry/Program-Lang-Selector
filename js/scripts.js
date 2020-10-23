$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const questOne = parseInt($("#morning").val());
    const questTwo = parseInt($("#apples").val());
    const questThree = parseInt($("#potter").val());
    const questFour = parseInt($("#animal").val());
    const questFive = parseInt($("#coffee").val());
    const results = $(".results");

    if (questOne === "1" && questTwo === "1" || "2" && questThree === "1" || "2" && questFour === "1" || "2" && questFive === "1" || "2"){
      $(".results").children().hide();
      $("#Java").show();
    } else if (questTwo === "1" && questThree === "1" || "2" && questFour === "1" || "2" && questFive === "1" || "2"){
      $(".results").children().hide();
      $("Swift").show();
    } else if (questFive === "1"){
      $(".results").children().hide();
      $("#ruby").show();
    }

  })
})