const sections = document.querySelectorAll('.section');
const sectionNavigation = document.querySelectorAll('.navbar-items');
const sectionBtn = document.querySelectorAll('.navbar-items ul li');
const allSections = document.querySelector('.main-wrapper');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.navbar-items ul li a ');
            currentBtn[0].className = currentBtn[0].className.replace('.navbar-items ul li a', '');
            this.className += ' .navbar-items ul li a ';
        })
    }

//Active Sections
  allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectionBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
  }
PageTransitions()
