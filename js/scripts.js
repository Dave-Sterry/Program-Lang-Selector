$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const questOne = parseInt($("#morning").val());
    const questTwo = parseInt($("#apples").val());
    const questFive = parseInt($("#coffee").val());
    const results = $(".results");

    if (questOne == "1" && questTwo == "2" && questFive == "2"){
      $(".results").children().hide();
      $("#Java").slideDown();
    } else if (questTwo == "1" && questOne == "2" && questFive == "2"){
      $(".results").children().hide();
      $("#Swift").slideDown();
    } else if (questFive == "1" && questOne == "2" && questTwo == "2"){
      $(".results").children().hide();
      $("#Ruby").slideDown();
    } else {
      $(".results").children().hide();
      $("#other").slideDown();
    }
  })
})