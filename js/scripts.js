$(document).ready(function() {
  $("formOne").submit(function(event) {
    const quest1 = $("input:radio[name=question1]:checked").val();
    const quest2 = $("input:radio[name=question2]:checked").val();
    const quest3 = $("input:radio[name=question3]:checked").val();
    const quest4 = $("input:radio[name=question4]:checked").val();
    const quest5 = $("input:radio[name=question5]:checked").val();
    const results =$(".results");

    if (ques1 === "yes"){
     results.text("You should learn Javascript!");
    }

  event.preventDefault();
  });
});