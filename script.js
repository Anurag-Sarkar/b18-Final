var h1 = document.querySelectorAll("#text h1")
console.log(h1)    

h1.forEach(function(elem){
    var clutter = ""
    
        var txt = elem.textContent.split("")
        txt.forEach(function(elm){
            clutter += `<span>${elm}</span>`
        })
        elem.innerHTML = clutter
    });
var tl = gsap.timeline()
tl.from("#text h1 span",{
    opacity:0,
    duration:1.5,
    stagger:0.1,
    scale:1.4,
    color:"red",

})
.from(".navigation h3",{
    y:20,
    opacity:0,
    duration:1,
    stagger:0.1,
},"-=1")
.from("#ncenter h2",{
    y:20,
    opacity:0,
    duration:1,
    stagger:0.1,
},"-=1")
.from("#big-circle ",{
    scale:1.5,
    opacity:0,
    ease:Expo.easeOut,
    duration:2,
},"-=1")
.from("#m2",{
    y:20,
    opacity:0,
    duration:1,
},"-=1.5")
.from("#m1",{
    y:20,
    opacity:0,
    duration:1,
},"-=1.3")
.from("#m3",{
    y:20,
    opacity:0,
    duration:1,
},"-=1.3")

var showImage = function(naam){
    gsap.to(`${naam} img`,{
        opacity:1,
        y:-30,
        stagger:0.1
    })
    console.log("show")
}
var hideImage = function(){
    gsap.to(`#img1 img,#img2 img,#img3 img,#img4 img`,{
        opacity:0,
        y:30,
        stagger:0.1
    })
    console.log("hidden")
}
document.querySelector("#fourth").addEventListener("mouseover",function(dets){
    // console.log(dets.target.id)
if((dets.target.id) === "one"){
    showImage("#img1")

}
else if((dets.target.id) === "two"){
    showImage("#img2")
}
else if((dets.target.id) === "three"){
    showImage("#img3")
}
else if((dets.target.id) === "four"){
    showImage("#img4")
}
})
document.querySelector("#links").addEventListener("mouseleave",function(dets){
    console.log(dets)

    hideImage()



})
