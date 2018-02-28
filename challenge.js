

function f2() {
    var x = document.getElementById("Date").value;
    console.log(x);
    if (x > '2000-01-01') {
        alert('you are under age');
    } else {
        alert('you are one of us');
    }
}