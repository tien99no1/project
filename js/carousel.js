$(document).ready(function(){
$('#blogCarousel').carousel({
        interval: 5000
    });
});
$(document).ready(function($) {
   $('.content').isotope({
      itemSelector: 'img'
   });
   $('.aw li').click(function(event) {
      // var type = $(this).attr('data-type');
      var type = $(this).data('type');
      // console.log(type);
      var ten_loai = $(this).text();
      $('.title').text(ten_loai);
      type = '.'+type;
      $('.content').isotope({
         filter:type
      });
   });
});