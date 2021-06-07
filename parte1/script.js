function carregar() {

    var msg = window.document.getElementById('msg');

    var img = window.document.getElementById('imagem');

    var data = new Date();

    var hora = data.getHours();

    var minuto = data.getMinutes();

        msg.innerHTML = `${hora}:${minuto}`;
            if (hora > 0 && hora <6) {
                //BOA MADRUGADA!
                img.src = 'madrugada.png';
                window.document.getElementById('alter').style.backgroundColor = '#990e0e'
                    } else if  (hora >= 6 && hora < 12) {
                        // BOM DIA!
                        img.src = 'manha.png';
                        window.document.getElementById('alter').style.backgroundColor = '#ffcb63'
                        } else if (hora >= 12 && hora <18) {
                            // BOA TARDE! 
                            img.src = 'tarde.png';
                            window.document.getElementById('alter').style.backgroundColor = '#bffffc'
                            } else { (hora > 18 && hora <= 23)
                                // BOA NOITE!
                                img.src = 'noite.png';
                                window.document.getElementById('alter').style.backgroundColor = '#8f8f8f'}
}
