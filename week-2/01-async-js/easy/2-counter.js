let counter = 0;

function printCounter(){
    console.log(counter++);

    setTimeout(printCounter,1000);
}

printCounter();