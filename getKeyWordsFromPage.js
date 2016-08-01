chrome.runtime.sendMessage({
	action: 'getKeyWordsFromPage',
	source: textNodes(document)
})


function textNodes(document){
	var textArray = [];

	//get all the text of the body of the page currently on 
	var textInHtml = document.body.innerText;
	var splitText = textInHtml.split(' ');

	

	var wordCount = {

		economy:0,
		economy_a_fair_tax_system:0,
		economy_fixing_americas_infrastructure:0,
		economy_manufacturing:0,
		economy_small_business:0,
		economy_social_security_and_medicare:0,
		economy_wall_street_reform:0,
		economy_works_for_everyone:0,

    	education:0,
    	education_campus_sexual_assault:0,
    	education_college_debt:0,
    	education_early_childhood:0,
    	education_k_12:0,
    	education_technology_and_innovation:0,

    	environment: 0,
    	environment_climate_change:0,
    	environment_protecting_animals_and_wildlife:0,
    	environment_rural_communities:0,

    	equality: 0,
    	equality_campaign_finance_reform:0,
    	equality_criminal_justice_reform:0,
    	equality_immigration_reform:0,
    	equality_lgbt_rights_and_equality:0,
    	equality_racial_justice:0,
    	equality_voting_rights:0,
    	equality_womens_rights_and_opportunity:0,

    	health: 0,
    	health_addiction_and_substance_use:0,
    	health_an_end_to_alzheimers:0,
    	health_autism:0,
    	health_disability_rights:0,
    	health_health_care:0,
    	health_hiv_and_aids:0,

    	jobs: 0,
    	jobs_paid_family_and_medical_leave:0,
    	jobs_labor_and_workers_rights:0,  
    	jobs_veterans_the_armed_forces_and_their_families:0, 
    	jobs_wages:0,
    	jobs_workforce_skills_and_jobs_training:0, 

    	security: 0,
    	security_combating_terrorism:0,
    	security_gun_violence:0,
    	security_miliary_and_defense:0,
    	security_national_security:0
	}	

	for(var q = 0;q < splitText.length; q++){
		var currentText = splitText[q]

		if(currentText.match(/^(economy|money|business|cash)$/)){
			wordCount.economy++
		}
		if(currentText.match(/^(education|study|learning|reading)$/)){
			wordCount.education++
		}
		if(currentText.match(/^(environment|climate|earth|weather)$/)){
			wordCount.environment++
		}
		if(currentText.match(/^(equality|civil|rights|matter|peace)$/)){
			wordCount.equality++
		}
		if(currentText.match(/^(health|energy|fat|sick)$/)){
			wordCount.health++
		}
		if(currentText.match(/^(job|work|business|career)$/)){
			wordCount.jobs++
		}
		if(currentText.match(/^(security|freedom|care|isis)$/)){
			wordCount.security++
		}
		if(currentText.match(/^(tech|startup|internet|online)$/)){
			wordCount.tech++
		}
	}

	return wordCount;
}