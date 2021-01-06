// REBUILD
// Base concept — https://stackoverflow.com/questions/50177348/mouseenter-delegation-using-vanilla-javascript

document.body.addEventListener("mousemove", function(e) {
  if(e.target.className === "card") {
    console.log("mousemoved");

    let rect = e.target.getBoundingClientRect();
    let xAxis = (e.clientX - rect.left) / 25;
    let yAxis = (e.clientY / 2 - rect.top) / 25;
    
    e.target.style.transition = "none";
    e.target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
},true); // capturing phase

//Animate In
document.body.addEventListener("mouseenter", function(e) {
  if(e.target.className === "card") {
      console.log("mouseentered");

    e.target.style.transition = "none";
    //Popout
    e.target.querySelector(".info h1").style.transform = "translateZ(80px)";
    e.target.querySelector(".info h3").style.transform = "translateZ(50px)";
  }
},true); // capturing phase

//Animate out
document.body.addEventListener("mouseleave", function(e) {
  if(e.target.className === "card") {
      console.log("mouseleaveed");
      
      e.target.style.transition = "all 0.5s ease";
      e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;
      e.target.querySelector(".info h1").style.transform = "translateZ(0px)";
      e.target.querySelector(".info h3").style.transform = "translateZ(0px)";
  }
},true); // capturing phase



//Movement Animation to happen
// const cards = document.querySelectorAll(".card");
// const cardInfos = document.querySelectorAll(".info");
// //Items
// const cardTitles = document.querySelectorAll(".title");
// const cardDescriptions = document.querySelectorAll(".info h3");

// For Each Card
// for (var i = 0; i < cards.length; i++) {
//   cards[i].style.transition = "none";

//   //Moving Animation Event
//   cards[i].addEventListener("mousemove", (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

//     for (var i = 0; i < cardInfos.length; i++) {
//       cards[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//     }
//   });

//   //Animate In
//   cards[i].addEventListener("mouseenter", (e) => {
//     for (var i = 0; i < cardInfos.length; i++) {
//       cards[i].style.transition = "none";
//     }
//     //Popout
//     for (var i = 0; i < cardTitles.length; i++) {
//       cardTitles[i].style.transform = "translateZ(80px)";
//     }
//     for (var i = 0; i < cardDescriptions.length; i++) {
//       cardDescriptions[i].style.transform = "translateZ(50px)";
//     }
//   });

//   //Animate Out
//   cards[i].addEventListener("mouseleave", (e) => {
//     for (var i = 0; i < cardInfos.length; i++) {
//       cards[i].style.transition = "all 0.5s ease";
//       cards[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
//     }
//     //Popback
//     for (var i = 0; i < cardTitles.length; i++) {
//       cardTitles[i].style.transform = "translateZ(0px)";
//     }
//     for (var i = 0; i < cardDescriptions.length; i++) {
//       cardDescriptions[i].style.transform = "translateZ(0px)";
//     }
//   });
// } 
