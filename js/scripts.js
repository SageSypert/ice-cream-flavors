$(document).ready(function() {
  const iceCreamFlavors = ["vanilla", "chocolate", "meatloaf"];
  iceCreamFlavors.forEach(function(flavor) {
    $("#flavors").append("<li>" + flavor + "</li>");
  });
});