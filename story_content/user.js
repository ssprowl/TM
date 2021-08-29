function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZLcYMp8H6S":
        Script1();
        break;
  }
}

function Script1()
{
  //Vars
var abSplash1 = document.querySelector("[data-acc-text='bSplash1.png']");
var abSplash2 = document.querySelector("[data-acc-text='bSplash2.png']");
var aAlert = document.querySelector("[data-acc-text='Alert.png']");
var aSkull = document.querySelector("[data-acc-text='Skull.png']");
var aPhish = document.querySelector("[data-acc-text='Phish.png']");
var aLock = document.querySelector("[data-acc-text='Lock.png']");
var aCert = document.querySelector("[data-acc-text='Cert.png']");
var aShield = document.querySelector("[data-acc-text='Shield.png']");
var aTitle = document.querySelector("[data-acc-text='Explaining XDR Protection']");

//Sets
gsap.set( abSplash1 , {x:"-=600", autoAlpha:0});
gsap.set( abSplash2 , {x:"+=600", autoAlpha:0});
gsap.set( aAlert , {scale: 0, autoAlpha:0});
gsap.set( aSkull, {scale: 0, autoAlpha:0});
gsap.set( aPhish, {scale: 0, autoAlpha:0});
gsap.set( aLock, {scale: 0, autoAlpha:0});
gsap.set( aCert, {scale: 0, autoAlpha:0});
gsap.set( aShield, {scale: 0, autoAlpha:0});
gsap.set( aTitle , {y:"+=50", autoAlpha:0});

//Animations
gsap.to(abSplash1 , {duration: 1 , x:"+=600",scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to(abSplash2 , {duration: 1, delay: .25 , x:"-=600",scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aAlert , {duration: .5, delay: .5 ,scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aSkull, {duration: .5, delay: 2 ,scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aPhish, {duration: .5, delay: 1 ,scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aLock, {duration: .5, delay: 1.75 ,scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aCert, {duration: .5, delay: 1.5 ,scale:1,autoAlpha:1,ease: Power4.easeOut});

//Shield In
gsap.to( aShield, {duration: .5, delay: 2.5 ,scale:1,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aShield, {duration: .5, delay: 3 ,scale:.8,autoAlpha:1,ease: Power4.easeOut});
gsap.to( aAlert , {duration: .75, delay: 2.5 ,y:"+= 400", rotation:"45_cw" ,ease: Back.easeIn});
gsap.to( aSkull, {duration: .75, delay: 2.5 ,y:"+= 600" , rotation:"45_ccw", ease: Back.easeIn});
gsap.to( aPhish, {duration: .75, delay: 2.5 ,y:"+= 700" ,rotation:"90_cw", ease: Back.easeIn});
gsap.to( aLock, {duration: .75, delay: 2.5 ,y:"+= 600", rotation:"60_ccw",ease: Back.easeIn});
gsap.to( aCert, {duration: .75, delay: 2.5 ,y:"+= 400", rotation:"45_cw" ,ease: Back.easeIn});
gsap.to( aTitle, {duration: .75, delay: 2.75 ,y:"-= 50", autoAlpha:1, ease: Power4.easeOut});
}

