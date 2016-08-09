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
        },
        {
          text:"Manufacturing",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/manufacturing/",
          count: wordCount.economy_manufacturing
        },
        {
          text:"SmallBusiness",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/small-business/",
          count: wordCount.economy_small_business
        },
        {
          text:"SocialSecurityAndMedicare",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/social-secutiry-and-medicare/",
          count: wordCount.economy_social_security_and_medicare
        },
        {
          text:"WallStreetReform",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/wall-street/",
          count: wordCount.economy_wall_street_reform
        },
        {
          text:"WorksForEveryone",
          tag:"Economy",
          link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
          count: wordCount.economy_works_for_everyone
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
        },
        {
          text:"EarlyChildhood",
          tag:"Education",
          link:"https://www.hillaryclinton.com/issues/early-childhood-education/",
          count: wordCount.education_early_childhood
        },
        {
          text:"K-12Education",
          tag:"Education",
          link:"https://www.hillaryclinton.com/issues/k-12-education/",
          count: wordCount.education_k_12
        },
        {
          text:"TechnologyInnovation",
          tag:"Education",
          link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
          count: wordCount.education_technology_and_innovation
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
        },
        {
          text:"ImmigrationReform",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/immigration-reform/",
          count: wordCount.equality_immigration_reform
        },
        {
          text:"LFBTEquality",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/lgbt-equality/",
          count: wordCount.equality_lgbt_rights_and_equality
        },
        {
          text:"RacialJustice",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/racial-justice/",
          count: wordCount.equality_racial_justice
        },
        {
          text:"VotingRights",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/voting-rights/",
          count: wordCount.equality_voting_rights
        },
        {
          text:"WomanRightsAndOpportunity",
          tag:"Equality",
          link:"https://www.hillaryclinton.com/issues/womens-rights-and-opportunity/",
          count: wordCount.equality_womens_rights_and_opportunity
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
        },
        {
          text:"Autism",
          tag:"Health",
          link:"https://www.hillaryclinton.com/issues/autism/",
          count: wordCount.health_autism
        },
        {
          text:"DisabilityRights",
          tag:"Health",
          link:"https://www.hillaryclinton.com/issues/disability-rights/",
          count: wordCount.health_disability_rights
        },
        {
          text:"HealthCare",
          tag:"Health",
          link:"https://www.hillaryclinton.com/issues/health-care/",
          count: wordCount.health_care
        },
        {
          text:"HivAndAids",
          tag: "Health",
          link:'https://www.hillaryclinton.com/issues/fighting-hiv-and-aids/',
          count: wordCount.health_hiv_and_aids

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
          link:"https://www.hillaryclinton.com/issues/paid-leave/",
          count: wordCount.jobs_paid_family_and_medical_leave
        },
        {
          text:"LaborWorkerRights",
          tag:"Jobs",
          link:"https://www.hillaryclinton.com/issues/labor/",
          count: wordCount.jobs_labor_and_workers_rights
        },
        {
          text:"Veterans",
          tag:"Jobs",
          link:"https://www.hillaryclinton.com/issues/veterans/",
          count: wordCount.jobs_veterans_the_armed_forces_and_their_families
        },
        {
          text:"Wages",
          tag:"Jobs",
          link:"https://www.hillaryclinton.com/issues/wages/",
          count: wordCount.jobs_wages
        },
        {
          text:"WorkForceAndSkills",
          tag:"Jobs",
          link:"https://www.hillaryclinton.com/issues/workforce-and-skills/",
          count: wordCount.jobs_workforce_skills_and_jobs_training
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
        {
          text:"MilitaryAndDefense",
          tag:"Security",
          link:"https://www.hillaryclinton.com/issues/military-and-defense/",
          count: wordCount.security_miliary_and_defense
        },
        {
          text:"NationalSecurity",
          tag:"Security",
          link:"https://www.hillaryclinton.com/issues/national-security/",
          count: wordCount.security_national_security
        }
      ]
    },
    {
      text:"Tech", 
      link:"https://www.hillaryclinton.com/issues/technology-and-innovation/",
      count: wordCount.tech,
      
    }
  ]

