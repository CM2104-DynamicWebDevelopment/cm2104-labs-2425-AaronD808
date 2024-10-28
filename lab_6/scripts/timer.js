/**
 * @Author: John Isaacs <john>
 * @Date:   14-Feb-192019
 * @Filename: timer.js
 * @Last modified by:   john
 * @Last modified time: 14-Feb-192019
 */

setCountdown(10);

 function setCountdown(delay){
   //sets an timeout delay to display a message after the set delay
   setTimeout(function() {
     console.log("boom")
   }, delay*1000);

   //reduces the seconds left by 1
   var secondsleft = delay -1;
   //sets up an interval to fire every second
   var counter = setInterval(function() {

     //display the current seconds left
     console.log(secondsleft--);

     //if we are at 0 stop the countdown
     if(secondsleft <=0){clearInterval(counter)}
   }, 1000);
 }
