// let cars=['DAY','MONTH','YEAR']
// let carsfield=document.getElementById("n2");

// function optionSelect(){
//     //debugger
//     for(let i=0;i<3;i++){
//         let drop = cars[i];
//         let selectoption=document.createElement("option");
//         selectoption.textContent = drop;
//         carsfield.appendChild(selectoption);

//     }
// }
// optionSelect();




var table = document.getElementById("table"),rIndex;

for( var i=1; i<table.rows.length; i++){
    table.rows[i].onclick=function(){
       rIndex = this.rowIndex;
       console.log(rIndex);

       document.getElementById("fname").value= this.cells[1].innerHTML;
       document.getElementById("lname").value= this.cells[2].innerHTML;
       document.getElementById("country").value= this.cells[3].innerHTML;
       document.getElementById("mNumber").value= this.cells[4].innerHTML;
    };
}

function update(){
   table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
   table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
   table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
   table.rows[rIndex].cells[4].innerHTML = document.getElementById("mNumber").value;
}

function updatevalue(){

   document.querySelector('.editTable').setAttribute('style','display:block;')
}