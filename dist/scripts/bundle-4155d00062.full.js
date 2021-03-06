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

