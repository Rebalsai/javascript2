// function App(){
// 	let a=document.getElementById('d1').value;
// 	let b=document.getElementById('d2').value;
// 	let total=document.getElementById('operators').value;
// 	if(total=='-'){
// 		let c=document.getElementById('result1').value=(parseInt(a)-parseInt(b));	
// 		document.getElementById.value=c;		
// 	}else if(total=='+'){
// 		let c=document.getElementById('result1').value=(parseInt(a)+parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='*'){
// 		let c=document.getElementById('result1').value=(parseInt(a)*parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='/'){
// 		let c=document.getElementById('result1').value=(parseInt(a)/parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='<'){
// 		let c=document.getElementById('result1').value=(parseInt(a)<parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='>'){
// 		let c=document.getElementById('result1').value=(parseInt(a)>parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='>='){
// 		let c=document.getElementById('result1').value=(parseInt(a)>=parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='<='){
// 		let c=document.getElementById('result1').value=(parseInt(a)<=parseInt(b));	
// 		document.getElementById.value=c;
// 	}
// 	else if(total=='=='){
// 		let c=document.getElementById('result1').value=(parseInt(a)==parseInt(b));	
// 		document.getElementById.value=c;
// 	}else if(total=='==='){
// 		let c=document.getElementById('result1').value=(parseInt(a)===parseInt(b));	
// 		document.getElementById.value=c;
// 	}	
// }



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