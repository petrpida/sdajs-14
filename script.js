const Kladno = "ab34567"

function postalcode(psc) {
    const pscArray = Array.from(psc);
    
    pscArray.forEach((element, i)  => {
        //console.log(element, i)
        if (i === 0 || i === 1) {
            if (element.match(/[a-zA-Z]/)) {
                console.log ("prvni dva znaky jsou OK");
            };
        } else {
            element.match(/[0-9]/);
        }
    });
}

postalcode(Kladno);