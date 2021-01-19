$(document).ready(function() {
  $("button#cat").click(function(){
    $("ul#talkinganimal").children("li").remove();
    $("ul#replyinganimal").children("li").remove();
    $("ul#talkinganimal").prepend("<li>Cat: Meow!</li>");
    $("ul#replyinganimal").prepend("<li>Dog: Woof!</li>");
  });

  $("button#dog").click(function(){  
    $("ul#talkinganimal").children("li").remove();
    $("ul#replyinganimal").children("li").remove();  
    $("ul#talkinganimal").prepend("<li>Dog: Woof!</li>");
    $("ul#replyinganimal").prepend("<li>Cat: Meow!</li>");
  });

  $("button#war").click(function() {
    
    $("ul#talkinganimal").prepend("<img src=img/catwar.gif>");
    $("ul#replyinganimal").prepend("<img src=img/catwar.gif>");
    $("ul#talkinganimal").children("img").first().click(function() {
      $(this).remove();
    });
    $("ul#replyinganimal").children("img").first().click(function() {
      $(this).remove();
    });
  });
});

