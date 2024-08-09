const questions = document.querySelectorAll('.answers__list__item');
questions.forEach(el=>{
    el.addEventListener('click',()=>{
        questions.forEach(e=>{
            e.classList.remove('open');
        })
         el.classList.add('open');

    })
})