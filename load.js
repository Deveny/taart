 var folder = "mk-square/";
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".album").append( "<img class='faseeen' src='"+ val +"'>" );
            } 
        });
    }
    
    });
