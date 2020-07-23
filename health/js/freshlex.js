

const container=document.querySelector('.container')
const text=document.querySelector('#text')
const totalTime=10000
const breatheTime=(totalTime/10)*3
const holdTime=totalTime/5
var sample=document.getElementById("foobar");
breatheAnimation()
function breatheAnimation(){
    text.innerText='Breathe In!'
    container.className='container grow'
    setTimeout(()=>{
        text.innerText='Hold your Breath!'
        setTimeout(() => {
            text.innerText='Breathe Out!'
            container.className='container shrink'
            setTimeout(()=>{
                text.innerText='Hold your Breath!'
            },breatheTime)
        },holdTime)
    }, breatheTime)
}
setInterval(breatheAnimation,totalTime)
