$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const questOne = parseInt($("#morning").val());
    const questTwo = parseInt($("#apples").val());
    const questFive = parseInt($("#coffee").val());
    const results = $(".results");

    if (questOne == "1" && questTwo == "2" && questFive == "2"){
      $(".results").children().hide();
      $("#Java").show();
    } else if (questTwo == "1" && questOne == "2" && questFive == "2"){
      $(".results").children().hide();
      $("#Swift").show();
    } else if (questFive == "1" && questOne == "2" && questTwo == "2"){
      $(".results").children().hide();
      $("#Ruby").show();
    } else {
      results.text("Hmmm you're a tricky one, maybe you'd be happier doing something else?")
    }
 
  })
})