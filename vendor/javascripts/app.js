$(document).on('ready', function() {
  // modal
  $('.modal-trigger').leanModal();

  // nav
  $('.button-collapse').sideNav({
    closeOnClick: true
  });

  $('#searchCancel').on('click', function() {
    $('#searchField').val('');
  });
});

var httpErrorHandler = function(response) {
  if(response.data.hasOwnProperty('error')) {
    Materialize.toast(response.data.error.message, 4000);
  }
  if(response.data.hasOwnProperty('error') && response.data.error.hasOwnProperty('param')) {
    $('#' + response.data.error.param).focus();
  }
}

var app = angular.module('app',[]);
