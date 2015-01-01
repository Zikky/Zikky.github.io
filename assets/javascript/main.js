/* General note to self: 
  - overly complicated things to use animation/transition etc
  - using transition is difficult because it results in set timeouts in javascript
  but if were to use complete js to move the object, that also is borderline crazy
  - will add a "non fancy" button for just show/hide functionality instead of all
  these transitions
  - to be fair, it's a lot better than a lot of other websites for what it's doing
*/
$(function(){
  $(".logoWrapper").click(function(){
    var $icon = $(this).closest(".projIcon");
    $icon.addClass("active");
    $icon.find(".imgOverlay").addClass("fadeout");
    $(".projContainer").attr("style","height:"+$(".projContainer").height()+"px;");
    $(".projIcon:not(.active)").addClass("fadeout");
    
    setTimeout(function(){
      transition($icon);
    }, 250);

  })

  $(".closeBtn").click(function(){
    var $icon = $(this).closest(".projIcon");
    closeProject($icon);
  })

});

// Overall function to move icon to center
function transition(obj){
  var position = obj.position();
  var height = obj.height();
  var width = obj.width();
  $(".fadeout").addClass("hidden").removeClass("fadeout");
  $(".projContainer .flexWrap").removeClass("flexWrap");
  $(".projContainer .flexItem1").removeClass("flexItem1");
  obj.attr("style","position:absolute; top:"+position.top+"px; left:"+position.left+"px; height:"+height+"px; width:"+width+"px;");
  obj.addClass("projTransition");

  setTimeout(function(){
    obj.attr("style","height:"+height+"px; width:"+width+"px;");
    obj.addClass("endTran");
    openProject();
  }, 100);

}

// Open Project function
function openProject(){
  setTimeout(function(){
    var $icon = $(".projIcon.active");
    $icon.attr("style","");
    $icon.removeClass("projTransition").addClass("openTransition");
    $icon.addClass("beginOpen");
    $icon.find(".logoWrapper").addClass("hidden");

    setTimeout(function(){
      $icon.addClass("open").removeClass("endTran");  
      $icon.removeClass("beginOpen");
      
      setTimeout(function(){
        $icon.find(".closeBtn").removeClass("hidden");  
      }, 1000)
      
    }, 100)

  }, 1000)
}

// Close Project function
function closeProject(obj){
  obj.find(".closeBtn").addClass("hidden");
  obj.addClass("beginClose");
  
  setTimeout(function(){
    obj.removeClass("openTransition").removeClass("open").removeClass("beginClose");
    $(".projIcon").attr("class","projIcon flexItem1 fadeout");
    $(".logoWrapper, .imgOverlay").removeClass("hidden");
    $(".projContainer > div").addClass("flexWrap");

    setTimeout(function(){
      $(".projIcon").removeClass("fadeout");
    }, 100)
    
  },1000)

}