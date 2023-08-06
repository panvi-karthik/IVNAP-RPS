
var i,num,but,result,random;
var score=0;

for(i=0;i<3;i++)
{
    document.querySelectorAll(".op")[i].addEventListener("click", function()
    {

        but = this.innerHTML;
        


        if(but==="ROCK")
        {
            let num=1;
            var our_img="./img" + num + ".png";
            document.querySelector(".img1").setAttribute("src",our_img);

            random = Math.floor(Math.random() * 3) + 1;

            var random_img="./img" + random + ".png";

            var computer_img=document.querySelector(".img2");

            computer_img.setAttribute("src",random_img);





            if(random===1 && num===1)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
            }
            else if(random===2 && num===2)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }
            else if(random===3 && num===3)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
            }

            else if(random===1 && num===2)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;

                
            }
            else if(random===1 && num===3)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===2 && num===1)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===2 && num===3)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===3 && num===1)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===3 && num===2)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
            }

        }



        else if(but==="PAPER")
        {
            let num=2;
            var our_img="./img" + num + ".png";
            document.querySelector(".img1").setAttribute("src",our_img);


            random = Math.floor(Math.random() * 3) + 1;

            var random_img="./img" + random + ".png";

            var computer_img=document.querySelector(".img2");

            computer_img.setAttribute("src",random_img);







            if(random===1 && num===1)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }
            else if(random===2 && num===2)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }
            else if(random===3 && num===3)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }

            else if(random===1 && num===2)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===1 && num===3)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===2 && num===1)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===2 && num===3)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===3 && num===1)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===3 && num===2)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
        }



        else if(but==="SCISSORS")
        {
            let num=3;
            var our_img="./img" + num + ".png";
            document.querySelector(".img1").setAttribute("src",our_img);


            random = Math.floor(Math.random() * 3) + 1;

            var random_img="./img" + random + ".png";

            var computer_img=document.querySelector(".img2");

            computer_img.setAttribute("src",random_img);









            if(random===1 && num===1)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }
            else if(random===2 && num===2)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }
            else if(random===3 && num===3)
            {
                let result="tie";
                document.querySelector(".spn").innerHTML=result;
                
            }

            else if(random===1 && num===2)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===1 && num===3)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===2 && num===1)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===2 && num===3)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===3 && num===1)
            {
                let result="you win";
                document.querySelector(".spn").innerHTML=result;
                score+=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
            else if(random===3 && num===2)
            {
                let result="you lost";
                document.querySelector(".spn").innerHTML=result;
                score-=1;
                document.querySelector(".card-content").innerHTML=score;
                
            }
        }



    });
}








