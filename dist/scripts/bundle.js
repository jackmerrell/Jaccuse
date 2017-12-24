(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

  //animate logo

  var timestamp = new Date().getTime(); // get timestamp for gif
  new Image().src = 'assets/images/jaccuse.gif'; // preload the GIF
  var $logo = (0, _jquery2.default)('.logo');
  $logo.find('img').attr('src', 'assets/images/jaccuse.gif' + '?' + timestamp);
  $logo.click(function () {
    $logo.find('img').attr('src', 'assets/images/jaccuse.gif' + '?' + timestamp);
  });

  var $landing = (0, _jquery2.default)('#landing');
  var $onBoarding = (0, _jquery2.default)('#on-boarding');
  var $game = (0, _jquery2.default)('#game');
  var $resultsContainer = (0, _jquery2.default)('#resultContainer');

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

  ///////////////////// RULES   /////////////////////
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
  var $nameInput = (0, _jquery2.default)('#nameInput');
  var $results = (0, _jquery2.default)('#result');
  var $nameForm = (0, _jquery2.default)('#name');
  var $hideNames = (0, _jquery2.default)('#hideNames');
  var $restart = (0, _jquery2.default)('#restart');

  $submitName.on("click", function (e) {
    e.preventDefault();
    var content = $nameForm.val();
    console.log($nameForm);
    if (content == "") {
      console.log("no name");
    } else {
      nameList.push(content);
      $nameForm.val("");
      var NumberOfNames = nameList.length;
      (0, _jquery2.default)('#NumberOfNames').html("names: " + NumberOfNames);
      console.log(nameList);
    }
  });

  $playJaccuse.on("click", function (e) {
    e.preventDefault();
    var dataR = _jquery2.default.shuffle(nameList);
    console.log(nameList.length);

    if (nameList <= 1) {
      console.log("no names");
      alert("Enter more names!");
    } else {

      $nameInput.addClass('hide');

      for (var i = 0; i < dataR.length; i++) {
        $results.append('<li>' + dataR[i] + '</li>');
      }

      $resultsContainer.addClass('show');
      $resultsContainer.removeClass('hide');
    }
  });

  $hideNames.on("click", function (e) {
    e.preventDefault();
    console.log($results);

    if ($results.hasClass('hide')) {
      $results.removeClass('hide');
      $results.addClass('show');
      $resultsContainer.animate({ scrollTop: $resultsContainer.offset().top });
      $hideNames.html("hide names");
    } else {
      $results.removeClass('show');
      $results.addClass('hide');
      $hideNames.html("show names");
    }
  });

  $restart.on("click", function (e) {
    e.preventDefault();
    location.reload();
  });
}); //doc ready

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNJQTs7Ozs7O0FBR0Esc0JBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVzs7QUFJM0I7O0FBRUEsTUFBSSxZQUFZLElBQUksSUFBSixHQUFXLE9BQVgsRUFBaEIsQ0FOMkIsQ0FNYTtBQUN2QyxNQUFJLEtBQUosRUFBRCxDQUFjLEdBQWQsR0FBb0IsMkJBQXBCLENBUDJCLENBT3NCO0FBQ2pELE1BQUksUUFBUSxzQkFBRSxPQUFGLENBQVo7QUFDQSxRQUFNLElBQU4sQ0FBVyxLQUFYLEVBQWtCLElBQWxCLENBQXVCLEtBQXZCLEVBQThCLDhCQUE0QixHQUE1QixHQUFnQyxTQUE5RDtBQUNBLFFBQU0sS0FBTixDQUFZLFlBQVc7QUFDckIsVUFBTSxJQUFOLENBQVcsS0FBWCxFQUFrQixJQUFsQixDQUF1QixLQUF2QixFQUE4Qiw4QkFBNEIsR0FBNUIsR0FBZ0MsU0FBOUQ7QUFDRCxHQUZEOztBQUtBLE1BQUksV0FBVyxzQkFBRSxVQUFGLENBQWY7QUFDQSxNQUFJLGNBQWMsc0JBQUUsY0FBRixDQUFsQjtBQUNBLE1BQUksUUFBUSxzQkFBRSxPQUFGLENBQVo7QUFDQSxNQUFJLG9CQUFvQixzQkFBRSxrQkFBRixDQUF4Qjs7QUFHQSxNQUFJLFdBQVcsc0JBQUUsVUFBRixDQUFmO0FBQ0EsTUFBSSxZQUFZLHNCQUFFLG1CQUFGLENBQWhCOztBQUVBLE1BQUksUUFBUSxDQUFaO0FBQ0EsTUFBSSxZQUFZLENBQWhCO0FBQ0EsTUFBSSxXQUFXLHNCQUFFLE9BQUYsQ0FBZjs7QUFFQSxNQUFJLGNBQWMsc0JBQUUsYUFBRixFQUFpQixNQUFqQixHQUEwQixDQUE1QztBQUNBLE1BQUksV0FBVyxXQUFmO0FBQ0EsTUFBSSxVQUFVLHNCQUFFLGFBQUYsQ0FBZDtBQUNBLE1BQUksT0FBTyxzQkFBRSxl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QUFLLE9BQUwsR0FBZSxZQUFXO0FBQ3hCLFdBQU8sS0FBSyxJQUFMLENBQVUsWUFBVztBQUMxQixVQUFJLFFBQVEsRUFBRSxJQUFGLEVBQVEsUUFBUixHQUFtQixLQUFuQixDQUF5QixJQUF6QixDQUFaO0FBQ0EsYUFBUSxNQUFNLE1BQVAsR0FBaUIsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLEVBQUUsT0FBRixDQUFVLEtBQVYsQ0FBYixDQUFqQixHQUFrRCxJQUF6RDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBTEQ7QUFNQSxJQUFFLE9BQUYsR0FBWSxVQUFTLElBQVQsRUFBZTtBQUN6QixTQUFLLElBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFJLEtBQUssTUFBeEIsRUFBZ0MsQ0FBaEMsRUFBbUMsSUFBSSxTQUFTLEtBQUssTUFBTCxLQUFnQixDQUF6QixDQUFKLEVBQWlDLElBQUksS0FBSyxFQUFFLENBQVAsQ0FBckMsRUFBZ0QsS0FBSyxDQUFMLElBQVUsS0FBSyxDQUFMLENBQTFELEVBQW1FLEtBQUssQ0FBTCxJQUFVLENBQWhIO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRDtBQUtELENBWkQsRUFZRyxNQVpIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gIFByb2plY3Q6IEphY2N1c2VcbiAgQXV0aG9yOiBKYWNrIE1lcnJlbGxcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuXG5cbiAgLy9hbmltYXRlIGxvZ29cblxuICB2YXIgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7ICAgLy8gZ2V0IHRpbWVzdGFtcCBmb3IgZ2lmXG4gIChuZXcgSW1hZ2UoKSkuc3JjID0gJ2Fzc2V0cy9pbWFnZXMvamFjY3VzZS5naWYnOyAvLyBwcmVsb2FkIHRoZSBHSUZcbiAgdmFyICRsb2dvID0gJCgnLmxvZ28nKTtcbiAgJGxvZ28uZmluZCgnaW1nJykuYXR0cignc3JjJywgJ2Fzc2V0cy9pbWFnZXMvamFjY3VzZS5naWYnKyc/Jyt0aW1lc3RhbXApO1xuICAkbG9nby5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkbG9nby5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCAnYXNzZXRzL2ltYWdlcy9qYWNjdXNlLmdpZicrJz8nK3RpbWVzdGFtcCk7XG4gIH0pO1xuXG5cbiAgdmFyICRsYW5kaW5nID0gJCgnI2xhbmRpbmcnKTtcbiAgdmFyICRvbkJvYXJkaW5nID0gJCgnI29uLWJvYXJkaW5nJyk7XG4gIHZhciAkZ2FtZSA9ICQoJyNnYW1lJyk7XG4gIHZhciAkcmVzdWx0c0NvbnRhaW5lciA9ICQoJyNyZXN1bHRDb250YWluZXInKTtcblxuXG4gIHZhciAkcGxheUJUTiA9ICQoJyNwbGF5QlROJyk7XG4gIHZhciAkcnVsZXNCVE4gPSAkKCcjcnVsZXNCVE4sIC5ydWxlcycpO1xuXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBpbmNyZW1lbnQgPSAxO1xuICB2YXIgJG5leHRCVE4gPSAkKCcjbmV4dCcpO1xuXG4gIHZhciBzY3JlZW5Db3VudCA9ICQoJy5zY3JlZW5zIGxpJykubGVuZ3RoIC0gMTtcbiAgdmFyIGluZGV4TWF4ID0gc2NyZWVuQ291bnQ7XG4gIHZhciAkc2NyZWVuID0gJCgnLnNjcmVlbnMgbGknKTtcbiAgdmFyICRkb3QgPSAkKCcjcGFnaW5hdGlvbiBhJyk7XG5cblxuICBmdW5jdGlvbiBzaG93UnVsZXMoKSB7XG4gICAgJG9uQm9hcmRpbmcuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dHYW1lKCkge1xuICAgICRnYW1lLmFkZENsYXNzKCdzaG93Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlT25Cb2FyZGluZygpIHtcbiAgICAkb25Cb2FyZGluZy5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICRvbkJvYXJkaW5nLmFkZENsYXNzKCdoaWRlJyk7XG4gIH1cblxuICAkcGxheUJUTi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkbGFuZGluZy5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICRsYW5kaW5nLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgc2hvd0dhbWUoKTtcbiAgfSk7XG5cbiAgJHJ1bGVzQlROLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgJGxhbmRpbmcucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkZ2FtZS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICRsYW5kaW5nLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgJGdhbWUuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICBzaG93UnVsZXMoKTtcbiAgfSk7XG5cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8gUlVMRVMgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgZnVuY3Rpb24gbmV4dFNjcmVlbigpIHtcbiAgICBpZiAoaW5kZXggPCBpbmRleE1heCkge1xuICAgICAgJHNjcmVlbi5lcShpbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRvdC5lcShpbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgaW5kZXggKz0gaW5jcmVtZW50O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicGxheVwiKTtcbiAgICAgIGhpZGVPbkJvYXJkaW5nKCk7XG4gICAgICBzaG93R2FtZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlU2NyZWVuKGluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpIHtcbiAgICBpZiAoaW5kZXggPT09IGluZGV4TWF4KSB7XG4gICAgICAkc2NyZWVuLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkZG90LmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkbmV4dEJUTi5yZW1vdmVDbGFzcygnbmV4dC1zY3JlZW4nKTtcbiAgICAgICRuZXh0QlROLmFkZENsYXNzKCdwbGF5Jyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgJHNjcmVlbi5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgfVxuICB9XG5cbiAgJG5leHRCVE4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgbmV4dFNjcmVlbigpO1xuICB9KTtcblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHQU1FIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHZhciBuYW1lTGlzdCA9IFtdO1xuXG4gIHZhciAkc3VibWl0TmFtZSA9ICQoJyNzdWJtaXQnKTtcbiAgdmFyICRwbGF5SmFjY3VzZSA9ICQoJyNwbGF5SmFjY3VzZScpO1xuICB2YXIgJG5hbWVJbnB1dCA9ICQoJyNuYW1lSW5wdXQnKTtcbiAgdmFyICRyZXN1bHRzID0gJCgnI3Jlc3VsdCcpO1xuICB2YXIgJG5hbWVGb3JtID0gJCgnI25hbWUnKTtcbiAgdmFyICRoaWRlTmFtZXMgPSAkKCcjaGlkZU5hbWVzJyk7XG4gIHZhciAkcmVzdGFydCA9ICQoJyNyZXN0YXJ0Jyk7XG5cbiAgJHN1Ym1pdE5hbWUub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBjb250ZW50ID0gJG5hbWVGb3JtLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKCRuYW1lRm9ybSk7XG4gICAgaWYgKGNvbnRlbnQgPT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJubyBuYW1lXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lTGlzdC5wdXNoKGNvbnRlbnQpO1xuICAgICAgJG5hbWVGb3JtLnZhbChcIlwiKTtcbiAgICAgIHZhciBOdW1iZXJPZk5hbWVzID0gbmFtZUxpc3QubGVuZ3RoO1xuICAgICAgJCgnI051bWJlck9mTmFtZXMnKS5odG1sKFwibmFtZXM6IFwiICsgTnVtYmVyT2ZOYW1lcyk7XG4gICAgICBjb25zb2xlLmxvZyhuYW1lTGlzdCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gICRwbGF5SmFjY3VzZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGRhdGFSID0gJC5zaHVmZmxlKG5hbWVMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhuYW1lTGlzdC5sZW5ndGgpO1xuXG4gICAgaWYgKG5hbWVMaXN0IDw9IDEpe1xuICAgICAgY29uc29sZS5sb2coXCJubyBuYW1lc1wiKTtcbiAgICAgIGFsZXJ0KFwiRW50ZXIgbW9yZSBuYW1lcyFcIik7XG4gICAgfSBlbHNlIHtcblxuICAgICAgJG5hbWVJbnB1dC5hZGRDbGFzcygnaGlkZScpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFSLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICRyZXN1bHRzLmFwcGVuZCgnPGxpPicgKyBkYXRhUltpXSArICc8L2xpPicpO1xuICAgICAgfVxuXG4gICAgICAkcmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgJHJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJGhpZGVOYW1lcy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJHJlc3VsdHMpO1xuXG4gICAgaWYgKCRyZXN1bHRzLmhhc0NsYXNzKCdoaWRlJykpIHtcbiAgICAgICRyZXN1bHRzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAkcmVzdWx0cy5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgJHJlc3VsdHNDb250YWluZXIuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkcmVzdWx0c0NvbnRhaW5lci5vZmZzZXQoKS50b3B9KTtcbiAgICAgICRoaWRlTmFtZXMuaHRtbChcImhpZGUgbmFtZXNcIik7XG4gICAgfWVsc2V7XG4gICAgICAkcmVzdWx0cy5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgJHJlc3VsdHMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICRoaWRlTmFtZXMuaHRtbChcInNob3cgbmFtZXNcIik7XG4gICAgfVxuICB9KTtcblxuICAkcmVzdGFydC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgfSk7XG5cbn0pOyAvL2RvYyByZWFkeVxuXG4vLyBTSFVGRkxFIEZVTkNUSU9OXG5cbihmdW5jdGlvbigkKXtcbiAgJC5mbi5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpdGVtcyA9ICQodGhpcykuY2hpbGRyZW4oKS5jbG9uZSh0cnVlKTtcbiAgICAgIHJldHVybiAoaXRlbXMubGVuZ3RoKSA/ICQodGhpcykuaHRtbCgkLnNodWZmbGUoaXRlbXMpKSA6IHRoaXM7XG4gICAgfSk7XG4gIH1cbiAgJC5zaHVmZmxlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGZvciAodmFyIGosIHgsIGkgPSBkYXRhLmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IGRhdGFbLS1pXSwgZGF0YVtpXSA9IGRhdGFbal0sIGRhdGFbal0gPSB4KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG59KShqUXVlcnkpO1xuIl19
