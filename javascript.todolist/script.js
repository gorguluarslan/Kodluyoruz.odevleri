var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector(`ul`);
list.addEventListener(`click`, function(ev) {
    if (ev.target.tagName === `LI`) {
        ev.target.classList.toggle(`checked`);
    }
} , false);

span.addEventListener('click', function(){
    span.style.textDecoration = 'line-through';
})

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert ("Boş ekleme yapamazsınız.");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}