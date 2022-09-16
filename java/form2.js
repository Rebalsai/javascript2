// function radio(){
//     let value=document.querySelector('input[name="gender"]:checked').value;
//     let value1=document.querySelector('input[name="gender1"]:checked').value;

// document.getElementById("gen").value=(value,value1);
// }

function radio(){
    var rdb1 = document.getElementById("gen");
    var rdb2 = document.getElementById("gen1");
    if(rdb1.checked==true){
        // document.write(rdb1.value);
        document.getElementById("a1").innerHTML=rdb1.value;
    }
    else if(rdb2.checked==true){
        // document.write(rdb2.value);
        document.getElementById("a1").innerHTML=rdb2.value;
    }
    else{
        // document.write("please select one record")
    }
}