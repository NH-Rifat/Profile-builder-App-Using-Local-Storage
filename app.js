//alert("Hey I am working");
(function(){
    const profileForm = document.querySelector('.profileForm');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const profInput = document.querySelector('#profession');
const profileClass = document.querySelector('.profile')

loadEventListener();
function loadEventListener(){
    profileForm.addEventListener('submit',profileSubmit);
    document.addEventListener('DOMContentLoaded',getProfiles);
}

function profileSubmit(event){
        event.preventDefault();
        // const nameInputValue = nameInput.value;
        // const ageInputValue = ageInput.value;
        // const profInputValue = profInput.value;
        //console.log(nameInputValue, ageInputValue,profInputValue);
        if(nameInput.value === '' || ageInput.value ==='' || profInput.value === ''){
            alert('Please provide necesary things')
        }else{
            const profileData = {
                name: nameInput.value,
                age: ageInput.value,
                prof: profInput.value
            }
            const formattedText = formateText(profileData);    
            profileClass.innerHTML += formattedText;

            // profileData passing by a function for use local storage 
            saveDataToLocalStorage(profileData);
        
            nameInput.value = '';
            ageInput.value = '';
            profInput.value = '';
        }
        
    }
    
//? this function is used for UI

function formateText({name,age,prof}){
    const text = `<div class="profile-section">
    <h3>Name: ${name}</h3>
    <p>Age: ${age}</p>
    <p>Profession: ${prof}</p>
</div>`

    return text;
    
}

//? this function is used for store data by Using Local Storage

function saveDataToLocalStorage(profileData){
    let profilesArray=[];
    //console.log(profilesArray);
    //console.log(typeof(profilesArray));
    if(localStorage.getItem('profiles')){
        profilesArray = JSON.parse(localStorage.getItem('profiles'));
        //console.log(typeof(profilesArray));
        //console.log(profilesArray);
        profilesArray.push(profileData);
        localStorage.setItem('profiles', JSON.stringify(profilesArray));
        //console.log(profilesArray);
    }
    else{
        profilesArray.push(profileData);
        localStorage.setItem('profiles', JSON.stringify(profilesArray));
        //console.log(typeof(profilesArray));
    }
    //console.log(typeof(profilesArray));
    //console.log(profilesArray);
}



function getProfiles(){
        console.log('listener trigerred' );
        let newProfilesArray=[];
        if(localStorage.getItem('profiles')){
            newProfilesArray = JSON.parse(localStorage.getItem('profiles'));
        }
        else{
            newProfilesArray = [];
        }
        let formattedText = '';
        newProfilesArray.forEach((profile)=>{
            formattedText += formateText(profile);
            //console.log(profile);
        })
        profileClass.innerHTML = formattedText;
    }
})();
