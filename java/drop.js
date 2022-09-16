// var list =["Day","Month","Year"]
// var option = "";
//           for(var i=0; i<list.length; i++){
//             option+= '<option value="'+ list[i] +'">' + list[i] + "</option>"
//         }
//            document.getElementById("n2").innerHTML = option;


// let cars=['DAY','MONTH','YEAR']
// let carsfield=document.getElementById("n2");

// function carsSelect(){
//     //debugger
//     for(let i=0;i<3;i++){
//         let carss = cars[i];
//         let selectoption=document.createElement("option");
//         selectoption.textContent = carss;
//         carsfield.appendChild(selectoption);

//     }
// }
//  carsSelect();
const Drop = ["Day", "Month", "Year"]
for (let i = 0; i < Drop.length; i++) {
  let opt = document.createElement("option");
  document.getElementById('n2').innerHTML += '<option id="' + i + '">' + Drop[i] + '</option>';

}





//  function App(){
// document.write("30-07-2022");
// let a = document.getElementById("n1").value;
// let b = document.getElementById("n3").value;

// let c = a-b;
// document.getElementById("n4").innerHTML=c;
//  alert(c);
// document.write(c)
//  }



// function App(){
//   debugger    
//       let a=document.getElementById('n1').value;
//       let b=document.getElementById('n3').value;
//       let c=document.getElementById('n2').value;
//       //const d= new Date()//.getDate('n1');
//       //const d = new Date();
//     //   d.setDate(d.getDate() + 5);    
//     let d = new Date(a)
//     let e = d.getDate('n1')
//          alert(e);

//   }
// App();



function future() {
   debugger
  let a = document.getElementById('n1').value;
  let d = new Date(a);
  let c = document.getElementById('n3').value;
  //let f= d.toString(d.setDate(d.getDate()+c));
  //let f=d.setDate(d.getDate() +c);

  let option = document.getElementById('n2').value;
  if (option === "Day") {
    let b = document.getElementById('n2').value;
    let f = d.getDate();
    let g = d.getMonth() + 1;
    let h = d.getFullYear();
    let e = parseInt(f) + parseInt(c) + "/" + g + "/" + h;
    //  alert(e)
    //console.log(option)
    document.getElementById("n4").value = e;
  } else if (option === "Month") {
    let j = document.getElementById('n2').value;
    let f = d.getDate();
    let g = d.getMonth() + 1;
    let h = d.getFullYear();
    let e = f + "/" + (parseInt(g) + parseInt(c)) + "/" + h;
    //  alert(e)      
    //onsole.log(option);
    document.getElementById("n4").value = e;
  } else if (option === "Year") {
    let k = document.getElementById('n2').value;
    let f = d.getDate();
    let g = d.getMonth() + 1;
    let h = d.getFullYear();
    let e = f + "/" + g + "/" + (parseInt(h) + parseInt(c));
    //  alert(e)   
    document.getElementById("n4").value = e;

  }
}
//  future();

function past() {
  //debugger
  let a = document.getElementById('n1').value;
  let d = new Date(a);
  let c = document.getElementById('n3').value;
  //let f= d.toString(d.setDate(d.getDate()+c));
  //let f=d.setDate(d.getDate() +c);

  let option = document.getElementById('n2').value;
  if (option === "Day") {
    let b = document.getElementById('n2').value;
    let f = d.getDate();
    let g = d.getMonth() + 1;
    let h = d.getFullYear();
    let e = parseInt(f) - parseInt(c) + "/" + g + "/" + h;
    //  alert(e)
    //console.log(option)
    document.getElementById("n4").value = e;
  } else if (option === "Month") {
    let j = document.getElementById('n2').value;
    let f = d.getDate();
    let g = d.getMonth() + 1;
    let h = d.getFullYear();
    let e = f + "/" + (parseInt(g) - parseInt(c)) + "/" + h;
    //  alert(e)      
    //onsole.log(option);
    document.getElementById("n4").value = e;
  } else if (option === "Year") {
    let k = document.getElementById('n2').value;
    let f = d.getDate();
    let g = d.getMonth() + 1;
    let h = d.getFullYear();
    let e = f + "/" + g + "/" + (parseInt(h) - parseInt(c));
    //  alert(e)   
    document.getElementById("n4").value = e;

  }
}
        // past();
