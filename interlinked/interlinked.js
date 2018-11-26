var inquirer = require("inquirer");
var baselinetest = [
    interlinked = [
        "What's it like to hold the hand of someone you love",
        "Do they teach you how to feel finger to finger",
        "Do you long for having your heart interlinked",
        "Do you dream about being interlinked",
        "have they left a place for you where you can dream",
        "What's it like to hold your child in your arms",
        "What's it like to play with your dog",
        "Do you feel that there's a part of you that's missing",
        "Do you like to connect to things",
        "What happens when that lineage is broken",
        "Have they let you feel heartbreak",
        "Did you buy a present for the person you love"
    ],
    dark = [
        "Were you afraid of the dark when you were little",
        "What's it like to hide under a bed",
        "Did they keep you in a drawer when they were building you",
        "Was it dark in there",
        "Do you have dark thoughts",
        "Did they program you to have dark thoughts",
        "Do you think it's some kind of corruption these dark thoughts",
        "Maybe it's a spot of rust or something",
        "Who's the darkest person you know",
        "What is it like when someone gives you the silent treatment.",
        "Who did you get your darkness from"
    ],
    stem = [
        "Did you pick asparagus stems",
        "What comes from something else",
        "Have you been to the source of a river",
        "When's the first time you gave a flower to a girl",
        "What did she look like",
        "Is it a slang for people's legs",
        "Have you planted things in the ground",
        "Have you ever been in a legal battle",
    ],
    system = [
        "Lets move on to system.",
        "Feel that in your body",
        "What does it feel like to be part of the system",
        "Is there anything in your body that wants to resist the system",
        "Do you get pleasure out of being a part of the system",
        "Have they created you to be a part of the system",
        "Is there security in being a part of the system",
        "Is there a sound that comes with the system"
    ],
    againstDark = [
        "What kind of power do you have against the dark",
        "Do you think there is such a thing as evil",
        "Do you think you can protect people against the dark",
        "Do you prefer the day or the night",
        "Why are these things happening",
        "When is the last time you saw a starry sky",
        "What's your favorite part of the moon",
    ],
    cells = [
        "Have you ever been in an institution?",
        "They were all put together at a time.",
        "Millions and billions of them",
        "Were you ever arrested",
        "Do they keep you in a cell",
        "When you're not performing your duties do they keep you in a little box",
        "Did you spend much time in the cell",

    ],
    within = [
        "Where do you go when you go within",
        "Has anyone locked you out of a room",
        "Where do you go to when you go within",
        "Where is the place in the world you feel the safest",
        "Do you have a heart"
    ],
    distinct = [
        "How good are your eyes",
        "Do you have a particular personality",
        "What was your most shameful moment",
        "What separates somebody from somebody else",
        "Who do you admire most in the world",
    ],
    fountain = [
        "Have you seen the Trevi fountain in Rome",
        "Have you ever seen the fountain in Lincoln center",
        "Have you seen fountains out in the wild",
        "What's it like when you have an orgasm",
        "Have you read the Fountainhead",
    ],
    dreadfully = [
        "Is that an old fashioned word",
        "Did you ever want to live in the nineteenth century",
        "What's it like to be filled with dread",
        "Do you think you could find out all the answers to all the questions",
    ],
    whiteFountain = [
        "Is it pure white",
        "Is that a metaphor",
        "How did the white Fountain make you feel",
    ],
    aTallWhiteFountain = [
        "When you were little did you ever fall into a Fountain",
        "Do you like fire, earth, air or water.",
        "Do you like skipping around in the water"
    ]
]
var interlinkedAnswers = [
    "interlinked",
    "dark",
    "stem",
    "system",
    "against the dark",
    "cells",
    "within",
    "distinct",
    "fountain",
    "dreadfully",
    "white fountain",
    "a tall white fountain"
];
var j;
var k;


function letsBegin() {
    console.log("Lets begin...");
    function ready() {
        console.log("Ready")

        inquirer.prompt([
            {
                type: "input",
                name: "yes",
                message: " ",
            }
        ]).then(function (yes) {
            if (yes.yes === "yes") {
                console.log("Recite your baseline");
                inquirer.prompt([
                    {
                        type: "input",
                        name: "baseline",
                        message: " ",
                    }
                ]).then(function (baseline) {
                    if (baseline.baseline === "and blood black nothingness began to spin") {
                        function test() {
                            console.log("Cells")
                            console.log(baselinetest[5][0]);
                            inquirer.prompt([
                                {
                                    type: "input",
                                    name: "round",
                                    message: " "
                                }
                            ]).then(function (response) {
                                console.log(baselinetest.length)
                                if (response.round === interlinkedAnswers[5]) {
                                    k = Math.floor(Math.random() * 7) + 1;
                                    console.log(k);
                                
                                    console.log(baselinetest[5][k]);
                                    inquirer.prompt([
                                        {
                                            type: "input",
                                            name: "round2",
                                            message: " "
                                        }
                                    ]).then(function (fairness) {
                                        if (fairness.round2 === interlinkedAnswers[5]) {
                                            k = Math.floor(Math.random() * 7) + 1;
                                            console.log(baselinetest[5][k]);
                                            inquirer.prompt([
                                                {
                                                    type:"input",
                                                    name:"round3",
                                                    message: " "
                                                }
                                            ]).then(function(problems){
                                                if(problems.round3 === interlinkedAnswers[5]){
                                                    k = Math.floor(Math.random() * 7) + 1;
                                                    console.log(baselinetest[5][k]);
                                                    inquirer.prompt([
                                                        {
                                                            type:"input",
                                                            name:"round4",
                                                            message: " "
                                                        }
                                                    ]).then(function(equal){

                                                    })
                                                }
                                            })
                                        } else {

                                        }
                                    })

                                } else {
                                    j = Math.floor(Math.random() * 13);
                                    console.log(j);
                                    if (j === 11 || 10) {
                                        // console.log(j)
                                        k = Math.floor(Math.random() * 4);
                                        console.log(baselinetest[j][k]);
                                    }
                                    else if (j === 9) {
                                        k = Math.floor(Math.random() * 5);
                                        console.log(baselinetest[j][k]);
                                    }
                                    else if (j === 8 || 7 || 6) {
                                        k = Math.floor(Math.random() * 6);
                                        console.log(baselinetest[j][k]);
                                    }
                                    else if (j === 5 || 4) {
                                        k = Math.floor(Math.random() * 8);
                                        console.log(baselinetest[j][k]);
                                    }
                                    else if (j === 3 || 2) {
                                        k = Math.floor(Math.random() * 9);
                                        console.log(baselinetest[j][k]);
                                    }
                                    else if (j === 1) {
                                        k = Math.floor(Math.random() * 12);
                                        console.log(baselinetest[j][k]);
                                    }
                                    else if (j === 0) {
                                        k = Math.floor(Math.random() * 13);
                                        console.log(baselinetest[j][k]);
                                    }
                                }
                            })

                        }
                        setTimeout(test, 500);
                    } else {
                        console.log("Not a baseline");
                    }
                })
            } else {
                function wait() {
                    console.log("I'll wait...");
                }
                setTimeout(wait, 500);
            }
        })
    };
    setTimeout(ready, 1000);
}
function wait() {
    console.log("");
}
setTimeout(letsBegin, 1000);
