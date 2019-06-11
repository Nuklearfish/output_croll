
new fullpage('#fullpage', {
  controlArrows: false,
  afterRender:function(){

    
    setInterval( function(){
      
      fullpage_api.moveSectionDown();

      setTimeout(function(){
        fullpage_api.moveSectionUp();
      }, 2000)
      
      setTimeout(function(){
        fullpage_api.moveSlideRight();
      }, 1000)
      
     
    }, 4000);
    

  }
});