
$(function () {
  $(document).scroll(function () {
    var $nav = $('#mainnav');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

});
