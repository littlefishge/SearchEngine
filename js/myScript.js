function validateText(id)
      {
          if($('#'+id).val()==null || $('#'+id).val()=="")
          {
            var div = $("#"+id).closest("div");
            div.removeClass("has-success");
            div.addClass("has-error has-feedback");
            $("#glypcn"+id).remove();
            div.addClass();
            div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
            return false;
          }
          else{
            var div = $("#"+id).closest("div");
            div.removeClass("has-error");
            div.addClass("has-success has-feedback");
            $("#glypcn"+id).remove();
            div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
            return true;
          }
      }

      $(document).ready(
        function()
        {
          $("#contactbtn").click(function()
          {
              if(!validateText("contactname"))
              {
                return false;
              }

              if(!validateText("contactemail"))
              {
                return false;
              }

              if(!validateText("contactsubject"))
              {
                return false;
              }

              if(!validateText("contactmessage"))
              {
                return false;
              }
            $("form#contactform").submit();
          });
        }
        );