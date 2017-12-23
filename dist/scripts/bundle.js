(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

  var $landing = (0, _jquery2.default)('#landing');
  var $onBoarding = (0, _jquery2.default)('#on-boarding');
  var $game = (0, _jquery2.default)('#game');

  var $playBTN = (0, _jquery2.default)('#playBTN');
  var $rulesBTN = (0, _jquery2.default)('#rulesBTN, .rules');

  var index = 0;
  var increment = 1;
  var $nextBTN = (0, _jquery2.default)('#next');

  var screenCount = (0, _jquery2.default)('.screens li').length - 1;
  var indexMax = screenCount;
  var $screen = (0, _jquery2.default)('.screens li');
  var $dot = (0, _jquery2.default)('#pagination a');

  function showRules() {
    $onBoarding.addClass('show');
  }

  function showGame() {
    $game.addClass('show');
  }

  function hideOnBoarding() {
    $onBoarding.removeClass('show');
    $onBoarding.addClass('hide');
  }

  $playBTN.click(function () {
    $landing.removeClass('show');
    $landing.addClass('hide');
    showGame();
  });

  $rulesBTN.click(function () {
    console.log("hello");
    $landing.removeClass('show');
    $game.removeClass('show');
    $landing.addClass('hide');
    $game.addClass('hide');
    showRules();
  });

  // RULES
  function nextScreen() {
    if (index < indexMax) {
      $screen.eq(index).removeClass('active');
      $dot.eq(index).removeClass('active');
      index += increment;
    } else {
      console.log("play");
      hideOnBoarding();
      showGame();
    }
    return updateScreen(index);
  }

  function updateScreen() {
    if (index === indexMax) {
      $screen.eq(index).addClass('active');
      $dot.eq(index).addClass('active');
      $nextBTN.removeClass('next-screen');
      $nextBTN.addClass('play');
    } else {
      $screen.eq(index).addClass('active');
      $dot.eq(index).addClass('active');
    }
  }

  $nextBTN.click(function () {
    nextScreen();
  });

  // console.log('screen count = ' + index);
  // console.log(indexMax);


  // GAME

  var nameList = [];

  var $submitName = (0, _jquery2.default)('#submit');
  var $playJaccuse = (0, _jquery2.default)('#playJaccuse');
  var $results = (0, _jquery2.default)('#result');
  var $nameInput = (0, _jquery2.default)('#nameInput');

  $submitName.on("click", function (e) {
    e.preventDefault();
    var content = (0, _jquery2.default)('#name').val();
    if (content == "") {
      console.log("empty");
    } else {
      nameList.push(content);
      (0, _jquery2.default)('#name').val("");
      var NumberOfNames = nameList.length;
      (0, _jquery2.default)('#NumberOfNames').html("names: " + NumberOfNames);
      console.log(nameList);
    }
  });

  $playJaccuse.on("click", function (e) {
    e.preventDefault();
    $nameInput.fadeOut('200');

    var dataR = _jquery2.default.shuffle(nameList);
    for (var i = 0; i < dataR.length; i++) {
      $results.append('<li>' + dataR[i] + '</li>');
    }

    $results.fadeIn('100');
  });
});

// SHUFFLE FUNCTION

/*
  Project: Jaccuse
  Author: Jack Merrell
 */
