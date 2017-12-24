/*
  Project: Jaccuse
  Author: Jack Merrell
 */
import $ from 'jquery';


$(document).ready(function() {

  var $landing = $('#landing');
  var $onBoarding = $('#on-boarding');
  var $game = $('#game');

  var $playBTN = $('#playBTN');
  var $rulesBTN = $('#rulesBTN, .rules');

  var index = 0;
  var increment = 1;
  var $nextBTN = $('#next');

  var screenCount = $('.screens li').length - 1;
  var indexMax = screenCount;
  var $screen = $('.screens li');
  var $dot = $('#pagination a');


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

  $playBTN.click(function() {
    $landing.removeClass('show');
    $landing.addClass('hide');
    showGame();
  });

  $rulesBTN.click(function() {
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

  $nextBTN.click(function() {
    nextScreen();
  });


  ///////////////////// GAME /////////////////////

  var nameList = [];

  var $submitName = $('#submit');
  var $playJaccuse = $('#playJaccuse');
  var $results = $('#result');
  var $nameInput = $('#nameInput');


  $submitName.on("click", function(e) {
    e.preventDefault();
    var content = $('#name').val();
    if (content == "") {
      console.log("empty");
    } else {
      nameList.push(content);
      $('#name').val("");
      var NumberOfNames = nameList.length;
      $('#NumberOfNames').html("names: " + NumberOfNames);
      console.log(nameList);
    }

  });

  $playJaccuse.on("click", function(e) {
    e.preventDefault();
    $nameInput.fadeOut('200');

    var dataR = $.shuffle(nameList);
    for (var i = 0; i < dataR.length; i++) {
      $results.append('<li>' + dataR[i] + '</li>');
    }

    $results.fadeIn('200');


  });

});

// SHUFFLE FUNCTION

(function($){
    $.fn.shuffle = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }
    $.shuffle = function(data) {
        for(var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], data[i] = data[j], data[j] = x);
        return data;
    }

})(jQuery);
