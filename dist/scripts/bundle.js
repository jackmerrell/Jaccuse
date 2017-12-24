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

  ///////////////////// GAME /////////////////////

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

    $results.fadeIn('200');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNJQTs7Ozs7O0FBR0Esc0JBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVzs7QUFFM0IsTUFBSSxXQUFXLHNCQUFFLFVBQUYsQ0FBZjtBQUNBLE1BQUksY0FBYyxzQkFBRSxjQUFGLENBQWxCO0FBQ0EsTUFBSSxRQUFRLHNCQUFFLE9BQUYsQ0FBWjs7QUFFQSxNQUFJLFdBQVcsc0JBQUUsVUFBRixDQUFmO0FBQ0EsTUFBSSxZQUFZLHNCQUFFLG1CQUFGLENBQWhCOztBQUVBLE1BQUksUUFBUSxDQUFaO0FBQ0EsTUFBSSxZQUFZLENBQWhCO0FBQ0EsTUFBSSxXQUFXLHNCQUFFLE9BQUYsQ0FBZjs7QUFFQSxNQUFJLGNBQWMsc0JBQUUsYUFBRixFQUFpQixNQUFqQixHQUEwQixDQUE1QztBQUNBLE1BQUksV0FBVyxXQUFmO0FBQ0EsTUFBSSxVQUFVLHNCQUFFLGFBQUYsQ0FBZDtBQUNBLE1BQUksT0FBTyxzQkFBRSxlQUFGLENBQVg7O0FBR0EsV0FBUyxTQUFULEdBQXFCO0FBQ25CLGdCQUFZLFFBQVosQ0FBcUIsTUFBckI7QUFDRDs7QUFFRCxXQUFTLFFBQVQsR0FBb0I7QUFDbEIsVUFBTSxRQUFOLENBQWUsTUFBZjtBQUNEOztBQUVELFdBQVMsY0FBVCxHQUEwQjtBQUN4QixnQkFBWSxXQUFaLENBQXdCLE1BQXhCO0FBQ0EsZ0JBQVksUUFBWixDQUFxQixNQUFyQjtBQUNEOztBQUVELFdBQVMsS0FBVCxDQUFlLFlBQVc7QUFDeEIsYUFBUyxXQUFULENBQXFCLE1BQXJCO0FBQ0EsYUFBUyxRQUFULENBQWtCLE1BQWxCO0FBQ0E7QUFDRCxHQUpEOztBQU1BLFlBQVUsS0FBVixDQUFnQixZQUFXO0FBQ3pCLFlBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxhQUFTLFdBQVQsQ0FBcUIsTUFBckI7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QUlILEdBTEQ7QUFNQSxJQUFFLE9BQUYsR0FBWSxVQUFTLElBQVQsRUFBZTtBQUN2QixTQUFJLElBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFJLEtBQUssTUFBdkIsRUFBK0IsQ0FBL0IsRUFBa0MsSUFBSSxTQUFTLEtBQUssTUFBTCxLQUFnQixDQUF6QixDQUFKLEVBQWlDLElBQUksS0FBSyxFQUFFLENBQVAsQ0FBckMsRUFBZ0QsS0FBSyxDQUFMLElBQVUsS0FBSyxDQUFMLENBQTFELEVBQW1FLEtBQUssQ0FBTCxJQUFVLENBQS9HO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FIRDtBQUtILENBWkQsRUFZRyxNQVpIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gIFByb2plY3Q6IEphY2N1c2VcbiAgQXV0aG9yOiBKYWNrIE1lcnJlbGxcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICB2YXIgJGxhbmRpbmcgPSAkKCcjbGFuZGluZycpO1xuICB2YXIgJG9uQm9hcmRpbmcgPSAkKCcjb24tYm9hcmRpbmcnKTtcbiAgdmFyICRnYW1lID0gJCgnI2dhbWUnKTtcblxuICB2YXIgJHBsYXlCVE4gPSAkKCcjcGxheUJUTicpO1xuICB2YXIgJHJ1bGVzQlROID0gJCgnI3J1bGVzQlROLCAucnVsZXMnKTtcblxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgaW5jcmVtZW50ID0gMTtcbiAgdmFyICRuZXh0QlROID0gJCgnI25leHQnKTtcblxuICB2YXIgc2NyZWVuQ291bnQgPSAkKCcuc2NyZWVucyBsaScpLmxlbmd0aCAtIDE7XG4gIHZhciBpbmRleE1heCA9IHNjcmVlbkNvdW50O1xuICB2YXIgJHNjcmVlbiA9ICQoJy5zY3JlZW5zIGxpJyk7XG4gIHZhciAkZG90ID0gJCgnI3BhZ2luYXRpb24gYScpO1xuXG5cbiAgZnVuY3Rpb24gc2hvd1J1bGVzKCkge1xuICAgICRvbkJvYXJkaW5nLmFkZENsYXNzKCdzaG93Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93R2FtZSgpIHtcbiAgICAkZ2FtZS5hZGRDbGFzcygnc2hvdycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU9uQm9hcmRpbmcoKSB7XG4gICAgJG9uQm9hcmRpbmcucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkb25Cb2FyZGluZy5hZGRDbGFzcygnaGlkZScpO1xuICB9XG5cbiAgJHBsYXlCVE4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJGxhbmRpbmcucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkbGFuZGluZy5hZGRDbGFzcygnaGlkZScpO1xuICAgIHNob3dHYW1lKCk7XG4gIH0pO1xuXG4gICRydWxlc0JUTi5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgICRsYW5kaW5nLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJGdhbWUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkbGFuZGluZy5hZGRDbGFzcygnaGlkZScpO1xuICAgICRnYW1lLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgc2hvd1J1bGVzKCk7XG4gIH0pO1xuXG5cbiAgLy8gUlVMRVNcbiAgZnVuY3Rpb24gbmV4dFNjcmVlbigpIHtcbiAgICBpZiAoaW5kZXggPCBpbmRleE1heCkge1xuICAgICAgJHNjcmVlbi5lcShpbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRvdC5lcShpbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgaW5kZXggKz0gaW5jcmVtZW50O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicGxheVwiKTtcbiAgICAgIGhpZGVPbkJvYXJkaW5nKCk7XG4gICAgICBzaG93R2FtZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlU2NyZWVuKGluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpIHtcbiAgICBpZiAoaW5kZXggPT09IGluZGV4TWF4KSB7XG4gICAgICAkc2NyZWVuLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkZG90LmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkbmV4dEJUTi5yZW1vdmVDbGFzcygnbmV4dC1zY3JlZW4nKTtcbiAgICAgICRuZXh0QlROLmFkZENsYXNzKCdwbGF5Jyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgJHNjcmVlbi5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgfVxuICB9XG5cbiAgJG5leHRCVE4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgbmV4dFNjcmVlbigpO1xuICB9KTtcblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHQU1FIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHZhciBuYW1lTGlzdCA9IFtdO1xuXG4gIHZhciAkc3VibWl0TmFtZSA9ICQoJyNzdWJtaXQnKTtcbiAgdmFyICRwbGF5SmFjY3VzZSA9ICQoJyNwbGF5SmFjY3VzZScpO1xuICB2YXIgJHJlc3VsdHMgPSAkKCcjcmVzdWx0Jyk7XG4gIHZhciAkbmFtZUlucHV0ID0gJCgnI25hbWVJbnB1dCcpO1xuXG5cbiAgJHN1Ym1pdE5hbWUub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBjb250ZW50ID0gJCgnI25hbWUnKS52YWwoKTtcbiAgICBpZiAoY29udGVudCA9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVtcHR5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lTGlzdC5wdXNoKGNvbnRlbnQpO1xuICAgICAgJCgnI25hbWUnKS52YWwoXCJcIik7XG4gICAgICB2YXIgTnVtYmVyT2ZOYW1lcyA9IG5hbWVMaXN0Lmxlbmd0aDtcbiAgICAgICQoJyNOdW1iZXJPZk5hbWVzJykuaHRtbChcIm5hbWVzOiBcIiArIE51bWJlck9mTmFtZXMpO1xuICAgICAgY29uc29sZS5sb2cobmFtZUxpc3QpO1xuICAgIH1cblxuICB9KTtcblxuICAkcGxheUphY2N1c2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRuYW1lSW5wdXQuZmFkZU91dCgnMjAwJyk7XG5cbiAgICB2YXIgZGF0YVIgPSAkLnNodWZmbGUobmFtZUxpc3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YVIubGVuZ3RoOyBpKyspIHtcbiAgICAgICRyZXN1bHRzLmFwcGVuZCgnPGxpPicgKyBkYXRhUltpXSArICc8L2xpPicpO1xuICAgIH1cblxuICAgICRyZXN1bHRzLmZhZGVJbignMjAwJyk7XG5cblxuICB9KTtcblxufSk7XG5cbi8vIFNIVUZGTEUgRlVOQ1RJT05cblxuKGZ1bmN0aW9uKCQpe1xuICAgICQuZm4uc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSAkKHRoaXMpLmNoaWxkcmVuKCkuY2xvbmUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW1zLmxlbmd0aCkgPyAkKHRoaXMpLmh0bWwoJC5zaHVmZmxlKGl0ZW1zKSkgOiB0aGlzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgJC5zaHVmZmxlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBmb3IodmFyIGosIHgsIGkgPSBkYXRhLmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IGRhdGFbLS1pXSwgZGF0YVtpXSA9IGRhdGFbal0sIGRhdGFbal0gPSB4KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG59KShqUXVlcnkpO1xuIl19
