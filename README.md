# youtube-video-list-player (jQuery version)

- [ ] Version 1.2.1

Just few lines of jQueruy 
```javascript
  $( ".list-btn" ).each(function() {
    $(this).on('click', function(){
      var dataSrc = $(this).attr("data-src");
      $('#video-wrapper').attr('src', dataSrc);

      // add active class with "list-btn"
      var element = $(this).parent("li");
      if (element.hasClass("active")) {
        element.find("li").removeClass("active");
      }
      else {
        element.addClass("active");
        element.siblings("li").removeClass("active");
        element.siblings("li").find("li").removeClass("active");
      }

    });
  });
```

[Demo link:](https://fahaddevs.github.io/youtube-video-list-player/)