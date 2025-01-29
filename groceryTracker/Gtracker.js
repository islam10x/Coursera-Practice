let length;
let width;
function calculatetotal() {
    g1 = parseFloat(document.getElementById('a1').value);
    g2 = parseFloat(document.getElementById('a2').value);
    g3 = parseFloat(document.getElementById('a3').value);
    let total = g1+g2+g3
    document.getElementById('result').innerText = `The Total Amount is: ${total}`;
}