(function ($) {
  $.fn.shuffle = function () {
    return this.each(function () {
      var items = $(this).children().clone(true);
      return items.length ? $(this).html($.shuffle(items)) : this;
    });
  };
  $.shuffle = function (data) {
    for (var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], data[i] = data[j], data[j] = x) {}
    return data;
  };
})(jQuery);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNJQTs7Ozs7O0FBR0Esc0JBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVzs7QUFFM0IsTUFBSSxXQUFXLHNCQUFFLFVBQUYsQ0FBZjtBQUNBLE1BQUksY0FBYyxzQkFBRSxjQUFGLENBQWxCO0FBQ0EsTUFBSSxRQUFRLHNCQUFFLE9BQUYsQ0FBWjs7QUFFQSxNQUFJLFdBQVcsc0JBQUUsVUFBRixDQUFmO0FBQ0EsTUFBSSxZQUFZLHNCQUFFLG1CQUFGLENBQWhCOztBQUVBLE1BQUksUUFBUSxDQUFaO0FBQ0EsTUFBSSxZQUFZLENBQWhCO0FBQ0EsTUFBSSxXQUFXLHNCQUFFLE9BQUYsQ0FBZjs7QUFFQSxNQUFJLGNBQWMsc0JBQUUsYUFBRixFQUFpQixNQUFqQixHQUEwQixDQUE1QztBQUNBLE1BQUksV0FBVyxXQUFmO0FBQ0EsTUFBSSxVQUFVLHNCQUFFLGFBQUYsQ0FBZDtBQUNBLE1BQUksT0FBTyxzQkFBRSxlQUFGLENBQVg7O0FBR0EsV0FBUyxTQUFULEdBQXFCO0FBQ25CLGdCQUFZLFFBQVosQ0FBcUIsTUFBckI7QUFDRDs7QUFFRCxXQUFTLFFBQVQsR0FBb0I7QUFDbEIsVUFBTSxRQUFOLENBQWUsTUFBZjtBQUNEOztBQUVELFdBQVMsY0FBVCxHQUEwQjtBQUN4QixnQkFBWSxXQUFaLENBQXdCLE1BQXhCO0FBQ0EsZ0JBQVksUUFBWixDQUFxQixNQUFyQjtBQUNEOztBQUVELFdBQVMsS0FBVCxDQUFlLFlBQVc7QUFDeEIsYUFBUyxXQUFULENBQXFCLE1BQXJCO0FBQ0EsYUFBUyxRQUFULENBQWtCLE1BQWxCO0FBQ0E7QUFDRCxHQUpEOztBQU1BLFlBQVUsS0FBVixDQUFnQixZQUFXO0FBQ3pCLFlBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxhQUFTLFdBQVQsQ0FBcUIsTUFBckI7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SCxLQUhNLENBQVA7QUFJSCxHQUxEO0FBTUEsSUFBRSxPQUFGLEdBQVksVUFBUyxJQUFULEVBQWU7QUFDdkIsU0FBSSxJQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBSSxLQUFLLE1BQXZCLEVBQStCLENBQS9CLEVBQWtDLElBQUksU0FBUyxLQUFLLE1BQUwsS0FBZ0IsQ0FBekIsQ0FBSixFQUFpQyxJQUFJLEtBQUssRUFBRSxDQUFQLENBQXJDLEVBQWdELEtBQUssQ0FBTCxJQUFVLEtBQUssQ0FBTCxDQUExRCxFQUFtRSxLQUFLLENBQUwsSUFBVSxDQUEvRztBQUNBLFdBQU8sSUFBUDtBQUNILEdBSEQ7QUFLSCxDQVpELEVBWUcsTUFaSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICBQcm9qZWN0OiBKYWNjdXNlXG4gIEF1dGhvcjogSmFjayBNZXJyZWxsXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyICRsYW5kaW5nID0gJCgnI2xhbmRpbmcnKTtcbiAgdmFyICRvbkJvYXJkaW5nID0gJCgnI29uLWJvYXJkaW5nJyk7XG4gIHZhciAkZ2FtZSA9ICQoJyNnYW1lJyk7XG5cbiAgdmFyICRwbGF5QlROID0gJCgnI3BsYXlCVE4nKTtcbiAgdmFyICRydWxlc0JUTiA9ICQoJyNydWxlc0JUTiwgLnJ1bGVzJyk7XG5cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGluY3JlbWVudCA9IDE7XG4gIHZhciAkbmV4dEJUTiA9ICQoJyNuZXh0Jyk7XG5cbiAgdmFyIHNjcmVlbkNvdW50ID0gJCgnLnNjcmVlbnMgbGknKS5sZW5ndGggLSAxO1xuICB2YXIgaW5kZXhNYXggPSBzY3JlZW5Db3VudDtcbiAgdmFyICRzY3JlZW4gPSAkKCcuc2NyZWVucyBsaScpO1xuICB2YXIgJGRvdCA9ICQoJyNwYWdpbmF0aW9uIGEnKTtcblxuXG4gIGZ1bmN0aW9uIHNob3dSdWxlcygpIHtcbiAgICAkb25Cb2FyZGluZy5hZGRDbGFzcygnc2hvdycpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0dhbWUoKSB7XG4gICAgJGdhbWUuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVPbkJvYXJkaW5nKCkge1xuICAgICRvbkJvYXJkaW5nLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJG9uQm9hcmRpbmcuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgfVxuXG4gICRwbGF5QlROLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICRsYW5kaW5nLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJGxhbmRpbmcuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICBzaG93R2FtZSgpO1xuICB9KTtcblxuICAkcnVsZXNCVE4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAkbGFuZGluZy5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICRnYW1lLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJGxhbmRpbmcuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAkZ2FtZS5hZGRDbGFzcygnaGlkZScpO1xuICAgIHNob3dSdWxlcygpO1xuICB9KTtcblxuXG4gIC8vIFJVTEVTXG4gIGZ1bmN0aW9uIG5leHRTY3JlZW4oKSB7XG4gICAgaWYgKGluZGV4IDwgaW5kZXhNYXgpIHtcbiAgICAgICRzY3JlZW4uZXEoaW5kZXgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICRkb3QuZXEoaW5kZXgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIGluZGV4ICs9IGluY3JlbWVudDtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInBsYXlcIik7XG4gICAgICBoaWRlT25Cb2FyZGluZygpO1xuICAgICAgc2hvd0dhbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZVNjcmVlbihpbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG4gICAgaWYgKGluZGV4ID09PSBpbmRleE1heCkge1xuICAgICAgJHNjcmVlbi5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJG5leHRCVE4ucmVtb3ZlQ2xhc3MoJ25leHQtc2NyZWVuJyk7XG4gICAgICAkbmV4dEJUTi5hZGRDbGFzcygncGxheScpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICRzY3JlZW4uZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICRkb3QuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgIH1cbiAgfVxuXG4gICRuZXh0QlROLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG5leHRTY3JlZW4oKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coJ3NjcmVlbiBjb3VudCA9ICcgKyBpbmRleCk7XG4gIC8vIGNvbnNvbGUubG9nKGluZGV4TWF4KTtcblxuXG4gIC8vIEdBTUVcblxuICB2YXIgbmFtZUxpc3QgPSBbXTtcblxuICB2YXIgJHN1Ym1pdE5hbWUgPSAkKCcjc3VibWl0Jyk7XG4gIHZhciAkcGxheUphY2N1c2UgPSAkKCcjcGxheUphY2N1c2UnKTtcbiAgdmFyICRyZXN1bHRzID0gJCgnI3Jlc3VsdCcpO1xuICB2YXIgJG5hbWVJbnB1dCA9ICQoJyNuYW1lSW5wdXQnKTtcblxuXG4gICRzdWJtaXROYW1lLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgY29udGVudCA9ICQoJyNuYW1lJykudmFsKCk7XG4gICAgaWYgKGNvbnRlbnQgPT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZUxpc3QucHVzaChjb250ZW50KTtcbiAgICAgICQoJyNuYW1lJykudmFsKFwiXCIpO1xuICAgICAgdmFyIE51bWJlck9mTmFtZXMgPSBuYW1lTGlzdC5sZW5ndGg7XG4gICAgICAkKCcjTnVtYmVyT2ZOYW1lcycpLmh0bWwoXCJuYW1lczogXCIgKyBOdW1iZXJPZk5hbWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKG5hbWVMaXN0KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJHBsYXlKYWNjdXNlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkbmFtZUlucHV0LmZhZGVPdXQoJzIwMCcpO1xuXG4gICAgdmFyIGRhdGFSID0gJC5zaHVmZmxlKG5hbWVMaXN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFSLmxlbmd0aDsgaSsrKSB7XG4gICAgICAkcmVzdWx0cy5hcHBlbmQoJzxsaT4nICsgZGF0YVJbaV0gKyAnPC9saT4nKTtcbiAgICB9XG5cbiAgICAkcmVzdWx0cy5mYWRlSW4oJzEwMCcpO1xuXG5cbiAgfSk7XG5cblxuXG5cbn0pO1xuXG5cblxuXG4vLyBTSFVGRkxFIEZVTkNUSU9OXG5cbihmdW5jdGlvbigkKXtcbiAgICAkLmZuLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gJCh0aGlzKS5jaGlsZHJlbigpLmNsb25lKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIChpdGVtcy5sZW5ndGgpID8gJCh0aGlzKS5odG1sKCQuc2h1ZmZsZShpdGVtcykpIDogdGhpcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICQuc2h1ZmZsZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgZm9yKHZhciBqLCB4LCBpID0gZGF0YS5sZW5ndGg7IGk7IGogPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogaSksIHggPSBkYXRhWy0taV0sIGRhdGFbaV0gPSBkYXRhW2pdLCBkYXRhW2pdID0geCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxufSkoalF1ZXJ5KTtcbiJdfQ==
