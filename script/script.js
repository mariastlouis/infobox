$('#submit-button').on('click', saveIdea);
// $('.idea-article').on('click', deleteIdea);




function saveIdea (e) {
	e.preventDefault();
	var title = $('.main-title').val();
	var body = $('.idea-input').val();
	var status = 'swill';
	
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
		<p> quality: <span class = "quality-content">${status}</span> </p> </div>
		<hr /> 
		</article>`)
	$('.main-title').val("");
	$('.idea-input').val("");
}

$('.bookmark-list').on('click', '.delete-button-div', function() {
	$(this).closest('.idea-article').remove();
});

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
                










