// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'

// Initialize the count variable
let count = 0;

// Function to update the counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Add the DOM elements
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - ALX</p>');

// Debounce the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Bind the debounced function to the button click event
$('button').on('click', debouncedUpdateCounter);
