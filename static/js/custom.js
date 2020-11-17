window.onload = function() {
  //forms.forEach((form) => {
  //  form.addEventListener('submit', (e) => {
  //    e.preventDefault();

  //    fetch(proxyurl + form.action, {
  //      method: form.method,
  //      body: new FormData(form)
  //    })

  //    form.classList.add("success")
  //  })
  //})

  let toggles = document.querySelectorAll(".show-modal")

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', event => {
      event.preventDefault();

      $(".modal").modal('show');
    })
  })
}
