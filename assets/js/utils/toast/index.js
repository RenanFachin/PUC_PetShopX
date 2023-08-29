class ToastAlert {

  constructor(text, backgroundColor){
    this.text = text
    this.backgroundColor = backgroundColor
    this.options = {
      duration: 2000,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      close: true,
      offset: {
        x: 50,
        y: 10
      },
      style: {
        background: this.backgroundColor
      }
    }
  }


  showToast(){
    Toastify({
      text: this.text, ...this.options
    }).showToast()
  }
}

export { ToastAlert }