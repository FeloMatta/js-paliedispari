const sceltaUtente = prompt('Inserisci P per pari, o D per dispari');

if(sceltaUtente !=  'P' && sceltaUtente != 'D'){
    alert('Valore non valido');
}
else{
    const numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));

    if(isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5){
        alert('Valore non valido');
    }
    else{

        const numeroComputer = generaNumeroCasuale(1, 5);
        console.log('numeroComputer', numeroComputer);

        const somma = numeroUtente + numeroComputer;
        console.log('somma', somma);

        const risultato = verificaSomma(somma);
        console.log('risultato', risultato);

        if(sceltaUtente == risultato){
            alert('Hai vinto!');
        }
        else{
            alert('Hai perso...')
        }

    }

}

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verificaSomma(somma) {

    if(somma % 2 == 0){
        return 'P';
    }
    else{
        return 'D';
    }

}