let pies1 = document.getElementById("pies1");
let pies2 = document.getElementById("pies2");
let pies3 = document.getElementById("pies3");
let kot = document.getElementById("kot");
let p = document.getElementById("p");

    pies1.addEventListener("mouseover", function (zmiana){
            pies1.src= 'pies1-odbicie.jpg';
        }
        );
    pies2.addEventListener("mouseover", function (zmiana2){
            pies2.src= 'pies2-odbicie.jpg';
        }
        );
    pies3.addEventListener("mouseover", function (zmiana3){
            pies3.src= 'pies3-odbicie.jpg';
        }
        );
       

    pies1.addEventListener("mouseout", function (back){
            pies1.src= 'pies1.jpg';
        }
        );
    pies2.addEventListener("mouseout", function (back2){
            pies2.src= 'pies2.jpg';
        }
        );
    pies3.addEventListener("mouseout", function (back3){
            pies3.src= 'pies3.jpg';
        }
        );
   

        pies1.addEventListener("click", function (click){
            pies1.src = 'pies1.jpg';
            p.src= 'pies1.jpg';
        }
        );
        pies2.addEventListener("click", function (click2){
            pies2.src = 'pies2.jpg';
            p.src= 'pies2.jpg';
        }
        );
        pies3.addEventListener("click", function (click3){
            pies3.src = 'pies3.jpg';
            p.src= 'pies3.jpg';
        }
        );
 