
/*bag-order-details*/
document.querySelector('#bag-place-order').addEventListener("click",function(){
    var b=document.getElementById("b-total").innerHTML;
    if(b=='<span class="fa fa-inr"></span>0')
    {
           alert("Select your order"); 
    }
    else{
        document.getElementById("myntra-bag").style.display="none";
        document.getElementById("myntra-address-selc").style.display="";
    }
});



document.getElementById("home-pro1").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro2").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro3").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro4").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro5").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro6").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro7").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});
document.getElementById("home-pro8").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="";
    document.getElementById("myntra-home").style.display="none";
});

/*product-gallery*/
document.getElementById("prod-prod4").addEventListener("click",function(){
    document.getElementById("myntra-prod").style.display="none";
    document.getElementById("myntra-prod-gal").style.display="";
});
/*address -order deatils*/
document.querySelector("#address-con").addEventListener("click",function(){
    document.getElementById("myntra-order-del").style.display="";
    document.getElementById("myntra-address-selc").style.display="none";
});
