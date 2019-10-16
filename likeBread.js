var likeBread = prompt("Do you like bread or donuts?");
var message;

if(likeBread === 'bread') {
  message = 'Bread is the best!';
} else if (likeBread === 'donuts') {
  message = 'Donuts are not as good for you as bread';
} else {
  message = 'You do not like bread or donuts?  What?';
}
document.write('<h3>' + message + '</h3>');