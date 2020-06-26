$(document).ready(function() {
     var resize = new Array('p', '.resizable');
     resize = resize.join(',');
   
     
     var resetFont = $(resize).css('font-size');
     $(".reset").click(function() {
       $(resize).css('font-size', resetFont);
     });
   
     

     $(".increase").click(function() {
       var originalFontSize = $(resize).css('font-size');
       var originalFontNumber = parseFloat(originalFontSize, 10);
       var newFontSize = originalFontNumber * 1.2;
       $(resize).css('font-size', newFontSize);
       return false;
     });
   
     
   
     $(".decrease").click(function() {
       var originalFontSize = $(resize).css('font-size');
       var originalFontNumber = parseFloat(originalFontSize, 10);
       var newFontSize = originalFontNumber * 0.8;
       $(resize).css('font-size', newFontSize);
       return false;
     });
   });