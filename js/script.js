(function () {
    


var tab = document.querySelector("#myTable"),
    ths = tab.querySelectorAll("thead th"),
    trs = tab.querySelectorAll("tbody tr");
    


    
    console.log(ths);
    console.log(trs[1]);

    for(i=0; i < trs.length ; i++){
        if( i % 2 == 0){
            trs[i].classList.add("color1"); //Michał, tu jest błąd ponieważ nie znajduje za pierwszym czytaniem klasy w HTML?
        } else {
            trs[i].classList.add("color2"); 
        }

    }


    function sortBy() {

        console.log("sortuję");

    }

    for(var j = 0; j < ths.length; j++) {

        ths[j].onclick = sortBy;

    }

})();