window.onload= function(){
    document.getElementById('stylesheet2').disabled=true;   
    document.getElementById('stylesheet3').disabled=true;
    document.getElementById('stylesheet4').disabled=true;
    }
function StyleSheet1(){
    document.getElementById('stylesheet1').disabled=false;   
    document.getElementById('stylesheet2').disabled=true;   
    document.getElementById('stylesheet3').disabled=true;
    document.getElementById('stylesheet4').disabled=true;
}
function StyleSheet2(){
    document.getElementById('stylesheet1').disabled=true;  
    document.getElementById('stylesheet2').disabled=false;    
    document.getElementById('stylesheet3').disabled=true;
    document.getElementById('stylesheet4').disabled=true;
}
function StyleSheet3(){
    document.getElementById('stylesheet1').disabled=true;  
    document.getElementById('stylesheet2').disabled=true;    
    document.getElementById('stylesheet3').disabled=false;
    document.getElementById('stylesheet4').disabled=true;
}
function StyleSheet4(){
    document.getElementById('stylesheet1').disabled=true;  
    document.getElementById('stylesheet2').disabled=true;    
    document.getElementById('stylesheet3').disabled=true;
    document.getElementById('stylesheet4').disabled=false;
}
