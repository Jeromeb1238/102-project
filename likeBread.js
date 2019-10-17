var likeBread = prompt("Do you like bread or donuts?");
var message;

if(likeBread === 'bread') {
  message = 'Bread, then you are at the right place!';
} else if (likeBread === 'donuts') {
  message = 'Donuts, this site is a receipe for bread.';
} else {
  message = 'You don\'nt like bread or donuts?  What?';
}
document.write('<h3>' + message + '</h3>');