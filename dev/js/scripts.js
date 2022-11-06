import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools,MorphSVGPlugin);


var wave = document.querySelector("#wave");
wave = wave.getBBox();
console.log(wave.width);



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

    gsap.set("#wave",{y:30});

    var tl = gsap.timeline();
    tl.to("#wave",{x:-wave.width / 2, duration: 5,ease:"none",y:0})
        .set("#wave",{x:0})
        .to("#wave",{x:-wave.width / 2, duration: 10,repeat:-1, ease:"none"});
    return tl;
}





var mainTL = gsap.timeline();
mainTL.add(logoLetters())
.add(waterAnimation(),"-=0.75");


// GSDevTools.create();