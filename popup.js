chrome.runtime.onMessage.addListener(function(request,sender){

  if(request.action == 'getKeyWordsFromPage'){
    console.log(request.source)
  }

  adjustPopUp(request.source);
});



function onWindowLoad(){
  chrome.tabs.executeScript(null, { file: "jquery-3.1.0.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "getKeyWordsFromPage.js" });
  });
}
window.onLoad = onWindowLoad();


function sortInt(a,b) {
    return a.count + b.count;
}

function adjustPopUp(wordCount){

  console.log(wordCount)
  var tags = [
    {
      text:"Economy", 
      link:"https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/",
      count: wordCount.economy
    }, 
    {
      text:"Education",
      link:"https://www.hillaryclinton.com/issues/college/",
      count: wordCount.education
    }, 
    {
      text:"Enviroment",
      link:"https://www.hillaryclinton.com/issues/climate/",
      count: wordCount.environment
    },
    {
      text:"Equality",
      link:"https://www.hillaryclinton.com/issues/racial-justice/",
      count: wordCount.equality,
    },
    {
      text:"Health",
      link:"https://www.hillaryclinton.com/issues/health-care/",
      count: wordCount.health,
    },
    {
      text:"Jobs",
      link:"https://www.hillaryclinton.com/issues/jobs/",
      count: wordCount.jobs
    },
    {
      text:"Security", 
      link:"https://www.hillaryclinton.com/issues/national-security/",
      count: wordCount.security,
    },
    {
      text:"Tech", 
      link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
      count: wordCount.tech
    }
  ]

  var subTags = [
    { 
      text:"ClimateChange",
      tag:"Enviroment",
      link:"https://www.hillaryclinton.com/issues/climate/",
      count: wordCount.environment_climate_change
    },
    { 
      text:"ProtectingAnimals&Wildlife",
      tag:"Enviroment",
      link:"https://www.hillaryclinton.com/issues/protecting-animals-and-wildlife/",
      count: wordCount.environment_protecting_animals_and_wildlife
    },
    { 
      text:"RuralCommunities",
      tag:"Enviroment",
      link:"https://www.hillaryclinton.com/issues/rural-communities/",
      count: wordCount.environment_rural_communities
    }
  ] 

console.log(subTags);
 //one of these two match or sort functions does nothing 
  var unsortedMatched = tags.filter(function(map){

    if(map.count > 0){
      return map
    }

  });

  console.log(unsortedMatched);

  var sortedMatched = unsortedMatched.sort(sortInt)
  console.log(sortedMatched)


  for(var i =0;i < sortedMatched.length;i++){
    document.getElementById('empty').style.display = 'none';
    document.getElementById('row'+i).style.display = "flex";
    document.getElementById('tagText'+i).innerHTML = sortedMatched[i].text + "<i style='margin-left:5px;'>(" + sortedMatched[i].count + ")</i>";
    document.getElementById('link'+i).innerHTML = "<a href=" + sortedMatched[i].link + " target='_blank' style='width:35px;height:35px'></a>";

  }
//Sandbox for new JS 
var myDiv = document.getElementById('row0');
var elements = document.getElementsByClassName('mini-row-hidden');
var testCount = elements.length;
var testL = document.getElementById('testL');
var testR = document.getElementById('testR');

console.log(elements);
console.log(testCount);

myDiv.onmouseover = function() { 

  testL.style.width = '0';
  testL.style.backgroundColor = '#00A9E0';
  testR.style.marginLeft = '300px';
  testR.style.backgroundColor = '#00A9E0';

  setTimeout(function() {
      elements[0].style.display = 'flex';
      elements[1].style.display = 'flex';
    }, 1000); // a delay of 1000ms = 1s

}
myDiv.onmouseleave = function() {
  testL.style.width = '150px';
  testR.style.marginLeft = '150px';

  elements[0].style.display = 'none';
  elements[1].style.display = 'none';
  }
}