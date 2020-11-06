window.onload = function() {
  let form = document.querySelector("form.subscribe")

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    })

    form.classList.add("success")
  })
}
