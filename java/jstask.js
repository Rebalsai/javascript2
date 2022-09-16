
function oper(){
	var num1=parseInt(document.getElementById("val5").value);
	var num2=parseInt(document.getElementById("val6").value);
   
	var oper=document.getElementById("operator").value;
	
	 if(oper==='+='){
	   document.getElementById("demo2").value=num1+=num2;
	 }
	 if(oper==='-='){
	   document.getElementById("demo2").value=num1-=num2;
	 }
	 if(oper==='*='){
	   document.getElementById("demo2").value=num1*=num2;
	 }
	 if(oper==='/='){
	   document.getElementById("demo2").value=num1/=num2;
	 }
	 if(oper==='%='){
	   document.getElementById("demo2").value=num1%=num2;
	 }
	 if(oper==='>'){
	   document.getElementById("demo2").value=num1>num2;
	 }
	 if(oper==='<'){
	   document.getElementById("demo2").value=num1<num2;
	 }
	 if(oper==='>='){
	   document.getElementById("demo2").value=num1>=num2;
	 }
	 if(oper==='=='){
	   document.getElementById("demo2").value=num1==num2;
	 }
	 if(oper==='!='){
	   document.getElementById("demo2").value=num1!=num2;
	 }
	 if(oper==='<='){
	   document.getElementById("demo2").value=num1<=num2;
	 } 
   }




   let myarr=[
    {name:"sai",age:22,id:1,mobile:9999999999},
    {name:"sugar",age:20,id:2,mobile:8888888888},
    {name:"subbu",age:27,id:3,mobile:6666666666},
    ]
function funcal(){     
    var html="<table border='1|1'>"
    setTimeout(()=>{
        html+='<thead >'
        html+='<tr>';        
        html+='<td>'+'name'+'</td>';
        html+='<td>'+'age'+'</td>';
        html+='<td>'+'id'+'</td>';
        html+='<td>'+'mobile'+'</td>';
        html+='</tr>';
        html+='</thead>'
        for(var i=0;i<myarr.length;i++){
            html+='<tr>';            
            html+='<td id="mll">'+myarr[i].name+'</td>';
            html+='<td>'+myarr[i].age+'</td>';
            html+='<td>'+myarr[i].id+'</td>';
            html+='<td>'+myarr[i].mobile+'</td>';
            html+='</tr>';
        }
        document.getElementById('table').innerHTML=html;
    },100);  
}
    
	//document.getElementById("c2").disabled = true;
    //document.getElementById("c3").disabled = true;   
function check(item){         
    let a=document.getElementById('t1').value; 
   // let b = document.getElementById("hide").value; 	
	let b=myarr[0].name;
	let c=myarr[1].name;
	let e=myarr[2].name;   
		if(a==b||a==c||a==e){
         //   if(a==b){
            document.getElementById("hide").hidden = false;
        // document.getElementById("c2").disabled = false;
        // document.getElementById("c3").disabled = false;
        document.getElementById("t3").value= "";
    }else {
        // document.getElementById("c2").disabled = true;
        // document.getElementById("c3").disabled = true; 
        document.getElementById("hide").hidden = true;
        document.getElementById("t3").value= "invalid";
	}  	
};

// function sliced(){ 
//     let a=document.getElementById('t1').value;
// 	let b=myarr[0].name;	
// 	let c=myarr[1].name;
// 	let e=myarr[2].name;
//      if(a==b){	
//        let h=myarr.splice(0, 1);	 
// 		document.getElementById('table').value=h;
// 		alert(h);
// 	 }else if(a==c){
// 		let h=myarr.splice(1,2);	 
// 		document.getElementById('table').value=h;
// 		alert(h) 
// 	 }else if(a==e){
// 		 let h=myarr.splice(2, 3);	 
// 		document.getElementById('table').value=h;
// 		alert(h)
// 	 }else {
// 		 document.getElementById('t3').value="Not Valid"
// 	 }
 
// };

function sliced(){
	let a=document.getElementById("t1").value;
	for(let i=0;i<myarr.length;i++){
           if(a===myarr[i].name){
			document.getElementById("mll").remove();
		   }else if(a!==myarr[0].name||a!==myarr[1].name||a!==myarr[2].name){
          document.getElementById("t3").value="invalid"
		   }
	}
}

function update(){
	//debugger
	let a=document.getElementById('t1').value;
	let b=document.getElementById('t2').value;
    if(a==myarr[0].name){		
	let c=b.replace(myarr[0].name)	
	//let h=document.getElementById('t1').value=c;
	//let i=myarr[0].name=c;	
	let j=document.getElementById('table').value=c;	
    document.getElementById('mll').innerHTML=j;	
	} 
	else if(a==myarr[1].name){
	let c=b.replace(myarr[1].name)	
	//let h=document.getElementById('t1').value=c;
	let i=myarr[1].name=c;	
	let j=document.getElementById('table').value=i;  
		 document.getElementById('mll').innerHTML=j	;   	
	
	}
	//  else if(a==myarr[2].name){
	// let c=b.replace(myarr[2].name)	
	// //let h=document.getElementById('t1').value=c;
	// let i=myarr[2].name=h;	
	// let j=document.getElementById('table').value=i;  
	// 	 document.getElementById('mll').innerHTML=j	;   	
	
	// }
	// let i=myarr[2].name;
	// let i = document.getElementById("t2").value=myarr[2].name;
	// document.getElementById("").value=i
	// funcal();

}
funcal();