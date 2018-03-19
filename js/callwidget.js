if(! navigator.userAgent.match(/Android/i) &&
            ! navigator.userAgent.match(/webOS/i) &&
            ! navigator.userAgent.match(/iPhone/i) &&
            ! navigator.userAgent.match(/iPod/i) &&
            ! navigator.userAgent.match(/iPad/i) &&
            ! navigator.userAgent.match(/Blackberry/i) )
    {
        var call= document.getElementById("call");
        call.style.display="none";

    }