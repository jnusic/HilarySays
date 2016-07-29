chrome.runtime.onMessage.addListener(function(request,sender){

  if(request.action == 'getKeyWordsFromPage'){
    console.log(request.source)
  }

  adjustPopUp(request.source);
});



function onWindowLoad(){
  chrome.tabs.executeScript(null,{ file: 'getKeyWordsFromPage.js'},function(){
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



}

