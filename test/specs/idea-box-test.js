const assert =  require('assert')

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle()
  	assert.equal(title, 'hello world');
  });
});

describe('attributes on our application',function(){
  it('has input forms and I can set values in those forms', function(){
    browser.url('/')
    var ideaTitle = browser.element("#idea-title")
    var ideaDescription = browser.element("#idea-description")

    ideaTitle.setValue('great title')
    ideaDescription.setValue('great description')

    assert.equal(ideaTitle.getValue(), 'great title')
    assert.equal(ideaDescription.getValue(), 'great description')
  })

  it('should be able to add my ideas to the page',function(){

    browser.url('/')
    var ideaTitle = browser.element("#idea-title")
    var ideaDescription = browser.element("#idea-description")

    ideaTitle.setValue('great title')
    ideaDescription.setValue('great description')

    assert.equal(ideaTitle.getValue(), 'great title')
    assert.equal(ideaDescription.getValue(), 'great description')

    browser.click('#submit-button')

    var allIdeas = browser.getText('li')
    assert.equal(allIdeas.replace(/\n/g, ", "), 'great title, great description')

  })

  it('should clear the input fields', function(){
	  browser.url('/')
    var ideaTitle = browser.element("#idea-title")
    var ideaDescription = browser.element("#idea-description")

    ideaTitle.setValue('great title')
    ideaDescription.setValue('great description')
    browser.click('#submit-button')


    assert.equal(ideaTitle.getValue(), "")
    assert.equal(ideaDescription.getValue(), "")

  })

  it('allows me to delete a single idea from the page', function(){
    browser.url('/');
    var formTitleInput  = browser.element('#idea-title');
    formTitleInput.setValue('greatTitle');

    var formDescriptionInput = browser.element('#idea-description');
    formDescriptionInput.setValue('great description');

    assert.equal(formTitleInput.getValue(), 'greatTitle');
    assert.equal(formDescriptionInput.getValue(), 'great description');

    browser.click('#submit-button');

    browser.click('.delete-idea')

    assert.equal(browser.isExisting('li'), false );
  })
})
