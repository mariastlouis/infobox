$('.idea-input').keyup(enabledBtn);
$('.main-title').keyup(enabledBtn);

$(document).ready(function() {

getIdea();

});


function getIdea (id) {
	
	var retrieveIdea = JSON.parse(localStorage.getItem(id));

	if (retrieveIdea ) {
		return retrieveIdea;
	} else {
		return [];
	}
}

function enabledBtn() {
    if ( $('.idea-input').val() === "" && $('.main-title').val() === "") {
      $('#submit-button').attr("disabled", true)
    } else {
      $('#submit-button').attr("disabled", false);
    }
}
$('#submit-button').on('click', addIdea);
$('#submit-button').on('click', disableSubmit);
function disableSubmit () {
    $('#submit-button').attr('disabled', true)
}
	
var keys = Object.keys(localStorage)

keys.forEach(function(key){
localStorage[key]
prependIdea(JSON.parse(localStorage[key]))
});


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
	storeIdea(anotherIdea.id, anotherIdea);
}

function prependIdea (idea) {
	$('.bookmark-list').prepend(
		`<article id=${idea.id} class="idea-article">
		<h2 class="idea-title" contenteditable=true >${idea.title}</h2> 
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


function storeIdea (id, card) {
	localStorage.setItem(id, JSON.stringify(card));
}

// $('.main-title', '.idea-input').on('keyup', function (e) {
	
// 	if (e.keyCode === 13 && ($('.main-title').val() && $('.idea-input').val())){
// 		addIdea(e)
// 	}

// });


$('.bookmark-list').on('click', '.upvote-button-div', function() {
	 	var checkStatus = $(this).closest('.quality-rank').find('.quality-content').text();
	 	var id = ($(this).closest('.idea-article').attr('id'));
	 	var uniqueCard = JSON.parse(localStorage.getItem(id));
	 	

	 	if (checkStatus === 'swill') {
     	
     	$(this).closest('.quality-rank').find('.quality-content').text('plausible');
     	uniqueCard.status = 'plausible';
		localStorage.setItem(id, JSON.stringify(uniqueCard));

     	} else {
     		$(this).closest('.quality-rank').find('.quality-content').text('genius');
     		uniqueCard.status = 'genius';
     		localStorage.setItem(id, JSON.stringify(uniqueCard));
     	}
	});


$('.bookmark-list').on('click', '.downvote-button-div', function() {
  	var checkStatus = $(this).closest('.quality-rank').find('.quality-content').text();
  	var id = ($(this).closest('.idea-article').attr('id'));
	var uniqueCard = JSON.parse(localStorage.getItem(id));


  if (checkStatus === 'genius') {
	$(this).closest('.quality-rank').find('.quality-content').text('plausible');
	uniqueCard.status = 'plausible';
	localStorage.setItem(id, JSON.stringify(uniqueCard));
  } else {
  	$(this).closest('.quality-rank').find('.quality-content').text('swill');
  	uniqueCard.status = 'swill';
	localStorage.setItem(id, JSON.stringify(uniqueCard));
  }
});

$('.bookmark-list').on('keyup', '.idea-paragraph', editBody);

function editBody(event) {
var id = ($(this).closest('.idea-article').attr('id'));
var uniqueCard = JSON.parse(localStorage.getItem(id));
if (event.keyCode === 13) {
	event.preventDefault();
	this.blur();
}
uniqueCard.body = $(this).text();
localStorage.setItem(id, JSON.stringify(uniqueCard));
}


$('.bookmark-list').on('keyup', '.idea-title', editTitle);

function editTitle (event){
var id = ($(this).closest('.idea-article').attr('id'));
var uniqueCard = JSON.parse(localStorage.getItem(id));
if (event.keyCode === 13) {
	event.preventDefault();
	this.blur();
}
uniqueCard.title = $(this).text();
localStorage.setItem(id, JSON.stringify(uniqueCard));
}

function realtimeSearch() {
    var searchTerm = $('.search-box').val().toUpperCase();
    console.log(searchTerm);
    $('.idea-article').each ( function (index, element) {

	if (doYouMatch(searchTerm, index)) {
            $(element).removeClass('card-display-none');
        } else {
            $(element).addClass('card-display-none');
           
        };

   })
};




$('.search-box').on('keyup', realtimeSearch)

 function doYouMatch (searchTerm, index) {
    
var title = $($('.idea-title')[index]).html();
var upperCaseTitle = title.toUpperCase();
var body = $($('.idea-paragraph')[index]).html();
var upperCaseBody = body.toUpperCase();


if (upperCaseTitle.indexOf(searchTerm) !== -1) {
	return true;
}
 else if (upperCaseBody.indexOf(searchTerm) !== -1){
 	return true;
 } else {
        return false
    };

};










