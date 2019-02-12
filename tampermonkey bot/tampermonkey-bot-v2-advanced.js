// ==UserScript==
// @name         WW BOTT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://webwork.elearning.ubc.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

/*************************** CUSTOMIZABLE BOT CODE ***************************/

    var solve_mode = "single";     // **is there more than one question to solve?
    // solve_modes: "single" - individual question solver
    //              "multiple" - multiple question solver
    //              "uniform" - solve multiple questions at the same time!
    var increment_mode = "simple"; // **do you want to activate advanced incrementing?
    // increment_modes: "simple" - simple incrementing based on number
    //                  "advanced" - increment based on percentage error

    var start = 0;                // **starting value
    var end = 500;                // **ending value
    var increment = 1;            // **value to increment by

    let sp_increment = 0;
    let adv_start = 1;            // using the advanced increment mode only allows for starting above 1. DONT CHANGE UNLESS YOU KNOW WHAT YOU'RE DOING
    var percentage_error = 0.02;  // **webwork percentage error

    // get the output tree (results)
    var output = document.getElementById("output_summary");
    var answers = output.getElementsByTagName("td");
    // get problem body tree (inputs)
    var pb = document.getElementsByClassName("problem-content well well-small");
    var problem_body = pb[0];
    var input_forms = problem_body.getElementsByTagName("input");

    if (solve_mode == "single") {
      var question_number = 1;    // **which inidividual question?
      var i_checkTrue = 0;        // **how many questions are already correct?

      // check the current number of correct values
      var checkTrue_list = output.getElementsByClassName("ResultsWithoutError");
      var checkTrue = parseInt(parseInt(checkTrue_list.length) / 2);
      // gets the output element of "question_number"
      if (question_number == 0) alert("Question number is zero!");
      else if (question_number < 10)  {
        var q_element = document.getElementByID('AnSwEr000' + question_number);
      }
      else if (question_number < 100) {
        var q_element = document.getElementByID('AnSwEr00' + question_number);
      }
      else {
        var q_element = document.getElementByID('AnSwEr0' + question_number);
      }
    }
    else if (solve_mode == "multiple") {
      // get the number of questions that exist
      var checkTrue_list = output.getElementsByClassName("ResultsWithoutError");
      var checkFalse_list = output.getElementsByClassName("ResultsWithError");
      var checkTrue = parseInt(parseInt(checkTrue_list.length) / 2);
      var checkFalse = parseInt(parseInt(checkFalse_list.length) / 2);
      var number_of_questions = checkTrue + checkFalse;

      if(checkTrue_list.length == null && checkFalse_list.length == null) alert("There are no questions");
    }
    else alert("Please select a solver mode (single/multiple)");

    if (increment_mode == "advanced") start = 1;

/************************* END OF CUSTOMIZABLE CODE ***************************/

    // Get the button elements
    var submit_Button = document.getElementById('submitAnswers_id');
    var preview_Button = document.getElementById('previewAnswers_id')
    var check_Button = document.getElementById('checkAnswers_id')

    let submitVal = 0;
    let currentVal = parseFloat(q_element.value,10);

    // SINGLE QUESTION SOLVER - SIMPLE INCREMENT
    if(solve_mode == "single" && increment_mode == "simple")  {
      // check if question is solved
      if(checkTrue == i_checkTrue)  {
        submitVal = currentVal + increment;
        currentVal = submitVal;
        submit_Button.click();
      }
      // if question has been solved
      else {
        alert("Question number " + question_number + " is solved!");
      }
    }

    // SINGLE QUESTION SOLVER - ADVANCED INCREMENT
    else if(solve_mode == "single" && increment_mode == "advanced") {
      // check if question is solved
      if(checkTrue == i_checkTrue)  {
        sp_increment = currentVal * percentage_error
        submitVal = currentVal + sp_increment;
        currentVal = submitVal;
        submit_Button.click();
      }
      // if question has been solved
      else {
        alert("Question number " + question_number + " is solved!");
      }
    }
    // MULTIPLE QUESTION SOLVER - SIMPLE INCREMENT
    else if(solve_mode == "multiple" && increment_mode == "simple") {
      if(checkTrueLength < )

    }


})();
