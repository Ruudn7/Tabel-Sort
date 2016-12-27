(function () {
    


var tab = document.querySelector("#myTable"),
    ths = tab.querySelectorAll("thead th"),
    trs = tab.querySelectorAll("tbody tr"),
    lengthT = trs.length;
    console.log(lengthT);
    console.log(trs);
    console.log(trs[1]);

    for(i=0;i<=lengthT ;i++){
        if( i % 2 == 0){
            trs[i].classList.add("color1"); //Michał, tu jest błąd ponieważ nie znajduje za pierwszym czytaniem klasy w HTML?
        } else {
            trs[i].classList.add("color2"); 
        }

    }



})();