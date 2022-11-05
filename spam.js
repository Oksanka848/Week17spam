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
  let newComment = document.createElement('div');
  for (let i=0; i<newComment.length; i++) {
    newComment[i].style.marginLeft = i + '15px';}
  
  newComment.textContent = ci;
  commentList.appendChild(newComment);
}
function checkSpam(str) {
    let commentarea = str.toLowerCase();
  
    return commentarea.includes('viagra') || commentarea.includes('xxx');
  }
  describe("checkSpam", function() {
    it('считает спамом "buy ViAgRA now"', function() {
      assert.isTrue(checkSpam('buy ViAgRA now'));
    });
  
    it('считает спамом "free xxxxx"', function() {
      assert.isTrue(checkSpam('free xxxxx'));
    });
  
    it('не считает спамом "innocent rabbit"', function() {
      assert.isFalse(checkSpam('innocent rabbit'));
    });
  });
