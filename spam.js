let nextId = 1;

const comments = [];


const commentarea = document.querySelector('[data-textarea="comment"]');
const button = document.querySelector('[data-action="add"]');
const commentList = document.querySelector('[data-id="comment-list"]');
button.addEventListener('click', () => {
  const object = {};
  if (commentarea.value != '') {
    comments.push({ id: nextId++, text: commentarea.value });
  }
  createElement(commentarea.value);
  commentarea.value = '';
});

function createElement(ci) {
  const newComment = document.createElement('div');
  for (let i=0; i<newComment.length; i++) {
    newComment[i].style.marginLeft = i + '450px' ;}
  newComment.setAttribute('data-comment-id', comments.id);
  newComment.textContent = ci;
  commentList.appendChild(newComment);
}

