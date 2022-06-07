/*
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' 
if the two strings are the same and 'You disagree!' if the two strings are different. 


*/

const agreeOrDisagree = (vote1, vote2) => {
    if (vote1 === vote2) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}


console.log(agreeOrDisagree("yep", "yep")) 