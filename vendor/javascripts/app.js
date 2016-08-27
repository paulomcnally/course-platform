$(document).on('ready', function() {
  // nav
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

  $('#searchCancel').on('click', function() {
    $('#searchField').val('');
  })
});
