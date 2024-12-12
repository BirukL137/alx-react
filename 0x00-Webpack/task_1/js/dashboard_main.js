import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - ALX</p>');

  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  const debouncedUpdateCounter = _.debounce(updateCounter, 300);

  $('button').on('click', debouncedUpdateCounter);
});
