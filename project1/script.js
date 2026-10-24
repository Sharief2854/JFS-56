let refelem=document.getElementById("ref");
async function getData(){
    try{
        let api="https://fakestoreapi.com/products";
        let res=await fetch(api);
        let data=await res.json();
        console.log(data);
        display(data)
    }
    catch(err){
        alert("something went wrong")
    }
}
function display(d){
    let cards="";

    for(let i in d){
        cards+=`
             <div class="card">
                <img src=${d[i].image} alt="">
                <h1>${d[i].title}</h1>
                <h1>${d[i].price}</h1>
            </div>
        `
    }
    refelem.innerHTML=cards;
}