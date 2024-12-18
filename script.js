let starts = document.querySelectorAll('.start')
let [submitBtn, selected] = ['submit_button', 'selected'].map(el => document.getElementById(el))
let main = document.querySelector("main")
let rate = 5;
let hanldePickStart = (e) => {
    let pickedRate = e.target.textContent
    rate = pickedRate
    starts.forEach(el => el.setAttribute('aria-checked' , false))
    e.target.setAttribute('aria-checked' , true)
}
let hanldeSubmit = (e) => {
    main.toggleAttribute("submited")
    selected.textContent = rate

}
starts.forEach(element => element.addEventListener('click', hanldePickStart));
submitBtn.addEventListener('click', hanldeSubmit)