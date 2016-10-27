$('.btn-simple').each(function(i, obj) {
    var money = 1000000;
    var price = $(this).attr('data-price');
    if (money < price){
      $(this).css("background-color","red");
      $(this).css("font-style","bold");
      $(this).css("color","black");
    }
    else{
      $(this).append( "<p>Compra</p>" );
      $(this).css("background-color","rgba(0, 181, 20, 0.64)");
    }
});