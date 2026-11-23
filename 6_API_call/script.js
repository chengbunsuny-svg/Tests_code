console.log("fetch function");

// console.log("running");

// try {
//     throw new Error("err now")
// } catch (error) {
//     console.log(error);
// }

// console.log("done");

// https://apzbgkwhvgcbdsfagdrl.supabase.co/rest/v1/students

// async function 

const a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldmRvbmNkYmZkeWZ1d2Zha2phIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MzM2MDk4MCwiZXhwIjoyMTA4OTM2OTgwfQ.KiVg2BouUBL0esQ7XX0kqHh7STZkzBaTi5LevUBjMC0";
let url = "https://oevdoncdbfdyfuwfakja.supabase.co/rest/v1/Lear_Api";

// HTTP , GET, POST, PUT, DELETE
async function getData() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                apiKey: a
            }
        });
        const data = await response.json();
        console.log(data);
        tbody.innerHTML = "";
        for (let element of data) {
            tbody.innerHTML += `
                    <tr>
                    <th>${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${new Date(element.created_at).tostring().substring(0,16)}</td>
                    <td>${new Date(element.created_at).toLacalDateString()}</td>
                    <td>
            <button onclick="deleteStudent(${element.id})" class="btn btn-error"><ion-icon name="trash-outline"></ion-icon></button>
            <button onclick="updateStudent(${element.id})" class="btn btn-error">Edit</button>
                    </td>
                </tr>
            `;
        }
    } catch (error) {
        console.log(error);
    }
}
async function createStudent(name, age) {
    try {
        const obj = { name: name, age: age };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                apiKey: a,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok) {
            throw new Error("Cannot create a student");
        }
        getData();
    } catch (error) {
        console.log(error);
    }
}

const studentForm = document.querySelector("#student-form");
const tbody = document.querySelector("#data");
studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    createStudent(name, age);
});

async function deleteStudent(id){
    try{
        const response = fetch(url+`?id=eq.${id}`,{
            method:"DELETE",
            headers:{
                apiKey: a
            }
        });
        if(!response.ok){
            throw new Error("Cannot delete a students");
            getData();
        }
    }catch(error){
        console.log(error.message);
    }
}
getData();

function updateStudent(id){
    const name = prompt("Enter the name to update: ")
    const age = prompt("Enter age: ");
    try{
        const response =fetch(url+`?id=eq.${id}`,{
            method:"PUT",
            headers:{
                apiKey: a,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id:id,name:name,age:age})
        });
        if(!response.ok){
            throw new Error("Cannot delete the students");
            getData();
        }
    }catch(error){
        console.log(error);
    }
}