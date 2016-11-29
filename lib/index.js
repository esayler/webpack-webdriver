$(document).ready(function(){
  $('#submit-button').on('click', formatIdeas);
});

function formatIdeas(){
  var idea = createIdea()
  var button = createButton()
  clearFields()
  appendIdeas(idea,button)
  deleteIdea(idea,button)
}


function appendIdeas(idea, button){
  $('#all-ideas').append(idea,button);
}

function deleteIdea(idea,button){
  button.on('click',function(){
    idea.remove();
    this.remove();
  });
}

function clearFields(){
  $('#idea-title').val("")
  $('#idea-description').val("")
}

function createIdea(){
  return $(
    "<li>"
    + $('#idea-title').val()
    +"<br>"
    + $('#idea-description').val()
    +"</li>"
  )
}

function createButton(number) {
  return $('<button class="delete-idea"></button>').text('delete idea');
}
