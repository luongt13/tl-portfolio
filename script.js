let allProject = document.querySelectorAll('.project')
let caseButton = document.querySelectorAll('button')


console.log(allProject)


allProject.forEach((item) => {
    item.addEventListener('mouseenter', ()=> {
        let button = document.createElement('button')
        button.innerHTML = "moo"
        item.append(button)
        caseButton.forEach((btn) => {
            btn.classList.toggle('disappear')
        })
    })
})