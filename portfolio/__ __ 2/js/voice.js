var init = function() {
  // --------------희영----------------------
    var _id = 0;
    function aa(){
        console.log("button cliked");
    }
    var arrownxt = document.getElementById('nxt');
    arrownxt.addEventListener('click', aa);
    function nextclick(){
      console.log("넘어가유");
      voiceIs=false;
      $('.arrow.next').trigger('click');
    }
// ----------

    (function($){
        $(document).ready(function(){
            $('.banner-wrap').width($('.banner').width()).height($('.banner').height());
            $('.banner-container').width($('.banner-wrap').width() * $('.banner-item').length).height('100%');
            $('.banner-item').css({'width' : $('.banner-wrap').width(), 'height' : '100%'});
            var _max = $('.banner-item').length;
            var _isAni = false;
            var slideRight = function(){
                if(_isAni) return false;
                if(_id === _max - 1){
                    return false;
                }else{
                    _id++;
                    slide();
                }
            }

            var slide = function(bool = false){
                if(!bool){
                    _isAni = true;
                    // if(_id==2){
                    //
                    // }else {
                    //   $('.banner-container').stop(true).animate({'margin-left' : $('.banner').width() * _id * -1}, 500, function(){
                    //   _isAni = false;
                    //   });
                    // }
                    $('.banner-container').stop(true).animate({'margin-left' : $('.banner').width() * _id * -1}, 500, function(){
                    _isAni = false;
                    });
                }else{
                    $('.banner-container').stop(true).css({'margin-left' : $('.banner').width() * _id * -1});
                    _isAni = false;
                }
            }
            $(window).trigger('resize');
            $('.arrow.next').on('click', slideRight);
        });
    })(jQuery);

    //---------------voice--------------

  navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({
        audio: true
      },
      function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.9;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);

        javascriptNode.onaudioprocess = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            var values = 0;
            var average = 0;
            var length = array.length;
            for (var i = 0; i < length; i++) {
              values += (array[i]);
            }

            function menuOne(){
              console.log("악");
                $('.pop').attr('src','./img/banner/banner-05.jpg');
                setTimeout(nextclick, 2000);
            }
            function menuTwo(){
                $('.pop').attr('src','./img/banner/banner-19.gif');
                setTimeout(nextclick, 2000);
            }
            // console.log(values);
            var average = values / length;
            var voiceIs = false;
              if(average>=30){
                voiceIs = true;
                console.log("voice inputed");
                console.log(_id);
                console.log(voiceIs);
                checkVoice();
                voiceIs = false;
              }else {
                  voiceIs = false;
                  console.log(voiceIs);
              }
                function checkVoice(){
                  if(voiceIs===true){
                    voiceIs = false;
                    switch (_id) {
                    case 2 :
                     if($(".pop").css('display')=="none"){
                        $('.pop').attr('src','./img/banner/banner-04.gif');
                     $(".pop").css('display', 'block'); console.log("안보여");  }
                     else{
                       nextclick();
                         $(".pop").css('display', 'none');
                     }
                    //  setTimeout(menuOne, 2000);
                    break;
                    case 5 :
                    if($(".pop").css('display')=="none"){
                       $('.pop').attr('src','./img/banner/banner-08.jpg');
                    $(".pop").css('display', 'block'); console.log("안보여");  }
                    else{
                      nextclick();
                        $(".pop").css('display', 'none');
                    }
                    break;
                    case 8 :
                    if($(".pop").css('display')=="none"){
                       $('.pop').attr('src','./img/banner/banner-10.jpg');
                    $(".pop").css('display', 'block'); console.log("안보여");  }
                    else{
                      nextclick();
                        $(".pop").css('display', 'none');
                    }
                    break;
                    case 10 :
                    if($(".pop").css('display')=="none"){
                       $('.pop').attr('src','./img/banner/banner-12.jpg');
                    $(".pop").css('display', 'block'); console.log("안보여");  }
                    else{
                      nextclick();
                        $(".pop").css('display', 'none');
                    }
                    break;
                    case 12 :
                    if($(".pop").css('display')=="none"){
                       $('.pop').attr('src','./img/banner/banner-14.gif');
                    $(".pop").css('display', 'block'); console.log("안보여");  }
                    else{
                      nextclick();
                        $(".pop").css('display', 'none');
                    }
                    break;
                    case 14 :
                    if($(".pop").css('display')=="none"){
                       $('.pop').attr('src','./img/banner/banner-16.jpg');
                    $(".pop").css('display', 'block'); console.log("안보여");  }
                    else{
                      nextclick();  $(".pop").css('display', 'none');
                    }
                    break;
                    case 16 :
                    if($(".pop").css('display')=="none"){
                       $('.pop').attr('src','./img/banner/banner-18.gif');
                    $(".pop").css('display', 'block'); console.log("안보여");  }
                    else{
                      nextclick();
                        $(".pop").css('display', 'none');
                    }
                    break;
                    default :
                    nextclick();
                    break;
                    }
                  }
                }




             // case 5 :
             // $('.pop').attr('src','./img/banner/banner-08.jpg');
             // $(".pop").css('display', 'block');
             // console.log("popopo");
             // // setTimeout(nextclick, 2000);
             // break;
             // case 8 :
             // $('.pop').attr('src','./img/banner/banner-10.jpg');
             // $(".pop").css('display', 'block');
             // console.log("popopo");
             // // setTimeout(nextclick, 2000);
             // break;
             // case 10 :
             // $('.pop').attr('src','./img/banner/banner-12.jpg');
             // $(".pop").css('display', 'block');
             // console.log("popopo");
             // // setTimeout(nextclick, 2000);
             // break;
             // case 12 :
             // $('.pop').attr('src','./img/banner/banner-14.gif');
             // $(".pop").css('display', 'block');
             // console.log("popopo");
             // // setTimeout(nextclick, 2000);
             // break;
             // case 14 :
             // $('.pop').attr('src','./img/banner/banner-16.jpg');
             // $(".pop").css('display', 'block');
             // console.log("popopo");
             // // setTimeout(nextclick, 2000);
             // break;
             // case 16 :
             // $('.pop').attr('src','./img/banner/banner-18.jpg');
             // $(".pop").css('display', 'block');
             // console.log("popopo");
             // // setTimeout(nextclick, 2000);
             // break;


//
          } // end fn stream
      },
      function(err) {
        console.log("The following error occured: " + err.name)
      });
  } else {
    console.log("getUserMedia not supported");
  }

}
document.addEventListener('DOMContentLoaded', init);
