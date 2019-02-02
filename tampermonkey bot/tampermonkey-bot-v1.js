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

    // Your code here...
    var start = 0;
    var increment = 1;
    var end = 10;
    var question_number = 1;

    var submitButton = document.getElementById('submitAnswers_id');
    var previewButton = document.getElementById('previewAnswers_id')
    var checkButton = document.getElementById('checkAnswers_id')
    // var currentValue = document.getElementById('AnSwEr000' + question_number);

    var parental = document.getElementById("output_summary");
    var check = parental.getElementsByClassName("ResultsWithoutError");
    var checkFalse = parental.getElementsByClassName("ResultsWithError");

    var checklength = parseInt(check.length) / 2;
    var checkFalselength = parseInt(checkFalse.length) / 2;

    var number_of_questions = parseInt(checklength) + parseInt(checkFalselength);

    let counter = 0;

    // alert("current value is " + currentValue.value);
    // alert("number of qs: " + number_of_questions);
    // alert("number of corrects: " + parseInt(checklength));


    if(check.length !== null && check.Falselength !== null) {
        // check if it is first attempt.

        var currentValue = document.getElementById('AnSwEr000' + question_number);
        if( currentValue.value <= end ) {
            // check to see if test values have reached the end

            if(checklength < 1 && number_of_questions >= 1) {
                // checks for every input, checks if got it correct
                counter = parseFloat(currentValue.value,10);
                // alert("current value is " + currentValue.value);
                // alert("counter is " + counter);
                counter += increment;
                currentValue.value = counter;
                // alert("current value is " + currentValue.value);
                submitButton.click();
            }
            else if(checklength < 2 && number_of_questions >= 2){
                // console.log('Question 1 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 3 && number_of_questions >= 3) {
                question_number += 1;
                // console.log('Question 2 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 4 && number_of_questions >= 4) {
                question_number += 2;
                // console.log('Question 3 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 5 && number_of_questions >= 5) {
                question_number += 3;
                // console.log('Question 4 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 6 && number_of_questions >= 6) {
                question_number += 4;
                // console.log('Question 5 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 7 && number_of_questions >= 7){
                question_number += 5;
                // console.log('Question 6 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 8 && number_of_questions >= 8) {
                question_number += 6;
                // console.log('Question 7 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 9 && number_of_questions >= 9) {
                question_number += 7;
                // console.log('Question 8 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 10 && number_of_questions >= 10) {
                question_number += 8;
                // console.log('Question 9 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 11 && number_of_questions >= 11) {
                question_number += 9;
                // console.log('Question 10 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength < 12 && number_of_questions >= 12) {
                question_number += 10;
                // console.log('Question 11 found, it is ' + currentValue.value);
                question_number += 1;
                currentValue = document.getElementById('AnSwEr000' + question_number);
                counter = parseFloat(currentValue.value,10);
                counter += increment;
                currentValue.value = counter;
                submitButton.click();
            }
            else if(checklength == 12 ) {
                question_number += 11;
                // console.log('Question 12 found, it is ' + currentValue.value);
                if( number_of_questions > 12) {
                    alert('more than 12 questions exist')
                }
                else {
                    alert('done webwork question');
                }
            }
            else {
                alert('done webwork question');
            }
        }
        else {
            alert("Reached end of test values!");
        }
    }
    else {
        counter = 0;
        currentValue.value = counter;
        submitButton.click();
    }

})();
