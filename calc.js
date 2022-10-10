
const button = document.querySelectorAll(".num");
const output = document.querySelector(".output");
const calc = document.querySelector(".caluclator");
const main = document.querySelector(".main");
const main1 = document.querySelector(".main1");
const head = document.querySelector("h2");
const para = document.querySelector("p");
const place = document.querySelector("numbers");
const foot = document.querySelector("footer");
const del = document.querySelector("#delete");
const eq = document.querySelector("#equals");
const res = document.querySelector("#reset");
const spa = document.querySelector("span");
const buttonchanges = document.querySelectorAll(".change");
const button2 = document.querySelector("#change2");
let k = 0;
let str = "";
let str2 = "";
let h=0;
for (let i = 0; i < 3; i++)
{
    buttonchanges[i].addEventListener("click", () => {
        if (i == 0)
        {
            document.location.reload(); 
            
        }
        
        if (i == 1)
        {
            str = "";
            output.innerHTML = 0;
            document.body.style.background = "hsl(45, 7%, 89%)";
            calc.style.background = "hsl(45, 7%, 89%)";
            head.style.color = "hsl(60, 10%, 19%)";
            para.style.background = "hsl(45, 7%, 89%)";
            para.style.color = "hsl(60, 10%, 19%)";
            output.style.background = "white";
            output.style.color = "hsl(60, 10%, 19%)";
            foot.style.background = "hsl(0, 5%, 81%)";
            for (let i = 0; i < 18; i++)
            {
                button[i].style.background = "hsl(30, 25%, 89%)";
                 button[i].style.color = "hsl(60, 10%, 19%)";
            }
            
            del.style.background = "hsl(185, 42%, 37%)";
            eq.style.background = "hsl(25, 98%, 40%)";
            res.style.background = "hsl(185, 42%, 37%)";
             del.style['box-shadow'] = "1.9px 1.9px   hsl(185, 58%, 25%)";
            res.style['box-shadow'] = "1.9px 1.9px   hsl(185, 58%, 25%)";
            eq.style.textShadow = "hsl(25, 99%, 27%)";
            buttonchanges[i].style.background = "hsl(25, 98%, 40%)";
            buttonchanges[0].style.background = "hsl(0, 5%, 81%)";
            buttonchanges[2].style.background = "hsl(0, 5%, 81%)";

            main1.style.background = "hsl(0, 5%, 81%)";
            spa.style.color = "hsl(60, 10%, 19%)";
   
        }
        if (i == 2)
        {
            str = "";
            output.innerHTML = 0;
            document.body.style.background = "hsl(268, 75%, 9%)";
            calc.style.background = "hsl(268, 75%, 9%)";
            head.style.color = "hsl(52, 100%, 62%)";
            para.style.background = "hsl(268, 75%, 9%)";
            para.style.color = "hsl(52, 100%, 62%)";
            output.style.background = "hsl(268, 71%, 12%)";
            output.style.color = "hsl(52, 100%, 62%)";
            foot.style.background = "hsl(268, 71%, 12%)";
            for (let i = 0; i < 18; i++) {
                button[i].style.background = "hsl(268, 47%, 21%)";
                button[i].style.color = "hsl(52, 100%, 62%)";
                 button[i].style['box-shadow'] = "1.9px 1.9px   hsl(290, 70%, 36%)";
            }
            
            del.style.background = "hsl(281, 89%, 26%)";
            del.style.color = "white";
            eq.style.background = "hsl(176, 100%, 44%)";
            res.style.background = "hsl(281, 89%, 26%)";
            del.style['box-shadow'] = "1.9px 1.9px   hsl(285, 91%, 52%)";
            res.style['box-shadow'] = "1.9px 1.9px   hsl(285, 91%, 52%)";
            res.style.color = "white";
            eq.style['box-shadow'] = "1.9px 1.9px   hsl(177, 92%, 70%)";
            eq.style.color = "hsl(198, 20%, 13%)";
            buttonchanges[i].style.background = "hsl(176, 100%, 44%)";
            buttonchanges[0].style.background = "hsl(268, 71%, 12%)";
            buttonchanges[1].style.background = "hsl(268, 71%, 12%)";

            main1.style.background = "hsl(268, 71%, 12%)";
            spa.style.color = "hsl(52, 100%, 62%)";
            
            }
    })
}


for (let i = 0; i < 18; i++) {

    button[i].addEventListener("click", () => {
        
        buttonvalue = button[i].innerHTML;



        if (buttonvalue == 0 || buttonvalue == 1 || buttonvalue == 2 || buttonvalue == 3 || buttonvalue == 4 || buttonvalue == 5 || buttonvalue == 6 || buttonvalue == 7 || buttonvalue == 8 || buttonvalue == 9||buttonvalue==".")
        {
            
            str2 = str2 + buttonvalue;
            output.innerHTML = str2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
        }
       
        if (buttonvalue == "DEL")
        {
            str2 = str2.slice(0, -1);
            if (str2 != "")
                output.innerHTML = str2;
            else
                output.innerHTML = 0;
        }
        if (buttonvalue == "RESET")
        {
            output.innerHTML = 0;
            str="";
            }
        
        if (buttonvalue == "+" || buttonvalue == "-" || buttonvalue == "x" || buttonvalue == "/")
        {
            // alert("hello");
            if (buttonvalue == "x") {
                str = str + str2;
                
                str = str + "*";
                str2 = "";
            }
            else
            {
                str = str + str2;
                str = str + buttonvalue;
                str2 = "";
                
                }
           
            
           
            
        }
        
       
        if (buttonvalue == "=")
        {
            
            
                str = str + str2;
            h = eval(str);
            h = h.toString();
            output.innerHTML =h.substring(0,12);
            str = h.toString();
                str2 = "";
               
            
            

        }
           


    });
};