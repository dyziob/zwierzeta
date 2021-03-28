let kot = document.getElementById("kot");
let p = document.getElementById("p");


    kot.addEventListener("mouseover", function (zmiana4){
        kot.src= 'kot1-odbicie.jpg';
    }
    );

    kot.addEventListener("mouseout", function (back4){
        kot.src= 'kot1.jpg';
    }
    );

    kot.addEventListener("click", function (click4){
        kot.src = 'kot1.jpg';
        p.src= 'kot1.jpg';
    }
    );