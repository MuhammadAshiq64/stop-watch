
// Here let time in a variable
let sec = 0;
let minute = 0;
let hrs = 0;


function strt() {
    document.getElementById("startbtn").disabled = true;
    document.getElementById("rest").disabled = false;
    
    function whole() {
        sec++;
        

        // Here add a 0 when it less then 10 sec
        if (Number(sec) < 10) {
            sec = "0" + Number(sec);
        }
        // Here add a 0 when it less then 10 minutes
        if (Number(minute) < 10) {
            minute = "0" + Number(minute);
        }
        // Here add a 0 when it less then 10 hours
        if (Number(hrs) < 10) {
            hrs = "0" + Number(hrs);
        }




        // Here minute  genrating
        if (sec == '60') {
            sec = 0;
            minute++
        }

        // Here hours  genrating     
        if (minute == '60') {
            minute = 0;
            hrs++
        }

        // Here set time in span's id

        if (document.getElementById('seconds').innerHTML = '00') {
            document.getElementById('seconds').innerHTML = sec;

        }

        document.getElementById('mint').innerHTML = minute;
        document.getElementById('hours').innerHTML = hrs;
    }


    myInterval = setInterval(whole, 1000);
}


function reset() {

    
    if (document.getElementById('seconds').innerHTML = sec) {
        document.getElementById('seconds').innerHTML = '00';
    }
    if (document.getElementById('hours').innerHTML = hrs) {
        document.getElementById('hours').innerHTML = '00';
    }
    if (document.getElementById('mint').innerHTML = mint) {
        document.getElementById('mint').innerHTML = '00';
        clearInterval(myInterval);
        sec = 0;
        minute = 0;
        hrs = 0;
        document.getElementById("startbtn").disabled = false;

        if (Number(sec) < 10) {
            sec = "0" + Number(sec);
        }

        if (Number(minute) < 10) {
            minute = "0" + Number(minute);
        }

        if (Number(hrs) < 10) {
            hrs = "0" + Number(hrs);
        }


    }
}

function stop() {
    clearInterval(myInterval);
    var newsec = sec;
    var newmint = minute;
    var newhrs = hrs;
    document.getElementById('hours').innerHTML = newhrs;
    document.getElementById('mint').innerHTML = newmint;
    document.getElementById('seconds').innerHTML = newsec;
    document.getElementById("startbtn").disabled = false;
    if (Number(sec) < 10) {
        sec = "0" + Number(sec);
    }

    if (Number(minute) < 10) {
        minute = "0" + Number(minute);
    }

    if (Number(hrs) < 10) {
        hrs = "0" + Number(hrs);
    }
    

}
