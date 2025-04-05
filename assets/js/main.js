document.addEventListener("DOMContentLoaded", function () {

    const sharesButtonsLight = document.querySelector('.shares__buttons-light'); 
    const buttonsSocial = document.querySelector('.buttons__social');
    const personInfo = document.querySelector('.person__info');
    const componentPerson = document.querySelector('.component__person');
    const componentShare = document.querySelector('.component__share');
    const componentShareDesktop = document.querySelector('.component__share-desktop')


    sharesButtonsLight.addEventListener("click",  () => {

        if (window.innerWidth > 767) {
            
            componentShareDesktop.classList.toggle('display-flex');
            sharesButtonsLight.classList.toggle('shares__buttons-dark');
            buttonsSocial.classList.toggle('buttons__social--dark');
            console.log("> 767");
                
        } else if (window.innerWidth <= 767 ){
            
            personInfo.classList.toggle('display-none');
            componentShare.classList.toggle('display-flex');
            componentPerson.classList.toggle('component__person--dark');
            sharesButtonsLight.classList.toggle('shares__buttons-dark');
            buttonsSocial.classList.toggle('buttons__social--dark');
        }
    });

    window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        componentShareDesktop.classList.remove('display-flex');
        sharesButtonsLight.classList.remove('shares__buttons-dark');
        buttonsSocial.classList.remove('buttons__social--dark');
        personInfo.classList.remove('display-none');
        componentShare.classList.remove('display-flex');
        componentPerson.classList.remove('component__person--dark');
    } else {
        componentShare.classList.remove('display-flex');
        personInfo.classList.remove('display-none');
        componentPerson.classList.remove('component__person--dark');
        componentShareDesktop.classList.remove('display-flex');
        sharesButtonsLight.classList.remove('shares__buttons-dark');
        buttonsSocial.classList.remove('buttons__social--dark');
    }
    });

});

