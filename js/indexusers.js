$(document).ready(function() {
  var classes = {
    coffee: 0,
    sweet: 0,
    food: 0,
    drink: 0
  };
  window.animater = function(classname) {
    if (classes[classname] == 0) {
      $(".coffee, .sweet, .food, .drink").removeClass("diminish enlarge").addClass("diminish");
      $("." + classname).removeClass("diminish enlarge").addClass("enlarge");
      for (var a in classes) {
        classes[a] = 0;
      }
      classes[classname] = 1;
    } else {
      $(".food, .sweet, .coffee, .drink").removeClass("diminish enlarge");
      for (var b in classes) {
        classes[b] = 0;
      }
    }
  };
});