

function f2() {
    var x = document.getElementById("Date").value;
    if (x > '2000-01-01') {
        alert('you are under age');
    } else if (x === '') {
        alert('please put in your age...');
    }
     else {
        alert('you are one of us');
    }
}