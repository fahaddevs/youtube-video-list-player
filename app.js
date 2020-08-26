
$(document).ready(function(){

  $( ".btn" ).each(function() {
    $(this).on('click', function(){
      var dataSrc = $(this).attr("data-src");
      $('#video-wrapper').attr('src', dataSrc);
    });
  });
  
});