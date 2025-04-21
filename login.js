let min_password = 6;

function min_password_checker(x){
    if( min_password >= 6){
        return "The password is strong"
    }return false;
}
let lastChecker = min_password_checker(7);
console.log(lastChecker);
