const apiKey = "8f96edb5-13f7-429e-9b5d-ed9999b9c002";

const api = new BandSiteApi(apiKey);

async function getComments() {
  const comments = await api.getComments();
  const sortedComments = sortByTimestamp(comments);
  renderComment(sortedComments);
}
getComments();

function sortByTimestamp(comments) {
  // Custom sorting function to sort comments by timestamp in descending order
  comments.sort(function (commentA, commentB) {
    const timestampA = new Date(commentA.timestamp).getTime();
    const timestampB = new Date(commentB.timestamp).getTime();
    // Sort in descending order
    return timestampB - timestampA;
  });
  return comments;
}

function postComment(comment) {
  const postComment = api.postComment(comment);
  console.log(postComment);
}

// Get name input box by id
const nameInputBox = document.getElementById("name-input");
//Get comment input box by id
const commentInputBox = document.getElementById("comment-input");

// Gets the form by ID
const form = document.getElementById("comment-form");

// adds event listener to a form
form.addEventListener("submit", handleForm);

/* 
This function handles the submit{
 - Stores the data in "newData"
 - passes it to the api
}
*/
async function handleForm(event) {
  event.preventDefault();

  // Gets name input using attribute
  const name = event.target.nameinput.value;
  // Gets comment input using attribute
  const comment = event.target.commentinput.value;

  // Input data stores name and comment in an object
  const newData = {
    name: name,
    comment: comment,
  };

  // Checks the the input if it is empty add error modifier
  if (name.length === 0 || comment.length === 0) {
    // Cheks if either of them empty
    if (name.length === 0 && comment.length === 0) {
      // Cheks if both empty
      nameInputBox.classList.add("conversation__input-box--error");
      nameInputBox.removeAttribute("placeholder");
      commentInputBox.classList.add("conversation__input-box--error");
      commentInputBox.removeAttribute("placeholder");
      return;
    } else if (name.length === 0) {
      // cheks if first input box empty
      nameInputBox.classList.add("conversation__input-box--error");
      commentInputBox.classList.remove("conversation__input-box--error");
      nameInputBox.removeAttribute("placeholder");
      return;
    } else if (comment.length === 0) {
      // cheks if second one is empty
      nameInputBox.classList.remove("conversation__input-box--error");
      commentInputBox.classList.add("conversation__input-box--error");
      commentInputBox.removeAttribute("placeholder");
      return;
    }
  } else {
    // Removes the error classes if there is no error
    nameInputBox.classList.remove("conversation__input-box--error");
    commentInputBox.classList.remove("conversation__input-box--error");
    nameInputBox.placeholder = "Enter Your Name";
    commentInputBox.placeholder = "Add a new comment";
  }

  // If there is no error. Push the new data to commentData object.
  postComment(newData);

  // resets the input section
  event.target.reset();
}

// Renders the comments
function renderComment(comments) {
  // Gets Commets wrapper by id
  const renderComment = document.getElementById("render-comment");
  //clears the content has been displayed
  renderComment.innerHTML = "";

  // Creates a section for each submit
  comments.forEach((sub) => {
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
    commentName.innerText = `${sub.name}`;
    // Renders comment name element
    nameWrapper.append(commentName);

    // Creates comment date (p)
    const commentDate = document.createElement("p");
    // Add class to commentDate
    commentDate.classList.add("conversation__comment-date");
    // Add Comment Date
    commentDate.innerText = `${dateFormat(sub.timestamp)}`;

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
    commentText.innerText = `${sub.comment}`;
    // Renders text element
    commentTextWrapper.append(commentText);

    // create a div under the each comment to split each comment
    const commentSplitter = document.createElement("div");
    // add class to commentSplitter
    commentSplitter.classList.add("conversation__collumn-splitter");
    // displays the comment splitter
    renderComment.append(commentSplitter);
  });
  getComments();
}
