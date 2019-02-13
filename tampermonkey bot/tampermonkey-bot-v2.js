// ==UserScript==
// @name         WW ATTACK BOT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simple bot for testing values by increments
// @author       You
// @include      https://webwork.elearning.ubc.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

/**************************** CUSTOMIZABLE BOT CODE ***************************/

    var webwork_mode = "single"; // **is there more than one webwork problem to solve?
    // webwork_modes: "single" - solve only one webwork question
    //                "multiple" - continue until all webwork questions solved
    var solve_mode = "uniform"; // **is there more than one question to solve?
    // solve_modes: "single" - individual question solver
    //              "multiple" - multiple question solver
    //              "uniform" - solve multiple questions at the same time!

    var start = 0; // **starting value
    var end = 500; // **ending value
    var increment = 1; // **value to increment by
    var question_number = 1; // **which individual question to solve?
    var ignore_100 = 1; // **decide whether to ignore 100%
    var ignore_attempts = 1; // **decide whether to ignore unlimited attempts

/************************** END OF CUSTOMIZABLE CODE **************************/

    // get the output tree (results)
    var output_body = document.getElementById("output_summary");
    var answers_list = output_body.getElementsByTagName("td");
    // get problem body tree (inputs)
    var problem_body = document.getElementsByClassName("problem-content well well-small")[0];
    var input_list = problem_body.getElementsByTagName("input");
    // get score summary (100%?)
    var score_summary = document.getElementById("score_summary");

    // Button elements
    var submit_Button = document.getElementById("submitAnswers_id");
    var preview_Button = document.getElementById("previewAnswers_id");
    var check_Button = document.getElementById("checkAnswers_id");
    var navi_Button_list = document.getElementsByClassName("nav_button btn btn-primary");
    for(let i = 0; i < navi_Button_list.length; i++) {
      if (navi_Button_list[i].textContent.indexOf("Previous Problem") !== -1) {
        var previous_Button = navi_Button_list[i];
      }
      else if (navi_Button_list[i].textContent.indexOf("Problem List") !== -1) {
        var back_Button = navi_Button_list[i];
      }
      else if (navi_Button_list[i].textContent.indexOf("Next Problem") !== -1) {
        var next_Button = navi_Button_list[i];
      }
    }

    // input variables
    var submitVal = 0;
    var currentVal = 0;
    var counter = 0;

    // check webwork page
    // case: a limited question (summary doesn't contain "unlimited")
    if (score_summary.textContent.indexOf("unlimited") == -1 && ignore_attempts == 0) {
      if (webwork_mode == "multiple" && next_Button) next_Button.click();
      else {
        alert("Webwork question has limited attempts!");
        back_Button.click();
      }
    }
    // case: all already correct (summary contains "100%")
    else if (score_summary.textContent.indexOf("100%") !== -1 && ignore_100 == 0) {
      if (webwork_mode == "multiple" && next_Button) next_Button.click();
      else {
        alert("Webwork question already solved!");
      }
    }
    // case: page is in preview mode ()
    else if (output_body.getElementsByClassName("ResultsWithError")[0] && output_body.getElementsByClassName("ResultsWithError")[0].textContent.indexOf("PREVIEW ONLY") !== -1) {
      alert("Exiting preview mode");
      submit_Button.click();
    }
    else if (answers_list.length) {

    // check what solving mode it is
    // case: single solver
    if (solve_mode == "single") {
      currentVal = parseFloat(eval(input_list[(question_number - 1) * 2].value),10);
    // check if answer is correct
      // case: question still incorrect
      if (answers_list[question_number * 3 - 1].classList.contains("ResultsWithError") == true) {
    // check if answer input is currently null/undefined
        // case: click questions
        if (input_list[(question_number - 1)].type == "radio") {
          if(input_list[(question_number - 1)].hasAttribute("checked")) {
            input_list[(question_number - 1)].removeAttribute("checked");
            input_list[(question_number)].setAttribute("checked","");
          }
          else input_list[(question_number - 1)].setAttribute("checked","");
          submit_Button.click();
        }
        // case: previous input exists
        else if (currentVal < 0.0 | currentVal >= 0.0) {
          submitVal = currentVal + increment;
          input_list[(question_number - 1) * 2].value = submitVal;
          submit_Button.click();
        }
        // case: answer is undefined/null
        else {
          submitVal = 0.0;
          input_list[(question_number - 1) * 2].value = submitVal;
          submit_Button.click();
        }
      }
      // case: question correct
      else alert("Question is solved with value " + currentVal);
    }

    // case: multiple solver
    else if (solve_mode == "multiple") {
      alert("multiple solver is really stupid actually");
    }
    
    // case: uniform solver
    else if (solve_mode == "uniform") {
      let check_flag = 0;
      // for loop to fill in all questions
      for(counter = 1; counter <= parseInt(answers_list.length) / 3; counter++) {
        currentVal = parseFloat(eval(input_list[(counter - 1) * 2].value),10)
    // check if answer is correct
        // case: incorrect answer
        if (answers_list[counter * 3 - 1].classList.contains("ResultsWithError") == true) {
    // check if answer input is currently null/undefined
          // case: previous input exists
          if (currentVal < 0.0 | currentVal >= 0.0) {
            submitVal = currentVal + increment;
            input_list[(counter - 1) * 2].value = submitVal;
          }
          // case: answer is undefined/null
          else {
            submitVal = 0.0;
            input_list[(counter - 1) * 2].value = submitVal;
          }
        }
        // case: correct answer (add to flag and continue for loop)
        else check_flag++;
      }
      // if all correct,
      if (check_flag == parseInt(answers_list.length) / 3) {
        if (webwork_mode == "multiple" && next_Button) next_Button.click();
        else if (webwork_mode == "multiple") alert("All problems solved");
        else alert("Question has been solved!");
      }
      // if not all correct yet
      else submit_Button.click(); // submit all filled answers
    }
  }
  else {
      submit_Button.click();
  }
})();
