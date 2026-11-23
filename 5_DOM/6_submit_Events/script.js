console.log("student-from");
const studentFrom = document.querySelector("#student-from");

const students = [ ];
const tableData = document.querySelector("#data")
studentFrom.addEventListener("submit",(event)=>{
    const nameInput= document.querySelector("#student-name");
    const idInput= document.querySelector("#student-age");
    event.preventDefault();
    console.log(event);
    let other =0 ;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const st = {
        name: name,
        age : age
    };
    students.push(st);
    // console.log(students);
    tableData.innerHTML ="";
    // // other += 1;
    // for (let i = 0 ;i<students.l , i++){
    // tableData.innerHTML +=`
    //         <tr>
    //             <td>${i +1 }</td>
    //             <td>${students[i.name]}</td>
    //             <td>${students[i.age]}</td>
    //         </tr>`;
    // }
});
