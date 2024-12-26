let buttons = ["block-1-btn","block-2-btn","block-3-btn"];
let containers = ["container-1","container-2","container-3"];

for(let i = 1; i < containers.length; i++) document.getElementById(containers[i]).style.display = 'none';

for(let i = 0; i < containers.length; i++){
    let y = i;
    document.getElementById(buttons[i]).addEventListener("click", ()=>{
        for(let j = 0; j < containers.length; j++){
            document.getElementById(containers[j]).style.display = 'none';
        }
        document.getElementById(containers[y]).style.display = '';
    });
}
