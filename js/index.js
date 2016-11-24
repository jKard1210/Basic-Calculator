$(document).ready(function() {
});
var stored = 0;
var screen = 0;
var sign = "";
function changeOutput(y) {
  screen = (screen * 10) + y;
  $(".output").html(screen);
}


$(ac).click(function() {
  screen = 0;
  stored = 0;
  sign = "";
  $(".output").html(screen);
});
$(one).click(function() {
  changeOutput(1);
});
$(two).click(function() {
  changeOutput(2);
});
$(three).click(function() {
  changeOutput(3);
});
$(four).click(function() {
  changeOutput(4);
});
$(five).click(function() {
  changeOutput(5);
});
$(six).click(function() {
  changeOutput(6);
});
$(seven).click(function() {
  changeOutput(7);
});
$(eight).click(function() {
  changeOutput(8);
});
$(nine).click(function() {
  changeOutput(9);
});
$(zero).click(function() {
  changeOutput(0);
});
$(times).click(function() {
    screen = returnNum(stored, screen, sign);
    $(".output").html(screen);
    sign = "x";
    stored = screen;
    screen = 0;
});
$(minus).click(function() {
    screen = returnNum(stored, screen, sign);
    $(".output").html(screen);
    sign = "-";
    stored = screen;
    screen = 0;
});
$(divide).click(function() {
    screen = returnNum(stored, screen, sign);
    $(".output").html(screen);
    sign = "/";
    stored = screen;
    screen = 0;
});
$(plus).click(function() {
    screen = returnNum(stored, screen, sign);
    $(".output").html(screen);
    sign = "+";
    stored = screen;
    screen = 0;
});
$(equals).click(function() {
  screen = returnNum(stored, screen, sign);
  $(".output").html(screen);
  sign = "";
});

function returnNum(stored, screen, sign) {
  if (sign == "") {
    return screen;
  }
  else if (sign == "+") {
    return stored + screen;
  }
  else if (sign == "-") {
    return stored - screen;
  }
  else if (sign == "x") {
    return stored * screen;
  }
  else if (sign == "/") {
    return stored/screen;
  }
}