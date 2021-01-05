//Movement Animation to happen
const cardInfos = document.querySelectorAll(".info");
const cards = document.querySelectorAll(".card");
//Items
const cardTitles = document.querySelectorAll(".title");
const cardDescriptions = document.querySelectorAll(".info h3");


// For Each Card
for (var i = 0; i < cards.length; i++) {
  cards[i].style.transition = "none";
  
  //Moving Animation Event
  cards[i].addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    for (var i = 0; i < cardInfos.length; i++) {
      cards[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  });

  //Animate In
  cards[i].addEventListener("mouseenter", (e) => {
    for (var i = 0; i < cardInfos.length; i++) {
      cards[i].style.transition = "none";
    }
    //Popout
    for (var i = 0; i < cardTitles.length; i++) {
      cardTitles[i].style.transform = "translateZ(80px)";
    }
    for (var i = 0; i < cardDescriptions.length; i++) {
      cardDescriptions[i].style.transform = "translateZ(50px)";
    }
  });

  //Animate Out
  cards[i].addEventListener("mouseleave", (e) => {
    for (var i = 0; i < cardInfos.length; i++) {
      cards[i].style.transition = "all 0.5s ease";
      cards[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
    //Popback
    for (var i = 0; i < cardTitles.length; i++) {
      cardTitles[i].style.transform = "translateZ(0px)";
    }
    for (var i = 0; i < cardDescriptions.length; i++) {
      cardDescriptions[i].style.transform = "translateZ(0px)";
    }
  });
}
