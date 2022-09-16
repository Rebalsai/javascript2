// [{Name:"sai",
// progress:[
//     {Subject:"Maths",Marks:40,},
//     {Subject:"Telugu",Marks:60}
//    ]
// }]




// let btnGet = document.querySelector('button');
// let myTable = document.querySelector('#table');
// let employees = [
//     { name: 'James', age: 21, country: 'United States' },
//     { name: 'Rony', age: 31, country: 'United Kingdom' },
//     { name: 'Peter', age: 58, country: 'Canada' },
//     { name: 'Marks', age: 20, country: 'Spain' }
// ]
// let headers = ['Name', 'Age', 'Country'];
// btnGet.addEventListener('click', () => {
//     let table = document.createElement('table');
//     let headerRow = document.createElement('tr');
//     headers.forEach(headerText => {
//         let header = document.createElement('th');
//         let textNode = document.createTextNode(headerText);
//         header.appendChild(textNode);
//         headerRow.appendChild(header);
//     });
//     table.appendChild(headerRow);
//     employees.forEach(emp => {
//         let row = document.createElement('tr');
//         Object.values(emp).forEach(text => {
//             let cell = document.createElement('td');
//             let textNode = document.createTextNode(text);
//             cell.appendChild(textNode);
//             row.appendChild(cell);
//         })
//         table.appendChild(row);
//     });
//     myTable.appendChild(table);
// })


var students=[
    {
      Name:"Venkat",
      progess:[
        {subject:"MATHS",marks:70,pass:"pass" },
        // {subject:"TELUGU",marks:99, pass:"pass"},

      ]
    }
];

var k = '<tbody>'

for(i = 0;i < students.length; i++){
    // k+= '<td>'+students[i].Name +'</td>'
    document.getElementById("demo").innerHTML=students[i].Name
    //students[i].Name;
//    function App(){
//     a=70;
//     if(a<=70){
//         document.write("pass")
//     }else{
//         document.write("fail")                                          
//     }
// }
// document.getElementById("n1").value = App();
    k+= '<tr>';
    k+= '<td>' + students[i].progess[i].subject + '</td>';
    k+= '<td>' + students[i].progess[i].marks + '</td>';
    k+= '<td>' + students[i].progess[i].pass + '</td>';
   // k+= '<td>' + document.getElementById("n1").value = App() + '</td>';
    k+= '</tr>';
 }
 k+='</tbody>';
 
 document.getElementById('tableData').innerHTML =k;
    