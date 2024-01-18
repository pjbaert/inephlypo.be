if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("Let's get digital, digital!"))
      .catch(err => console.log("service worker not registered", err))
  })
}
