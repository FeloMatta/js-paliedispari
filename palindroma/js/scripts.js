function checkPalindroma(parola) { 

    let parolaInversa = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        console.log(parola[i]);
        parolaInversa = parolaInversa + parola[i];
    }

    console.log(parolaInversa);

    if(parola == parolaInversa) {
        return true;
    }
    else{
        return false;
    }

}

const parolaUtente = prompt('Inserisci una parola');
console.log('parolaUtente', parolaUtente);
console.log('parolaUtente[2]', parolaUtente[2]);

const risultato = checkPalindroma(parolaUtente);
console.log('risultato', risultato, typeof risultato);
if ( risultato == true ) {

    console.log('La parola e palindroma come ONORARONO');

}
else {

    console.log('La parola NON e palindroma');

}