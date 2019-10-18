
function greeting() {

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 0) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome to the site';
  }
  return '<h3>' + greeting + '</h3>';
}

function userName() {
  var name = prompt('What is your name?');
  return '<h3>' + name + '</h3>';
}

function userLike() {
  var likeBread = prompt("Do you like bread or donuts?");
  var message;
  
  if(likeBread === 'bread') {
    message = 'Bread, then you are at the right place!';
  } else if (likeBread === 'donuts') {
    message = 'Donuts, this site is a receipe for bread.';
  } else {
    message = 'You do not like bread or donuts?  What?';
  }
  return '<h3>' + message + '</h3>';
}
// Getting a count for qty of bread loaves
var howMany = function (){
  var count = prompt('Great, how many loaves of bread would you like?');

  while (count === '' || isNaN(count)){
    var count = prompt('Great, how many would you like to order? PLEASE enter a number');
  }
  return count;
}
// This specifies white or wheat loaf and then returns an image of bread
function getItem() {
  var order = prompt('Would you like \'white bread\' or \'wheat bread\'');
  var item;

  if (order === 'white bread') {
    item = '<img src="images/whiteBread.jfif" width="100px">';
  } else if (order === 'wheatBread') {
    item = '<img src="images/wheatBread.jfif" width="100px">';
  }
  return item;
}
// This section is what will be displayed on web page
function showOrder(){
  var item = getItem();
  var total = howMany();
  var result = '';

  for(var i = 0; i < total; i++){
    result = result + '<p>You have ordered ' + (i + 1) + ' ' + item + ' loaves.</p>';
  }
  return result;
}