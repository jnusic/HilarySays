//Listener for getKeyWordsFromPage
chrome.runtime.onMessage.addListener(function(request,sender){

  if(request.action == 'getKeyWordsFromPage'){
  }

  adjustPopUp(request.source);
});


//injects getKeyWordsFromPage 
function onWindowLoad(){
  chrome.tabs.executeScript(null, { file: "jquery-3.1.0.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "getKeyWordsFromPage.js" });
  });
}
window.onLoad = onWindowLoad();


//sort based on the count of the object



//handles the data from getKeyWordsFromPage
function adjustPopUp(wordCount){

  var tags = [
    {
      text:"Economy", 
      link:"https://www.hillaryclinton.com/issues/an-economy-that-works-for-everyone/",
      count: wordCount.economy,
      subTags:[
        {
          text:"AFairTaxSystem",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/a-fair-tax-system/",
          count: wordCount.economy_a_fair_tax_system
        },
        {
          text:"FixingInfrastructure",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/fixing-americas-infrastructure/",
          count: wordCount.economy_fixing_americas_infrastructure
        }
      ]
    }, 
    {
      text:"Education",
      link:"https://www.hillaryclinton.com/issues/college/",
      count: wordCount.education,
      subTags:[
        {
          text:"CampusSexualAssult",
          tag:"Education",
          link:"https://www.hillaryclinton.com/issues/campus-sexual-assault/",
          count: wordCount.education_campus_sexual_assault
        },
        {
          text:"CollegeDebt",
          tag:"Education",
          link:"https://www.hillaryclinton.com/issues/college/",
          count: wordCount.education_college_debt
        }
      ]
    }, 
    {
      text:"Enviroment",
      link:"https://www.hillaryclinton.com/issues/climate/",
      count: wordCount.environment,
      subTags:[
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
    },
    {
      text:"Equality",
      link:"https://www.hillaryclinton.com/issues/racial-justice/",
      count: wordCount.equality,
      subTags:[
        {
          text:"CampaignFinanceReform",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/campaign-finance-reform/",
          count: wordCount.equality_campaign_finance_reform
        },
        {
          text:"CriminalJusticeReform",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/criminal-justice-reform/",
          count: wordCount.equality_criminal_justice_reform
        }
      ]
    },
    {
      text:"Health",
      link:"https://www.hillaryclinton.com/issues/health-care/",
      count: wordCount.health,
      subTags:[
        {
          text:"AddictionAndSubstanceUse",
          tag:"Health",
          link:"https://www.hillaryclinton.com/issues/addiction/",
          count: wordCount.health_addiction_and_substance_use
        },
        {
          text:"EndToAlzheimers",
          tag:"Health",
          link:"https://www.hillaryclinton.com/issues/alzheimers-disease/",
          count: wordCount.health_an_end_to_alzheimers
        }
      ]
    },
    {
      text:"Jobs",
      link:"https://www.hillaryclinton.com/issues/jobs/",
      count: wordCount.jobs,
      subTags:[
        {
          text:"PaidLeave",
          tag:"Jobs",
          link:"https://www.hillaryclinton.com/issues/paid-leave",
          count: wordCount.jobs_paid_family_and_medical_leave
        },
        {
          text:"LaborWorkerRights",
          tag:"Jobs",
          link:"https://www.hillaryclinton.com/issues/labor",
          count: wordCount.jobs_labor_and_workers_rights
        }
      ]
    },
    {
      text:"Security", 
      link:"https://www.hillaryclinton.com/issues/national-security/",
      count: wordCount.security,
      subTags:[
        {
          text:"CombatingTerrorism",
          tag:"Security",
          link:"https://www.hillaryclinton.com/issues/combating-terrorism",
          count: wordCount.security_combating_terrorism
        },
        {
          text:"GunViolencePrevention",
          tag:"Security",
          link:"https://www.hillaryclinton.com/issues/gun-violence-prevention/",
          count: wordCount.security_gun_violence
        },
      ]
    },
    {
      text:"Tech", 
      link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
      count: wordCount.tech,
      
    }
  ]

  // var subTags = [
  //   { 
  //     text:"ClimateChange",
  //     tag:"Enviroment",
  //     link:"https://www.hillaryclinton.com/issues/climate/",
  //     count: wordCount.environment_climate_change
  //   },
  //   { 
  //     text:"ProtectingAnimals&Wildlife",
  //     tag:"Enviroment",
  //     link:"https://www.hillaryclinton.com/issues/protecting-animals-and-wildlife/",
  //     count: wordCount.environment_protecting_animals_and_wildlife
  //   },
  //   { 
  //     text:"RuralCommunities",
  //     tag:"Enviroment",
  //     link:"https://www.hillaryclinton.com/issues/rural-communities/",
  //     count: wordCount.environment_rural_communities
  //   }
  // ] 


  //Sort functions 
  var unsortedMatched = tags.filter(function(map){
    if(map.count > 0){
      return map
    }
  });


  function sortInt(a,b) {
    return  b.count - a.count;
  }
  //End of the sort functions 
  var sortedMatched = unsortedMatched.sort(sortInt)

  
                   


  for(var i =0;i < sortedMatched.length;i++){
    document.getElementById('empty').style.display = 'none';

    var resultsDiv = `<div class="row" id="row`+sortedMatched[i].text+`">` +
                        `<div class="tag">` +
                            `<p class="ampersand_color">#</p>` +
                            `<p class="tagText`+i+`">` +
                                sortedMatched[i].text +
                                `<i style='margin-left:5px;'>` +
                                     `(`+sortedMatched[i].count+`)`  + 
                                `</i>`+
                            `</p>`+
                        `</div>` +
                        `<div class="button primary" id="link`+i+`">` +
                            `<a href="`+sortedMatched[i].link+`" target="_blank" style='width:35px;height:35px'></a>` +
                        `</div>` +
                      `</div>` +
                      `<div class="row-line"></div>`+
                      `<div class="mini-row-container" id="`+sortedMatched[i].text+`SubContainer">`+
                      `</div>`;

    $(".results_body").append(resultsDiv);
   

    

    
  }

  for(var x=0; x<sortedMatched.length;x++){
    console.log(sortedMatched[x]);
    if(sortedMatched[x].subTags.length > 0){
      console.log(sortedMatched[x].subTags);

      for(var y=0; y<sortedMatched[x].subTags.length;y++){

        var subResultsDiv = `<div class="mini-row-hidden" id="subRow`+sortedMatched[x].subTags[y].text+`">` +
                                `<p class="ampersand_color_mini">#</p>` +
                                `<p class="sub-tag">`+sortedMatched[x].subTags[y].text+`</p>` +
                                `<div class="mini-button">`+
                                   `<a href="`+sortedMatched[x].subTags[y].link+`" target="_blank" style='width:35px;height:35px'></a>` + 
                                `</div>`+
                            `</div>`;
        var SubContainerName = `"#`+sortedMatched[x].text+`SubContainer"`                     
        $("#EducationSubContainer").append(subResultsDiv);                     
      }
    }
  }

 



  //Sandbox for new JS 
  // var myDiv = document.getElementById('row0');
  // var elements = document.getElementsByClassName('mini-row-hidden');
  // var testCount = elements.length;
  // var testL = document.getElementById('testL');
  // var testR = document.getElementById('testR');

  // console.log(elements);
  // console.log(testCount);

  // myDiv.onmouseover = function() { 

  //   testL.style.width = '0';
  //   testL.style.backgroundColor = '#00A9E0';
  //   testR.style.marginLeft = '300px';
  //   testR.style.backgroundColor = '#00A9E0';

  //   setTimeout(function() {
  //       elements[0].style.display = 'flex';
  //       elements[1].style.display = 'flex';
  //     }, 1000); // a delay of 1000ms = 1s

  // }

  // myDiv.onmouseleave = function() {
  //   testL.style.width = '150px';
  //   testR.style.marginLeft = '150px';

  //   elements[0].style.display = 'none';
  //   elements[1].style.display = 'none';
  //   }
}


