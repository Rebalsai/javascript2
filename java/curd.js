// function onFormSubmit(){
//     var formData = readFormData();
//     addNewRow(formData);
// }

// function readFormData(){
//     var formData={};
//     formData["fname"] = document.getElementById("fname").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["age"] = document.getElementById("age").value;
//     formData["pnumber"] = document.getElementById("pnumber").value;
//     formData["slct1"] = document.getElementById("slct1").value;
//     formData["slct2"] = document.getElementById("slct2").value;
//     formData["web"] = document.getElementById("web").value;
// }

// function addNewRow(data){
//     var table = document.getElementById("table").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);

//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.fname;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.email;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.age;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.pnumber;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.slct1;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.slct2;
//     cell7 = newRow.insertCell(6);
//     cell7.innerHTML = data.web;
// }

//=================

 document.getElementById("tablehide").hidden = true;

var selectedRow = null;
//global variable
 var rIndex,
      table = document.getElementById("table");


function addHtmlTableRow(){
    //debugger
    
    // document.getElementById("formhide").hidden = true;
    document.getElementById("tablehide").style.display = "block"; 
      
    
    // const indiaRegex = /^\+91\d{10}$/;
    // const inputText = document.getElementsByTagName("email")[3].value;
    // if(inputText.match(indiaRegex)) {
    //  errorName=true;
    //   //alert("Valid phone number");
    //   document.getElementById("name4").innerHTML = "";
    //   document.getElementById("name4").style.color="red"
         
    // } else {
    //  document.getElementById("name4").innerHTML="Not a valid Phone Number"; 
    //  return false;
    // }


   var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var pnumber = document.getElementById("pnumber").value;
    var country = document.getElementById("slct1").value;
    var web = document.getElementById("web").value;

    if(fname == ""){
        document.getElementById("name2").innerHTML="**please enter the name";
      
    }
    if((fname.length < 3) || (fname.length > 20)){
        document.getElementById("name2").innerHTML="**please enter the name between 3 to 20 ";
        
    }
    if(!isNaN(fname)){
        document.getElementById("name2").innerHTML="**please enter charecters ";
       
    }
        if(email == ""){
        document.getElementById("name3").innerHTML="**please enter the valid Email";
        
    }
   
    if(age == ""){
      document.getElementById("name4").innerHTML="**please enter the age";
        
    }
    if(pnumber == ""){
        document.getElementById("name5").innerHTML="**please enter the phonenumber";
         
    }

   if(country == ""){
    document.getElementById("name6").innerHTML="**please select the country";
    
  }
  if(web == ""){
    document.getElementById("name7").innerHTML="**please enter the valid Url";
      
  }
    
    
    var  newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    cell7 = newRow.insertCell(6),
   
   


    fname = document.getElementById("fname").value,
    email = document.getElementById("email").value,
   age = document.getElementById("age").value;
    let years = new Date(new Date() - new Date(age)).getFullYear() - 1970;
    pnumber = document.getElementById("pnumber").value;
    country = document.getElementById("slct1").value;
   state = document.getElementById("slct2").value;
   web = document.getElementById("web").value;
    

    cell1.innerHTML = fname;
    cell2.innerHTML = email;
    cell3.innerHTML = years;
    cell4.innerHTML = pnumber;
    cell5.innerHTML = country;
    cell6.innerHTML = state;
    cell7.innerHTML = web;
   
    
    selectedRow();
     resetForm();
     checkBlock();
     
}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("pnumber").value = "";
    document.getElementById("slct1").value = "";
    document.getElementById("slct2").value = "";
    document.getElementById("web").value = "";

}


// function addShow(){
//     document.getElementById("tablehide").hidden = true;
//     document.getElementById("formhide").hidden =false;
// }


function selectedRow(){
    // var rIndex,table = document.getElementById("table");
    // document.getElementById("formhide").hidden = true;
    // document.getElementById("tablehide").hidden = false; 
    for(var i=1; i<table.rows.length; i++){
        table.rows[i].onclick = function()
        {
             rIndex = this.rowIndex;
            //  console.log(rIndex);
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("email").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("pnumber").value = this.cells[3].innerHTML;
            document.getElementById("slct1").value = this.cells[4].innerHTML;
            document.getElementById("slct2").value = this.cells[5].innerHTML;
            document.getElementById("web").value = this.cells[6].innerHTML;
        };

    }

}
//selectedRow();

function editRow(){
 //debugger
    // document.getElementById("formhide").hidden = false;
    // document.getElementById("tablehide").hidden = true; 

    var fname = document.getElementById("fname").value,
    email = document.getElementById("email").value,
    age = document.getElementById("age").value,
    pnumber = document.getElementById("pnumber").value,
    slct1 = document.getElementById("slct1").value,
    slct2 = document.getElementById("slct2").value,
    web = document.getElementById("web").value;

    table.rows[rIndex].cells[0].innerHTML=fname;
    table.rows[rIndex].cells[1].innerHTML=email;
    table.rows[rIndex].cells[2].innerHTML=age;
    table.rows[rIndex].cells[3].innerHTML=pnumber;
    table.rows[rIndex].cells[4].innerHTML=slct1;
    table.rows[rIndex].cells[5].innerHTML=slct2;
    table.rows[rIndex].cells[6].innerHTML=web;
}

function removeRow(){
   // debugger
    table.deleteRow(rIndex);

    document.getElementById("fname").value="";
    document.getElementById("email").value="";
    document.getElementById("age").value="";
    document.getElementById("pnumber").value="";
    document.getElementById("slct1").value="";
    document.getElementById("slct2").value="";
    document.getElementById("web").value="";
}

function checkBlock(){
   var fname = document.getElementById("fname").value;
   var email = document.getElementById("email").value;
   var age = document.getElementById("age").value;
   var pnumber = document.getElementById("pnumber").value;
   var slct1 = document.getElementById("slct1").value;
   var slct2 = document.getElementById("slct2").value;
   var web = document.getElementById("web").value;

   if(fname =="" && email =="" && age =="" && pnumber =="" && slct1 =="" && slct2 =="" && web =="")
   {

    document.getElementById("tablehide").style.display="block";

   }
}
