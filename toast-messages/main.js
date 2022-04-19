function toast({ 
  title = '',
  message = '',
  type = 'infor',
  duration = 3000
}) {
  const main = document.getElementById('toasts')

  if(main) {

    let toast = document.createElement('div')

    toast.classList.add('toast', `toast--${type}`)

    toast.innerHTML = `
      <div class="toast__icon">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="toast__body">
        <h3>${title}</h3>
        <p>${message}</p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-rectangle-xmark"></i>
      </div>
    `
    main.appendChild(toast)
  }
}

toast({
  title: '123 Successfully',
  message: 'Successfully updated deleted the selected credit card.',
  type: 'success',
  duration: 3000

})