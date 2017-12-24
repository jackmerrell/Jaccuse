/*
  Project: Jaccuse
  Author: Jack Merrell
 */
import $ from 'jquery';


$(document).ready(function() {



  //animate logo

  var timestamp = new Date().getTime();   // get timestamp for gif
  (new Image()).src = 'assets/images/jaccuse.gif'; // preload the GIF
  var $logo = $('.logo');
  $logo.find('img').attr('src', 'assets/images/jaccuse.gif'+'?'+timestamp);
  $logo.click(function() {
    $logo.find('img').attr('src', 'assets/images/jaccuse.gif'+'?'+timestamp);
  });


  var $landing = $('#landing');
  var $onBoarding = $('#on-boarding');
  var $game = $('#game');
  var $resultsContainer = $('#resultContainer');


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

  $nextBTN.click(function() {
    nextScreen();
  });


  ///////////////////// GAME /////////////////////

  var nameList = [];

  var $submitName = $('#submit');
  var $playJaccuse = $('#playJaccuse');
  var $nameInput = $('#nameInput');
  var $results = $('#result');
  var $nameForm = $('#name');
  var $hideNames = $('#hideNames');
  var $restart = $('#restart');

  $submitName.on("click", function(e) {
    e.preventDefault();
    var content = $nameForm.val();
    console.log($nameForm);
    if (content == "") {
      console.log("no name");
    } else {
      nameList.push(content);
      $nameForm.val("");
      var NumberOfNames = nameList.length;
      $('#NumberOfNames').html("names: " + NumberOfNames);
      console.log(nameList);
    }

  });

  $playJaccuse.on("click", function(e) {
    e.preventDefault();
    var dataR = $.shuffle(nameList);
    console.log(nameList.length);

    if (nameList <= 1){
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

  $hideNames.on("click", function(e) {
    e.preventDefault();
    console.log($results);

    if ($results.hasClass('hide')) {
      $results.removeClass('hide');
      $results.addClass('show');
      $resultsContainer.animate({scrollTop: $resultsContainer.offset().top});
      $hideNames.html("hide names");
    }else{
      $results.removeClass('show');
      $results.addClass('hide');
      $hideNames.html("show names");
    }
  });

  $restart.on("click", function(e) {
    e.preventDefault();
    location.reload();

  });

}); //doc ready

// SHUFFLE FUNCTION

(function($){
  $.fn.shuffle = function() {
    return this.each(function() {
      var items = $(this).children().clone(true);
      return (items.length) ? $(this).html($.shuffle(items)) : this;
    });
  }
  $.shuffle = function(data) {
    for (var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], data[i] = data[j], data[j] = x);
    return data;
  }

})(jQuery);
