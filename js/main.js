function makeid(input, digits, symbols) {
  var text = "";
  if(digits == "no" && symbols == "no"){
    var normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }else if(digits == "yes" && symbols == "no"){
    var normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789";
  }else if(digits == "no" && symbols == "yes"){
    var normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:<>/!@#$%^&*()_+{}:<>/";
  }else if(digits=="yes" && symbols == "yes"){
    var normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:<>/1234567890";
  }

  for (var i = 0; i < input; i++)
    text += normal.charAt(Math.floor(Math.random() * normal.length));

  meter(text);
  return text;
}


function meter(password) {
  console.log(password);
  var desc = [{'width':'2%', "background-color": "red"}, {'width':'20%', "background-color": "#ff4800"}, {'width':'40%', "background-color": "#ff9000"}, {'width':'60%', "background-color": "#ffbb00"}, {'width':'80%', "background-color": "#7fff00"}, {'width':'100%', "background-color": "#0cff00"}];
  
  var descClass = ['bad', 'progress-bar-danger', 'progress-bar-danger', 'progress-bar-warning', 'progress-bar-success', 'progress-bar-success'];

  var score = 0;

  //if password bigger than 6 give 1 point
  if (password.length > 8) score++;

  //if password has both lower and uppercase characters give 1 point  
  if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) score++;

  //if password has at least one number give 1 point
  if (password.match(/\d+/)) score++;

  //if password has at least one special caracther give 1 point
  if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;

  //if password bigger than 18 give another 1 point
  if (password.length > 18) score++;
  
  // display indicator
  $("#passwordMeter").removeClass(descClass[score-1]).addClass(descClass[score]).css(desc[score]);
}

function meterOnLoad(password) {

  var desc = [{'width':'2%', "background-color": "red"}, {'width':'20%', "background-color": "#ff4800"}, {'width':'40%', "background-color": "#ff9000"}, {'width':'60%', "background-color": "#ffbb00"}, {'width':'80%', "background-color": "#7fff00"}, {'width':'100%', "background-color": "#0cff00"}];
  
  var descClass = ['bad', 'progress-bar-danger', 'progress-bar-danger', 'progress-bar-warning', 'progress-bar-success', 'progress-bar-success'];

  var score = 0;

  if (password.length > 8) score++;

  if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) score++;

  if (password.match(/\d+/)) score++;

  if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;

  if (password.length > 18) score++;
  
  $("#passwordMeter").removeClass(descClass[score-1]).addClass(descClass[score]).css(desc[score]);
}



(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);