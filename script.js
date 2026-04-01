//data[i].displayName ---> name of agent 
// data[i].description ---> details of that agent
//data[i].displayIconSmall ---> agent image in small
// data[i].fullPortrait ----> agent image in full potraite
// data[i].background ---> agent bg
// data[i].backgroundGradientColors ----> bg gradiant colors
//data[i].role.displayName ---> category (initiators , sentinals , controller ....)
// data.[i].role.displayIcon ---> img of that category

//data[i].abilities --> returns an array constisting of 4 abilities    // {slot: 'Ability1', displayName: 'Wingman', description: 'EQUIP Wingman. FIRE to send Wingman forward seekin…in another Wingman charge after a short cooldown.', displayIcon: 'https://media.valorant-api.com/agents/e370fa57-475…8-499e1f642d3f/abilities/ability1/displayicon.png'}


// const btn=document.getElementById("btn")
// const input = document.getElementById("input")
// const cont = document.getElementById("container")
// const name= document.getElementById("name")
// const image = document.getElementById("image")
async function fetchskins(){
    try{
        const res = await fetch("https://valorant-api.com/v1/agents")
        const dataa = await res.json();
        const con = document.getElementById("container")
        
        for (let i of dataa.data){
  
            const box = document.createElement("div")
            const image_div = document.createElement("div")
            const img= document.createElement("img")

            const name = document.createElement("h1")
            name.className = "name";
            img.className = "im";

            image_div.className = "img";
            box.className = "box";

    
            img.src = i.fullPortrait;
            name.innerText=i.displayName;
            img.style.background = `
                linear-gradient(
                    
                    #${i.backgroundGradientColors[0]},
                    #${i.backgroundGradientColors[1]},
                    #${i.backgroundGradientColors[2]},
                    #${i.backgroundGradientColors[3]}
                ),
                url(${i.background})
                `;
            img.style.backgroundBlendMode = "overlay";
            img.style.backgroundSize= "cover";
            img.style.backgroundPosition= "center";

            image_div.appendChild(img);


            box.appendChild(image_div);
            box.appendChild(name);
            con.appendChild(box)
        
            
        }



    }
    catch(error){
        return error ;

    }

}


fetchskins()



const btn = document.getElementById("input")

btn.addEventListener("input", async function(){

    const input = document.getElementById("input")
    const val= input.value.toLocaleLowerCase();
    try{
        const res = await fetch("https://valorant-api.com/v1/agents")
        const dataa = await res.json();
        const data=dataa.data
        const con = document.getElementById("container")
        con.innerHTML="";
        const result = data.filter((x) =>{
        
    
            return x.displayName.toLowerCase().startsWith(val)

        
        });
        console.log(result)
        for (let i of result){
  
            const box = document.createElement("div")
            const image_div = document.createElement("div")
            const img= document.createElement("img")

            const name = document.createElement("h1")
            name.className = "name";
            img.className = "im";

            image_div.className = "img";
            box.className = "box";

    
            img.src = i.fullPortrait;
            name.innerText=i.displayName;
            img.style.background = `
                linear-gradient(
                    
                    #${i.backgroundGradientColors[0]},
                    #${i.backgroundGradientColors[1]},
                    #${i.backgroundGradientColors[2]},
                    #${i.backgroundGradientColors[3]}
                ),
                url(${i.background})
                `;
            img.style.backgroundBlendMode = "overlay";
            img.style.backgroundSize= "cover";
            img.style.backgroundPosition= "center";

            image_div.appendChild(img);


            box.appendChild(image_div);
            box.appendChild(name);
            con.appendChild(box)
        
            
        }

    }catch(err){
        console.log(err)
    }

})
