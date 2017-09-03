$('#submit-button').on('click', saveIdea);
// $('.idea-article').on('click', deleteIdea);




function saveIdea (e) {
	e.preventDefault();
	var title = $('.main-title').val();
	var body = $('.idea-input').val();
	
	$('.bookmark-list').prepend(
		`<article class="idea-article">
		<h2 class="idea-title">${title}</h2> 
		<div class="delete-button-div icon-buttons delete-button right">
		</div>
		<p contenteditable="true" class="idea-paragraph">${body}</p>
		<div class="quality-rank"> 
		<div class="upvote-button-div icon-buttons upvote-button">
		</div>
		<div class="downvote-button-div icon-buttons downvote-button"> 
		</div>
		quality: <span class = "quality-content"> swill</span> </div>
		<hr /> 
		</article>`)
	$('.main-title').val("");
	$('.idea-input').val("");
}

$('.bookmark-list').on('click', '.delete-button-div', function() {
	console.log('work')
	$(this).closest('.idea-article').remove();
});

// function deleteIdea(e){
// 	e.preventDefault();
// 	if    $(this).closest
// 	console.log("work");
// }

