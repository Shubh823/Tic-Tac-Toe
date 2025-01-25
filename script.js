let boxes = document.querySelectorAll(".box");
let msg=document.getElementById("msg");
let ned=document.getElementById("new");
let dis=document.getElementById("dis");

let count=0;
let player0=true;
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        if(player0){
            box.innerText="x";
            player0=false;
        }else{
            box.innerText="o";
            player0=true;
        }
        count=count+1;
        
        
        console.log(count)
       
        box.disabled=true;
        cheackwinner();
        if(count===9){
            alert("hekko");
            dis.classList.remove("hiden");
            msg.innerText="sorry the match was tie";
          }
    })
})

const showwinner=(winner)=>{
    
    dis.classList.remove("hiden");
    msg.innerText=`the winner is ${winner}`;
    for(l of boxes){
        l.disabled=true;
    }
}

const cheackwinner =()=>{
    for( let p of arr){
        let px=boxes[p[0]].innerText;
        let py=boxes[p[1]].innerText;
        let pz=boxes[p[2]].innerText;
        if(px!="" && py!="" && pz!=""){
            if(px===py && py===pz){
                console.log("winner")
                showwinner(px);
            }
        }
      }
    }
    
    
    
    
    ned.addEventListener("click" ,reset);
    function reset(){
        count=0;
        player0=true;
        dis.classList.add("hiden");
        for(l of boxes){
            l.disabled=false;
            l.innerText="";
            

        }
  
        
    }
