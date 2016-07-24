chrome.runtime.onMessage.addListener(function(request,sender){

  if(request.action == 'getKeyWordsFromPage'){
    console.log(request.source)
  }

  adjustPopUp(request.source);
});



function onWindowLoad(){
  chrome.tabs.executeScript(null,{ file: 'getKeyWordsFromPage.js'},function(){
    console.log('getKeyWordsFromPage injected into local page');
  });
}

window.onLoad = onWindowLoad();


function adjustPopUp(wordCount){
  var tags = [
    {"text":"Economy", "link":"https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/"}, 
    {"text":"Education", "link":"https://www.hillaryclinton.com/issues/college/"}, 
    {"text":"Enviroment", "link":"https://www.hillaryclinton.com/issues/climate/"},
    {"text":"Equality", "link":"https://www.hillaryclinton.com/issues/racial-justice/"},
    {"text":"Health", "link":"https://www.hillaryclinton.com/issues/health-care/"},
    {"text":"Jobs", "link":"https://www.hillaryclinton.com/issues/jobs/"},
    {"text":"Security", "link":"https://www.hillaryclinton.com/issues/national-security/"},
    {"text":"Tech", "link":"https://www.hillaryclinton.com/issues/technology-and-innovation/"}
  ] 
  
}

  

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function test() {
//   var returnCount = getRandomInt(1,5);

//   if (returnCount<5) {
//     document.getElementById("empty").style.display = "flex";

//     for (var i = 5; i > returnCount; i--) {
//     document.getElementById('row'+i).style.display = "none";
//     } 
//   };  

//   for (var i = 1; i <= returnCount; i++) {
//     document.getElementById('tagText'+i).innerHTML = tags[i-1].text + "<i style='margin-left:5px;'>(" + getRandomInt(1,6) + ")</i>";
//     document.getElementById('link'+i).innerHTML = "<a href=" + tags[i-1].link + " target='_blank' style='width:35px;height:35px'></a>"
//   };
// }


// window.onload = function() {
//     document.getElementById("button_trump").onclick = function() {
//         document.getElementById("header_img").src = "trumpLogo.png";
//         document.getElementById('link1').style.backgroundImage = "url('arrow3.png')";
//         document.getElementById('link2').style.backgroundImage = "url('arrow3.png')";
//         document.getElementById('link3').style.backgroundImage = "url('arrow3.png')";
//         document.getElementById('link4').style.backgroundImage = "url('arrow3.png')";
//         document.getElementById('link5').style.backgroundImage = "url('arrow3.png')";
//     }
// };

// test(); 