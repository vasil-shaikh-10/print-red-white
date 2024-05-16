function loop1(){
    let n = parseInt(document.getElementById('num').value);
    let msg = "";

    let i;
    for(let i=1;i<=n;i++) {
        msg += "red and white";
        msg +="<br>"
    }
    document.getElementById('inp').innerHTML = msg;
}