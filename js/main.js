var CHOSEN;
var CHOSEN2;
var COLOR;
var CAPA;
var CHOSENCAPACITY;
var NICECOLOR;
var NNN;
var POOR;
 


function IP(xD) {
  CHOSEN = xD;
  console.log(CHOSEN)
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON").removeAttr("disabled");
}

function CON() {

  switch (CHOSEN) {
    case "S20":
      NNN = "Samsung Galaxy S20";
      CAPA = "SMALL"
      break;
    case "S20P":
      NNN = "Samsung Galaxy S20+";
      CAPA = "BIG";
      break;
    case "S20U":
      NNN = "Samsung Galaxy S20 Ultra";
      CAPA = "BIG";
      break;
  }

  $("#CONFIGURE").text("Configure your " + NNN);

  $("#CK").fadeTo(1500, 0, function() {
    $("#CK").remove();
    $("#FLI").css("min-height", "100vh");
  });
  $(".S1").fadeOut(1500, function() {
    setTimeout(function() {

      if (POOR) {
        //$(".CFCF").fadeIn(1500);
        $(".CHOOSEFINISH").fadeIn(1500);
      } else {
        $(".CFCF").fadeIn(1500);
      }

      $(".IP" + CHOSEN).fadeIn(1500).css("display", "flex");
      //$(".BRUH").text("Your free Samsung S20!")
      //$(".BLA").fadeIn(1500);
      fitty("#CONFIGURE");
    }, 750)
  })
}

function IPC(Dx) {

  $(".CCCP")[0].scrollIntoView()

  COLOR = Dx;
  console.log(COLOR);
  $(".IP-COLOR").not(".IPC-" + Dx).removeClass("IP-SELECTED");
  $(".IPC-" + Dx).addClass("IP-SELECTED");

  switch (COLOR) {
          case "GREY":
            NICECOLOR = "Cosmic Grey"
            break;
          case "BLUE":
            NICECOLOR = "Cloud Blue";
            break;
          case "PINK":
            NICECOLOR = "Cloud Pink";
            break;
          case "BLACK":
            NICECOLOR = "Cosmic Black"
            break;
  }

  $(".CPCP").fadeIn(1500);
  $("#CAPACITY").fadeIn(1500);
  //fitty("#CAPACITY");
  $("#CAPACITY-SMALL").fadeIn(1500).css("display", "flex");

}

function SCAPA(XD) {

  CHOSENCAPACITY = XD;
  console.log(CHOSENCAPACITY);
  $(".IP-CAPACITY").not(".CAPA-" + XD).removeClass("IP-SELECTED");
  $(".CAPA-" + XD).addClass("IP-SELECTED");

  $("#FINISH").fadeIn(1500, function() {
    $("#FINISH")[0].scrollIntoView();
  });
}

function FINISH() {
  $(".KON").fadeOut(1500);
  $(".S3").fadeOut(1500);
  setTimeout(function() {

    if (POOR) {
      $("#IP-PREVIEW").removeClass("w-90").addClass("w-75");
    }

    $("#IP-PREVIEW").attr("src", "img/" + CHOSEN + "/" + COLOR + ".png");
    $("#COR").text("Your " + NNN);
    $("#SCOLOR").text(NICECOLOR);
    $("#SCAPACITY").html(CHOSENCAPACITY + "<small>GB</small>");
    $(".S4").fadeIn(1500);
    $(".S5").fadeIn(1500);
    fitty("#S-COLOR");
    fitty("#S-CAPA");
    //fitty capacity color
    fitty("#COR");
    setTimeout(function() {
      $("#TYPE").fadeIn(1500);
    }, 2000)
  }, 2000)
}

function TYPE() {
  $(".S5").fadeOut(1500);
  $(".S6").fadeOut(1500, function() {
    $(".S7").fadeIn(1500);
  });
}

function LAST() {

  var SMAIL = $("#EMAIL").val();

  if (SMAIL == "") {
    alert("Type in your Email address.")
  } else {

    call_locker();
  }
}

$(function() {

  if ($(window).height() > 720) {

    POOR = false;

    fitty(".FFF");
    setTimeout(function() {
      fitty(".FFF");
    }, 50)
    setTimeout(function() {
      $("#FLI").fadeTo(1500, 1);
      $("#CK").fadeTo(1500, 1);
      SS();
    }, 100)

  } else {

    POOR = true;

    fitty(".FFF");
    setTimeout(function() {
      fitty(".FFF");
    }, 50)
    setTimeout(function() {
      $("#CK").remove();
      $("#FLI").css("min-height", "100vh");
      $("#FLI").fadeTo(1500, 1);
    }, 100)

  }

});
