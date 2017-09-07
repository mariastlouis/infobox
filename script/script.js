// create an empty array to fill with objects 

// create an object

// fill the object with info from page

// display the object on the page 

// store the object in local storage

// parse items

// get objects 

// on page load display objects

$(document).ready(function() {
getStoredCards()

});


function getIdea (id) {
	
	var retrieveIdea = JSON.parse(localStorage.getItem(id));

	if (retrieveIdea ) {
		return retrieveIdea;
	} else {
		return [];
	}
}

function getStoredCards () {
	var getCards = getIdea();
	console.log(getCards)

}

// function getStoredCards() {
//     var retrievedCards = JSON.parse(localStorage.getItem("storedCards")) || [];
//     retrievedCards.forEach(function (retrievedCard) {
//         var ideaCard = new IdeaCard(retrievedCard.title, retrievedCard.idea, retrievedCard.id, retrievedCard.quality);
//         $('section').append(populateCard(ideaCard)); 
//     });
// }`


// get local storage
//iterate over it
// get cards
// append cards



$('#submit-button').on('click', addIdea);
// $('.idea-article').on('click', deleteIdea);

var keys = Object.keys(localStorage)
console.log(keys)

keys.forEach(function(key){
localStorage[key]
console.log(localStorage[key])
prependIdea(JSON.parse(localStorage[key]))
})


function Idea (title, body, status ) {
	this.title = title;
	this.body = body; 
	this.status = 'swill'; 
	this.id = Date.now();
}

function addIdea (e) {
	e.preventDefault();
	var title = $('.main-title').val();
	var body = $('.idea-input').val();
	var status = 'swill';
	var anotherIdea = new Idea(title, body, status);
	prependIdea(anotherIdea);
	// console.log(anotherIdea.id)
	// ideaArray.push(anotherIdea)
	storeIdea(anotherIdea.id, anotherIdea);
}

function prependIdea (idea) {
	$('.bookmark-list').prepend(
		`<article id=${idea.id} class="idea-article">
		<h2 class="idea-title">${idea.title}</h2> 
		<div class="delete-button-div icon-buttons delete-button right">
		</div>
		<p contenteditable="true" class="idea-paragraph">${idea.body}</p>
		<div class="quality-rank"> 
		<div class="upvote-button-div icon-buttons upvote-button">
		</div>
		<div class="downvote-button-div icon-buttons downvote-button"> 
		</div>
		<p> quality: <span class = "quality-content">${idea.status}</span> </p> </div>
		<hr /> 
		</article>`)
	$('.main-title').val("");
	$('.idea-input').val("");
}

$('.bookmark-list').on('click', '.delete-button-div', function() {
	$(this).closest('.idea-article').remove();
	localStorage.removeItem(($(this).closest('.idea-article').attr('id')));
});

$('#search-input').on('keyup', function() {
	var searchTitle = ['.idea-title'];
	var searchBody = ['#body-input'];
	var searched = searchTitle.sort();
		console.log('go')


});


function storeIdea (id, card) {
	localStorage.setItem(id, JSON.stringify(card));
}





 







// $('.bookmark-list').on('click', '.upvote-button-div', function() {
// 	$('.quality-content').text(($('.quality-content').text() == 'swill') ? 'genius' : 'plausible');
	
// });

// $('.bookmark-list').on('click', '.downvote-button-div', function() {
// 	$('.quality-content').text(($('.quality-content').text() == 'swill') ? 'swill' : 'swill');
	
// });

$('.bookmark-list').on('click', '.upvote-button-div', function() {
	 	var checkStatus = $(this).closest('.quality-rank').find('.quality-content').text();
	 	if (checkStatus === 'swill') {
     	$(this).closest('.quality-rank').find('.quality-content').text('plausible');
     	} else {
     		$(this).closest('.quality-rank').find('.quality-content').text('genius');
     	}
	});

$('.bookmark-list').on('click', '.downvote-button-div', function() {
  var checkStatus = $(this).closest('.quality-rank').find('.quality-content').text();
  if (checkStatus === 'genius') {
    $(this).closest('.quality-rank').find('.quality-content').text('plausible');
  } else {
  	$(this).closest('.quality-rank').find('.quality-content').text('swill');
  }
});

// };
                