var tagsTotal = 0;

for (var i=0;i<7;i++) {
  if (tags[i].count > 0) {
    tagsTotal++;
  }
};
console.log(tagsTotal);

chrome.browserAction.setIcon({path:"icon" + tagsTotal + ".png"});

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
  var sortedMatched = unsortedMatched.sort(sortInt);

  for(var i =0;i < sortedMatched.length;i++){
    document.getElementById('empty').style.display = 'none';
   
    var resultsDiv = 
        `<div class="resultContainer" id="`+sortedMatched[i].text+`Results">`+ 
          `<div class="row" id="row`+sortedMatched[i].text+`">` +
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
          `</div>`+
        `</div>`;  

    if(sortedMatched[i].subTags.length > 0){
       $(".results_body").append(resultsDiv);  
    }                  
  }

  //Start same as function above ^^ going run for each tag in sortedMatched
  for(var x=0; x<sortedMatched.length;x++){

    //going loop through each of the subtags in each tag
    for(var y=0; y<sortedMatched[x].subTags.length;y++){

     //div that going to be returned if the subtag is greater than 1 
      var subResultsDiv = `<div class="mini-row-hidden" id="subRow`+sortedMatched[x].subTags[y].text+`">` +
                              `<p class="ampersand_color_mini">#</p>` +
                              `<p class="sub-tag">`+sortedMatched[x].subTags[y].text+
                                  `<i style='margin-left:5px;'>` +
                                    `(`+sortedMatched[x].subTags[y].count+`)`  + 
                                  `</i>`+
                              `</p>` +
                              `<div class="mini-button">`+
                                 `<a href="`+sortedMatched[x].subTags[y].link+`" target="_blank" style='width:35px;height:35px'></a>` + 
                              `</div>`+
                          `</div>`;

    
      var SubContainerName = `#`+sortedMatched[x].text+`SubContainer`;

      if(sortedMatched[x].subTags[y].count > 0 ){
        $(SubContainerName).append(subResultsDiv);            
      }                     
    }
  }
   
  
 
 

 //Hover function for EDUCATION div
   $(function() {
     $('#EducationSubContainer').hide();
      var timeoutId;
      $("#EducationResults, #EducationSubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#EducationSubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#EducationSubContainer').slideUp("slow");
          }
      });
  });
//hover function for ECONOMY div
 $(function() {
     $('#EconomySubContainer').hide();
      var timeoutId;
      $("#EconomyResults, #EconomySubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#EconomySubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#EconomySubContainer').slideUp("slow");
          }
      });
  });


 //Hover function for ENVIRONMENT div
  $(function() {
     $('#EnviromentSubContainer').hide();
      var timeoutId;
      $("#EnviromentResults, #EnviromentSubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#EnviromentSubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#EnviromentSubContainer').slideUp("slow");
          }
      });
  });
  //Hover function for EQUALITY div
  $(function() {
     $('#EqualitySubContainer').hide();
      var timeoutId;
      $("#EqualityResults, #EqualitySubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#EqualitySubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#EqualitySubContainer').slideUp("slow");
          }
      });
  });
//Hover function for HEALTH div
  $(function() {
     $('#HealthSubContainer').hide();
      var timeoutId;
      $("#HealthResults, #HealthSubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#HealthSubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#HealthSubContainer').slideUp("slow");
          }
      });
  });
//Hover function for JOBS div
  $(function() {
     $('#JobsSubContainer').hide();
      var timeoutId;
      $("#JobsResults, #JobsSubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#JobsSubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#JobsSubContainer').slideUp("slow");
          }
      });
  });
//Hover function for SECURITY div
  $(function() {
     $('#SecuritySubContainer').hide();
      var timeoutId;
      $("#SecurityResults, #SecuritySubContainer").hover(function() {
          if (!timeoutId) {
              timeoutId = window.setTimeout(function() {
                  timeoutId = null;
                  $("#SecuritySubContainer ").slideDown('slow');
             }, 700);
          }
      },
      function () {
          if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
          }
          else{
             $('#SecuritySubContainer').slideUp("slow");
          }
      });
  });

}


