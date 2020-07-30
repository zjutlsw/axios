import myaxios from "./myaxios.js"
const getBtn=document.querySelector("#get");
const postBtn=document.querySelector("#post");

 
getBtn.addEventListener("click",async ()=>{
    const data={
        username:'xiaoming',
        age:18
    }
    const res=await myaxios.get("/getData",{

        params:data
    });
    console.log(res)
})

postBtn.addEventListener("click",async ()=>{
    const data={
        username:'xiaoming',
        age:18
    }
    const res=await myaxios.post("/login",data);
    localStorage.setItem("token",res.data.token);
})