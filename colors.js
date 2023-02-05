var Body = {
    setBackgroundColor : function(color) {
    //   document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
    }, 
    setColor : function(color) {
    //   document.querySelector('body').style.color = color;
    $('body').css('color', color);
    }
  }
  var Links = {
    setColor : function(Acolor, Scolor) {
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < alist.length) {
    //     alist[i].style.color = Acolor;
    //     document.querySelector('.saw').style.color = Scolor;
    //     i = i + 1;
    //   }
    $('a').css('color', Acolor);
    $('.saw').css('color', Scolor);
    }
  }
  function NightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.setColor('powderblue', 'pink');

    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('blue', 'red');
    }
  }