const search=()=>{

    let searchbox=document.getElementById("item").value;
    
    let storeitems =document.getElementById("product-list"); 
    
    let product= document.querySelectorAll(".product");
    
    let pnane=document.getElementsByTagName("h2")
    
    for (let i=0;i<pname.length; i++) {
    
    let match= product[i].getElementsByTagName('h2')[0];
    
    if (match) {
    
    let textvalue=match.textContent || match.innerHTML;
    
    if (textvalue.indexOf(searchbox)> -1) {
    
    product[i].style.display="";
    
    } else {
    
    product[i].style.display ="none";
    
    }
    
    }
    }
    }
    console.log("hello");
    console.log("hii");