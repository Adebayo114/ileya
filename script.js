// const submitForm = document.getElementById('submitForm')
// const ans = document.getElementsByClassName('ans');
// submitForm.addEventListener('Done', (e) =>{
//     e.preventDefault();
//     if (ans.value === '') {
//         alert('Field Empty')
//     }
// })

// function getResponse(){
//     document.getElementById('submitForm')

// }

let loginForm = document.getElementById('loginForm');
submitForm.addEventListener('click' ,(e) =>{
    e.preventDefault();
    let myname = document.getElementById('name').value;
    let mysurname = document.getElementById('surname').value;
    let myoption = document.getElementById('optionNames').value;
    let mrCheckbox = document.getElementById('mrCheckbox').checked;
    let mrsCheckbox = document.getElementById('mrsCheckbox').checked;

    if (myname.value === "" || mysurname.value === "" || myoption.value === "" ) {
        alert('Field empty')
    } else {
        alert('it has been submitted succesfully');
        // alert('This form has been submitted Succesfully')
        console.log(
            `This form has a username of ${myname.value}, surname of ${mysurname.value}, option of ${myoption.value}, checkbox of mrs${mrCheckbox} and checkbox of mr${mrsCheckbox}`
        );

         if 
         (mrCheckbox) {
             console.log('Title: Mr');
         }
         if (mrsCheckbox) {
            console.log('Title: Mrs');
        }

    }
    const urlLink = new URLSearchParams({
name: myname,
surname : mysurname,
option : myoption,
mrCheckbox :mrCheckbox,
mrsCheckbox : mrsCheckbox

});

window.location.href = `welcome.html?${urlLink.toString()}`;
});


