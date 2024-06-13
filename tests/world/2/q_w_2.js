let buttCheck =document.querySelector(".btnCheck")

buttCheck.addEventListener('click',function() {
    
    let pr_otv_zadachi_1 = 11;
    let pr_otv_zadachi_2 = 6;
    let pr_otv_zadachi_3 = 6;
    let otv_uch_1 = document.querySelector('z_1').value;
    let  otv_uch_2 = document.querySelector('z_2').value;
    let otv_uch_3 = document.querySelector('z_3').value;
    let ball = 0;
    if(otv_uch_1 == pr_otv_zadachi_1){
         ball +=1;
        
        element.style.backgroundColor = "#C9CC0B";
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
        ball +=1;
        var ex = document.querySelector(".ex2");
        element.style.backgroundColor = "#C9CC0B";
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
        ball +=1;
        var ex = document.querySelector(".ex3");
        element.style.backgroundColor = "#C9CC0B";
    }
    vsego_zadach = 3;
    procent_vip = ball/vsego_zadach * 100;
    document.querySelector('rezultat').innerHTML = "Правильных ответов: "+ball;
    })


