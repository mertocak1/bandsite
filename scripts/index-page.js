/* ---  Get Element By ID --- */

// Get name input box by id
const nameInputBox = document.getElementById("name-input");
//Get comment input box by id
const commentInputBox = document.getElementById("comment-input");



// Default data for comments
const commentData = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

displaySubmission(commentData);


// Gets the form by ID
const form = document.getElementById("comment-form");

// adds event listener to a form
form.addEventListener("submit", dataDisplayer);

// Event Function
function dataDisplayer(event) {
  event.preventDefault();

  // Gets ID to change class of an element
  const commentInput = document.getElementById("comment-input");
  const nameInput = document.getElementById("name-input");

  // Gets value using name attribute
  const name = event.target.nameinput.value;
  const curDate = new Date();
  const formattedDate = curDate.toLocaleDateString('en-US');
  const comment = event.target.commentinput.value;

  // Submit Data
  const newInput = {
    name: name,
    date: formattedDate,
    comment: comment,
  };

  // Checks the the input if it is empty add error modifier
  if (name.length === 0 || comment.length === 0) { // Cheks if either of them empty
    
    if (name.length === 0 && comment.length === 0){ // Cheks if both empty
      nameInputBox.classList.add("conversation__input-box--error");
      nameInputBox.removeAttribute('placeholder');
      commentInputBox.classList.add("conversation__input-box--error");
      commentInputBox.removeAttribute('placeholder');
      return;
    } else if (name.length === 0 ) { // cheks if first input box empty
      nameInputBox.classList.add("conversation__input-box--error");
      commentInputBox.classList.remove("conversation__input-box--error");
      nameInputBox.removeAttribute('placeholder');
      return;
    } else if (comment.length === 0) { // cheks if second one is empty
      nameInputBox.classList.remove("conversation__input-box--error");
      commentInputBox.classList.add("conversation__input-box--error");
      commentInputBox.removeAttribute('placeholder');
      return;
    }
  }else{ // Removes the error classes if there is no error
    nameInputBox.classList.remove("conversation__input-box--error");
    commentInputBox.classList.remove("conversation__input-box--error");
    nameInputBox.placeholder = "Enter Your Name";
    commentInputBox.placeholder = "Add a new comment";
  }    

  // If there is no error. Push the new data to commentData object.
  commentData.unshift(newInput);

  displaySubmission(commentData);
  

  // resets the input section
  event.target.reset();

}

function displaySubmission(newInput) {
  
  
  // Gets Commets wrapper by id
  const renderComment = document.getElementById("render-comment");
  //clears the content has been displayed
  renderComment.innerHTML = "";

  // Creates a section for each submit
  newInput.forEach((sub) => {
    
    // Creates outter div for each comment
    const commentWrapper = document.createElement("div");
    // Add class to commentWrapper
    commentWrapper.classList.add("conversation__comment-wrapper");
    // Renders The outter div
    renderComment.append(commentWrapper);


    // Creates Profile avatar wrapper
    const iconCollumn = document.createElement("div");
    // Add class to iconCollumn
    iconCollumn.classList.add("conversation__icon-collumn");
    // Renders the profile avatar collumn
    commentWrapper.append(iconCollumn);


    // Creates comment profile picture (icon)
    const profilePic = document.createElement("div");
    // Add class to profilePic
    profilePic.classList.add("conversation__comment-avatar");
    // Renders profile Icon
    iconCollumn.append(profilePic);


    // Creates comment content wrapper
    const contentWrapper = document.createElement("div");
    // Add class to contentWrapper
    contentWrapper.classList.add("conversation__content");
    // Renders comment content wrapper
    commentWrapper.append(contentWrapper);


    // Creates name wrapper inside of an 'comment content wrapper'
    const nameWrapper = document.createElement("div");
     // Add class to nameWrapper
     nameWrapper.classList.add("conversation__name-wrapper");
    // Renders name wrapper
    contentWrapper.append(nameWrapper);


    // Creates comment name element (h5)
    const commentName = document.createElement("h5");
     // Add class to commentName
     commentName.classList.add("conversation__comment-name");
     // Add Comment name
     commentName.innerText = `${sub.name}`
    // Renders comment name element
    nameWrapper.append(commentName);


    // Creates comment date (p) 
    const commentDate = document.createElement("p");
    // Add class to commentDate
    commentDate.classList.add("conversation__comment-date");
    // Add Comment Date
    commentDate.innerText = `${sub.date}`
    // Renders commet date
    nameWrapper.append(commentDate);


    // Creates text wrapper 
    const commentTextWrapper = document.createElement("div");
    // Add class to commentTextWrapper
    commentTextWrapper.classList.add("conversation__comment");
    // Renders text wrapper
    contentWrapper.append(commentTextWrapper);


    // Creates text element (p) 
    const commentText = document.createElement("p");
    // Add class to commentText
    commentText.classList.add("conversation__comment-text");
    // Add Comment Date
    commentText.innerText = `${sub.comment}`
    // Renders text element
    commentTextWrapper.append(commentText);


    // create a div under the each comment to split each comment
    const commentSplitter = document.createElement("div");
    // add class to commentSplitter
    commentSplitter.classList.add("conversation__collumn-splitter");
    // displays the comment splitter
    renderComment.append(commentSplitter);
  });


}