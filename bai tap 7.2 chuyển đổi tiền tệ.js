

function ketQua() {
    let tiente1 = document.getElementById('tiente1').value;
    let tiente2 = document.getElementById('tiente2').value;
    let amount = document.getElementById('amount').value;
    let a = 0;
    if(tiente1 == 'VND' && tiente2 == 'USD' ) {
       a = amount/24000;
    } else if(tiente1 == 'USD' && tiente2 == 'VND'){
        a = amount*24000;
    } else if( tiente1 == tiente2){
       a = amount;
    }
   document.getElementById('result').innerHTML = 'Result: ' +a ;
}
