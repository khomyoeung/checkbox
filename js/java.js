
var quiz = () =>{
    // Total score
    let score = 0;
    //Question1
    let html = document.getElementById("html");
    let html1 = document.getElementById("html1");
    let html2 = document.getElementById("html2");

    //checked
    if(html.chcked){
        score += 25;
    }else if(html1.chcked){
        score +=0;
    }else if (html2.checked){
        score += 0;
    }
    //Question2
    let css = document.getElementById("css");
    let css1 = document.getElementById("css1");
    let css2 = document.getElementById("css2");

    //checked
    if(html.chcked){
        score += 25;
    }else if(html1.chcked){
        score +=0;
    }else if (html2.checked){
        score += 0;
    }
     // Question  3
     let subject = document.getElementsByName("subject[]");
     for (let i = 0; i < subject.length; i++){
         if (subject[i].checked){
             if (subject.value == "CSS"){
                 score += 0;
                 break;
             }else{
                 score +=25;
             }
         }
     }
     // Queston 4
     let script = document.getElementById("chooseJS");
     if (script.value != "best"){
         score += 0;
     }else{
         score +=25;
     }
    document.getElementById("result").innerHTML = score;
}
var btn = document.getElementById("answer");
btn.addEventListener('click', quiz);


