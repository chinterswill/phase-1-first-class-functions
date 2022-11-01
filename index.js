function callMe() {
    console.log('I am callback function');
}

receivesAFunction('Kamran', callMe);



function receivesAFunction(name, callMe) {
    console.log( 'Hi' + '' + name);
    callMe();
}






function returnsANamedFunction() {

}

function returnsAnAnonymousFunction() {

}