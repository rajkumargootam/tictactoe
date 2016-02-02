$(document).ready(function (){
  var isCrossSelected = 0;
  $(".cells").click(function () {
      var cells = $(this);
      if (isCrossSelected == 0 ){
        isCrossSelected = 1;
        cells.addClass('cross');
      }else{
        isCrossSelected = 0;
        cells.addClass('zero');
      }
      // isCrossSelected=!isCrossSelected;

      // cells.addClass('cross').addClass('zero');
  })
});
