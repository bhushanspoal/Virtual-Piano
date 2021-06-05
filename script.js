    
    const soundBtn = document.querySelector('#play-sound');
    let A = document.querySelector('#audio');
    soundBtn.addEventListener('click', ()=>{
      A.play();
    });
    const soundBtn1 = document.querySelector('#play-sound1');
    let Ab = document.querySelector('#audio_1');
    soundBtn1.addEventListener('click', ()=>{
      Ab.play();
    });
    const soundBtn2 = document.querySelector('#play-sound2');
    let B = document.querySelector('#audio_2');
    soundBtn2.addEventListener('click', ()=>{
      B.play();
    });
    const soundBtn3 = document.querySelector('#play-sound3');
    let Bb = document.querySelector('#audio_3');
    soundBtn3.addEventListener('click', ()=>{
      Bb.play();
    });
    const soundBtn4 = document.querySelector('#play-sound4');
    let C = document.querySelector('#audio_4');
    soundBtn4.addEventListener('click', ()=>{
      C.play();
    });
    const soundBtn5 = document.querySelector('#play-sound5');
    let D = document.querySelector('#audio_5');
    soundBtn5.addEventListener('click', ()=>{
      D.play();
    });
    const soundBtn6 = document.querySelector('#play-sound6');
    let Db = document.querySelector('#audio_6');
    soundBtn6.addEventListener('click', ()=>{
      Db.play();
    });
    const soundBtn7 = document.querySelector('#play-sound7');
    let E = document.querySelector('#audio_7');
    soundBtn7.addEventListener('click', ()=>{
      E.play();
    });
    const soundBtn8 = document.querySelector('#play-sound8');
    let Eb = document.querySelector('#audio_8');
    soundBtn8.addEventListener('click', ()=>{
      Eb.play();
    });
    const soundBtn9 = document.querySelector('#play-sound9');
    let F = document.querySelector('#audio_9');
    soundBtn9.addEventListener('click', ()=>{
      F.play();
    });
    const soundBtn10 = document.querySelector('#play-sound10');
    let G = document.querySelector('#audio_10');
    soundBtn10.addEventListener('click', ()=>{
      G.play();
    });
    const soundBtn11 = document.querySelector('#play-sound11');
    let Gb = document.querySelector('#audio_11');
    soundBtn11.addEventListener('click', ()=>{
      Gb.play();
    });

    function change1(){
      var r= Math.floor(Math.random()*256);
      var g= Math.floor(Math.random()*256);
      var b= Math.floor(Math.random()*256);
      var mycolour= "rgb(" + r +"," + g+","+ b+")";
      var mycolor1="rgb("+g+ ","+b+","+r+")";
      var mycolor2="rgb("+b+ ","+r+","+g+")";
      var mycolor3="rgb("+r+ ","+b+","+g+")";
      var mycolor4="rgb("+g+ ","+r+","+b+")";
      var mycolor5="rgb("+b+ ","+g+","+r+")";
      var mycolor6="rgb("+r+ ","+b+","+b+")";
      document.getElementById("play-sound").style.background=mycolour; 
      document.getElementById("play-sound2").style.background=mycolor1;
      document.getElementById("play-sound4").style.background=mycolor2;
      document.getElementById("play-sound5").style.background=mycolor3;
      document.getElementById("play-sound7").style.background=mycolor4;
      document.getElementById("play-sound9").style.background=mycolor3;
      document.getElementById("play-sound11").style.background=mycolor2;
      // console.log(mycolour);
    }