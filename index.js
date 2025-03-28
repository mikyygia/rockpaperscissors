/*
rock = 0
scissors = 1
paper = 2
*/

let user_choice;
let user_points = 0;
let comp_points = 0;

let choice_icons = ["./images/rock.svg", "./images/paperclip.svg", "./images/scissors.svg"];

function rock() {
    user_choice = 0;
    document.getElementById("user-choice-icon").src = choice_icons[0];
    document.getElementById("user-choice-icon").style.opacity = 1;
    decide_winner();
}

function paper() {
    user_choice = 1;
    document.getElementById("user-choice-icon").src = choice_icons[1];
    document.getElementById("user-choice-icon").style.opacity = 1;
    decide_winner();
}

function scissors() {
    user_choice = 2;
    document.getElementById("user-choice-icon").src = choice_icons[2];
    document.getElementById("user-choice-icon").style.opacity = 1;;
    decide_winner();
}

function decide_winner() {
    let comp_choice = Math.floor(Math.random() * 3);
    document.getElementById("comp-choice-icon").src = choice_icons[comp_choice];
    document.getElementById("comp-choice-icon").style.opacity = 1;;

    if (user_choice == comp_choice) {
        document.getElementById("results-text").innerText = "It's a draw!"
    } else if (user_choice == 0 && comp_choice == 1) {
        document.getElementById("results-text").innerText = "Computer wins!"
        add_points(1);
    } else if (user_choice == 0 && comp_choice == 2) {
        document.getElementById("results-text").innerText = "You win!"
        add_points(0);
    } else if (user_choice == 1 && comp_choice == 0) {
        document.getElementById("results-text").innerText = "You win!"
        add_points(0);
    } else if (user_choice == 1 && comp_choice == 2) {
        document.getElementById("results-text").innerText = "Computer wins!"
        add_points(1);
    } else if (user_choice == 2 && comp_choice == 0) {
        document.getElementById("results-text").innerText = "Computer wins!"
        add_points(1);
    } else if (user_choice == 2 && comp_choice == 1) {
        document.getElementById("results-text").innerText = "You win!"
        add_points(0);
    } else {
        document.getElementById("results-text").innerText = "Um error whoops! Have an extra point!"
        add_points(0);
    }
}

function add_points(winner) {
    document.getElementById("results-text").style.display = "inline-block";

    if (winner == 0) {
        user_points++;
        document.getElementById("you-points").innerText = user_points;
    } else {
        comp_points++;
        document.getElementById("comp-points").innerText = comp_points;
    }
}

function reset_game() {
    user_points = 0;
    comp_points = 0;

    document.getElementById("you-points").innerText = user_points;
    document.getElementById("comp-points").innerText = comp_points;

    document.getElementById("user-choice-icon").src = "./images/hand.png";
    document.getElementById("comp-choice-icon").src = "./images/hand.png";

    document.getElementById("user-choice-icon").style.opacity = 0.5;
    document.getElementById("comp-choice-icon").style.opacity = 0.5;

    document.getElementById("results-text").style.display = "none";
}
