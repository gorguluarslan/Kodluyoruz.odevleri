function name() {
    var name = prompt("Adınızı Giriniz");
    document.getElementById("myName").innerHTML = name;
}
function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = date.getDay();

    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    var dayName = days[day]

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second + " " + dayName;
    document.getElementById("myClock").innerHTML = time;
    

    setTimeout(showTime, 1000);
}

name();
showTime();