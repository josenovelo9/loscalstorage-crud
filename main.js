var name;
var names=[];
var names2;
var userTR= document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create(){
    let storage = JSON.parse(localStorage.getItem("names"));
    name=document.getElementById("name").value;
    if(name==''){
        alert("Escriba el nombre");
    }else{
        if(storage==null){
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names))

        }else{
            names=JSON.parse(localStorage.getItem("names"));
            names.push(name);
            localStorage.setItem("names",JSON.stringify(names));
        }
    }
}

function Read(){
    userTR.innerHTML='';
    names2=JSON.parse(localStorage.getItem("names"));
    if(names2!=null){
        for(var i=0; i<names2.length; i++){
            userTR.innerHTML+=`
            <div class="bg-dark border border-success text-white card mb-2">
            <div class="card-body">
            <p>Usuario: ${names2[i]}</p>
            <button class="col-5 text-white btn btn-warning" onclick="Update(${i})">Editar</button>
            <button class="col-5 text-white btn btn-danger" onclick="Delete(${i})">Eliminar</button>
            </div>
            </div>
            `
        }
    }
}
function Update(i3){
    let names4=JSON.parse(localStorage.getItem("names"));
    userTR.innerHTML='';
    for(var i=0;i<names4.length;i++){
        if(i==i3){
            userTR.innerHTML+=`
            <div class="bg-dark border border-danger text-white card mb-2">
            <div class="card-body">
            <p>Usuario: ${names2[i]}</p>
            <input class="mb-2 form-control" id="newName" placeholder="${names4[i]}">
            <button class="col-5 text-white btn btn-success" onclick="Update2(${i})">Actualizar</button>
            <button class="col-5 text-white btn btn-danger" onclick="Read()">Cancelar</button>
            </div>
            </div>
            `
        }else{
            userTR.innerHTML+=
           `<div class="bg-dark border border-success text-white card mb-2">
           <div class="card-body">
           <p>Usuario: ${names2[i]}</p>
           <button disabled class="col-5 text-white btn btn-warning" onclick="Update(${i})">Editar</button>
           <button disabled class="col-5 text-white btn btn-danger" onclick="Delete(${i})">Eliminar</button>
           </div>
           </div>`
        }
    }
}
function Update2(i){
    let names5=JSON.parse(localStorage.getItem("names"));
    names5[i]=document.getElementById("newName").value;
    if(names5[i]==''){
        alert("Escribe el nombre");
    }else{
        localStorage.setItem("names",JSON.stringify(names5));
        Read();
    }
}

function Delete(i2){
    let names3=JSON.parse(localStorage.getItem("names"));
    names3.splice(i2,1);
    localStorage.setItem("names", JSON.stringify(names3));
    Read();
}