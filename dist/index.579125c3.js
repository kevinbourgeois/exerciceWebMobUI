window.addEventListener("hashchange", (e)=>{
    const hash = window.location.hash;
    document.querySelector("footer a.active")?.classList.remove("active");
    document.querySelector(`footer a[href="${hash}"]`)?.classList.add("active");
    document.querySelector("section.active").classList.remove("active");
    document.querySelector(hash + "-section").classList.add("active");
});

//# sourceMappingURL=index.579125c3.js.map
