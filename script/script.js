$('#submit-button').on('click', saveIdea);





function saveIdea (e) {
	e.preventDefault();
	var title = $('.main-title').val();
	var body = $('.idea-input').val();
	
	$('.bookmark-list').prepend(
		`<article class="idea-article">
		
		<h2 class="idea-title">${title}</h2> 
		

			<img src ="images/delete.svg" class="icon-buttons delete-button right" />

		
		<p contenteditable="true" class="idea-paragraph">${body}</p>
		
		
		
		<p class="quality-rank"> 
			<img src ="images/upvote.svg" class ="icon-buttons upvote-button" />
		<img src = "images/downvote.svg" class="icon-buttons downvote-button" />

		quality: <span class = "quality-content"> swill</span> </p>

		<hr /> 
		

	</article>`


 
		)
}
