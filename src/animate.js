if (document.readyState === 'complete' ) {
const observer = new IntersectionObserveren((entries)=> (
    entries.forEach(entry => {
        observer.observe(document.getElementsByClassName("path"))       
    })
))

observer.observe(document.getElementsByClassName("path"))}