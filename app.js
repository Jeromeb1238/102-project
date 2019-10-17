
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
