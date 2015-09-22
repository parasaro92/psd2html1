$('document').ready(function() {
  $('header nav').affix({
    offset: {
      top: 80
    }
  });
  $('#all').click(function() {
    $('.all').fadeIn(1000);
  });
  $('#a').click(function() {
    $('.all').fadeOut(1000);
    $('.web').fadeIn(1000);
  });
  $('#l').click(function() {
    $('.all').fadeOut();
    $('.logo').fadeIn(1000);
  });
  $('#d').click(function() {
    $('.all').fadeOut(); 
    $('.e-comm').fadeIn(1000);
  });
  $('#c').click(function() {
    $('.all').fadeOut(); 
    $('.mount').fadeIn(1000);
  });
  $('.carousel').carousel({
  interval: 2000
  }); 
});

    setCarouselHeight('#carousel-example');

    function setCarouselHeight(id)
    {
        var slideHeight = [];
        $(id+' .item').each(function()
        {
            // add all slide heights to an array
            slideHeight.push($(this).height());
        });

        // find the tallest item
        max = Math.max.apply(null, slideHeight);

        // set the slide's height
        $(id+' .carousel-content').each(function()
        {
            $(this).css('height',max+'px');
        });
    }