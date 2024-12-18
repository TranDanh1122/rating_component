let starts = document.querySelectorAll('.start')
let [submitBtn, selected] = ['submit_button', 'selected'].map(el => document.getElementById(el))
let main = document.querySelector("main")
let rate = 5;
let hanldePickStart = (e) => {
    let pickedRate = e.target.textContent
    rate = pickedRate
}
let hanldeSubmit = (e) => {
    main.toggleAttribute("submited")
    selected.textContent = rate

}
starts.forEach(element => element.addEventListener('click', hanldePickStart));
submitBtn.addEventListener('click', hanldeSubmit)