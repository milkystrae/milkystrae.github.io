$(document).ready(function() {
 var owl = $('.carousel');
  owl.owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem:true,
      nav : false,
      autoHeight : false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});