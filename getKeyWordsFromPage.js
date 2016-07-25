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
    	education: 0,
    	environment: 0,
    	equality: 0,
    	health: 0,
    	jobs: 0,
    	security: 0,
    	tech: 0,
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