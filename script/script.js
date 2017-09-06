// create an empty array to fill with objects 

// create an object

// fill the object with info from page

// display the object on the page 

// store the object in local storage

// parse items

// get objects 

// on page load display objects

$(document).ready(function() {
    getIdea();
    console.log(getIdea())
});

function loopData (array) {


}

var ideaArray = [];

// var title = $('.main-title').val();
// 	var body = $('.idea-input').val();
// 	var status = 'swill';

$('#submit-button').on('click', addIdea);
// $('.idea-article').on('click', deleteIdea);


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
	ideaArray.push(anotherIdea)
	storeIdea();
}

function prependIdea (idea) {
	$('.bookmark-list').prepend(
		`<article class="idea-article">
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
});


function storeIdea () {
	localStorage.setItem("ideaArray", JSON.stringify(ideaArray));
}

function getIdea () {
	var retrieveIdea = JSON.parse(localStorage.getItem("ideaArray"));

	if (retrieveIdea ) {
		return retrieveIdea;
	} else {
		return [];
	}
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
                










