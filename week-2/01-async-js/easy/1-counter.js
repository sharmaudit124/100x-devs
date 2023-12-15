let counter = 0;

function printCounter(){
    console.log(counter++);
}

setInterval(printCounter,1000);