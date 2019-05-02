
let btn = document.getElementById('btn');
btn.addEventListener('click', (x)=> {
    let inputName = document.querySelector('input[type="text"]');
    let inputEmail = document.querySelector('input[type="email"]');
    let inputCheckbox = document.querySelector('input[type="checkbox"]');

    

    if(inputName.value != "" && inputEmail !== "" && inputCheckbox.checked){
        console.log('good');
    } else {
        x.preventDefault();
        alert('nieprawidłowe dane');
        
    }

})


let permitAll = document.getElementById('permit-all');
permitAll.addEventListener('click', ()=> {
        let allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        allCheckboxes.forEach((x)=> {
            x.checked = true;
        })
        console.log(allCheckboxes);
    }
)