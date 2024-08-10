import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools,MorphSVGPlugin);


var wave = document.querySelector(".wave");
wave = wave.getBBox();

var waveBack = document.querySelector(".wave-back");
waveBack = waveBack.getBBox();
    

console.log(wave.width);
console.log(waveBack.width);


function logoLetters(){
    var tl = gsap.timeline();
    tl.from("#v-container",{duration:0.25,x:-10,alpha:0},"drawV")
    .from("#v-dark",{duration:0.5,drawSVG:0},"drawV")
    .fromTo(".v-lines",{drawSVG:"0% 10%"},{drawSVG:"90% 100%",duration:0.75 ,stagger:0.05},"-=0.35")

    .from("#o-container",{duration:0.25,x:-10,alpha:0},"-=0.85")
    .from("#o-dark",{duration:0.5,drawSVG:"100% 100%"},"-=0.85")
    .fromTo(".o-lines",{drawSVG:"100% 90%"},{drawSVG:"10% 0%",duration:0.75 ,stagger:0.05},"-=0.75")

    .from("#d-container",{duration:0.25,x:-10,alpha:0},"-=0.85")
    .from("#d-dark",{duration:0.5,drawSVG:0},"-=0.85")
    .fromTo(".d-lines",{drawSVG:"0% 10%"},{drawSVG:"90% 100%",duration:0.75 ,stagger:0.05},"-=0.75")

    .from("#a-container",{duration:0.25,x:-10,alpha:0},"-=0.85")
    .from("#a-dark",{duration:0.5,drawSVG:"100% 100%"},"-=0.85")
    .fromTo(".a-lines",{drawSVG:"100% 90%"},{drawSVG:"10% 0%",duration:0.75 ,stagger:0.05},"-=0.75")

    .from("#a-line-dark",{duration:0.25,drawSVG:"100% 100%",alpha:0},"-=0.6")
    .fromTo(".a-cross",{drawSVG:"100% 100%"},{drawSVG:"15% 0%",duration:0.5 ,stagger:0.05},"-=0.5")

    return tl;
}

function waterAnimation(){
    console.log("play1");
    gsap.set(".wave",{y:30});

    var tl = gsap.timeline();
    tl.to(".wave",{x:-wave.width / 2, duration: 1.5,ease:"none",y:0})
        .set(".wave",{x:0})
        .to(".wave",{x:-wave.width / 2, duration: 3,repeat:-1, ease:"none"});
    return tl;
}

function waterBackAnimation(){
    console.log("play2");
    gsap.set(".wave-back",{y:30});
    var tl = gsap.timeline();
    tl.to(".wave-back",{x:waveBack.width / 2, duration: 1.5,ease:"none",y:0})
        .set(".wave-back",{x:0})
        .to(".wave-back",{x:waveBack.width / 2, duration: 3,repeat:-1, ease:"none"});
    return tl;
}

function poolLetters(){
    let tl = gsap.timeline();
    tl.from(".pool-letter",{duration:.25,y:30, alpha:0, stagger:0.15}, "+=.75")
}



gsap.set(".wave",{y:30});

var mainTL = gsap.timeline();
mainTL.add(logoLetters())
.add(waterAnimation(),"-=1.5");  

var backWaterTL = gsap.timeline();
backWaterTL.add(waterBackAnimation(),"+=.75");

var lettersTL = gsap.timeline();
lettersTL.add(poolLetters());


// GSDevTools.create();