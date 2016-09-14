$(document).on('ready', function() {
  // select
  $('select').material_select();

  // modal
  $('.modal-trigger').leanModal();

  // nav
  $('.button-collapse').sideNav({
    closeOnClick: true
  });

  $('#searchCancel').on('click', function() {
    $('#searchField').val('');
  });

  $('#actionProfile').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 100, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'button' // Displays dropdown with edge aligned to the left of button
    }
  );
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
