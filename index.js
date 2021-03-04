//lets the button know what when the botton is pressed, it will show the var onto the written document:
function triggered() {
  var one = "you";
  var two = "this";
  var three = "awesome";

//the var sentence will take the variables from the top and add them in to the sentence:
  var sentence = "Hello!, if you're reading" + two +", " + one + " are " + three + " :D";
  document.write(sentence);
  document.write("<br><a href='index.html'>Back</a>");
}