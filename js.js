$(".panel-heading").parent('.panel').hover(
  function() {
    $(this).find('.collapse').collapse('show');
    $(this).find('.tournament-btn').addClass('bg-linear-gradient');
    $(this).find('.tournament-btn-text').removeClass('text-gradient');
    $(this).find('.tournament-btn-text').addClass('text-white');
    
  }, function() {
    $(this).find('.collapse').collapse('hide');
    $(this).find('.tournament-btn').removeClass('bg-linear-gradient');
    $(this).find('.tournament-btn-text').addClass('text-gradient');
  }
);