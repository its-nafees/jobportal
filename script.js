const sortbtns =document.querySelectorAll(".job-id > *")
const sortitems = document.querySelectorAll(".jobs-container > *")

sortbtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        sortbtns.forEach((btn)=>btn.classList.remove("active"));
        btn.classList.add("active");

        const targetdata = btn.getAttribute("data-target")
        sortitems.forEach((item)=>{
            item.classList.add("delete");
            if(item.getAttribute("data-item") ===
        targetdata || targetdata === "all"
    ){
            item.classList.remove("delete");

        }
        })
    });
});


