/*describe("checkSpam", function() {
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
  checkSpam=(str)=> {
    let commentarea = str.toLowerCase();
  let spam1=commentarea.includes('viagra');
  let spam2=commentarea.includes('xxx');
    
  commentarea=commentarea.replace(spam1 || spam2,commentList.includes('***'));
      console.log(commentarea);
  }*/
let nextId = 1;

const comments = [];


let commentarea = document.querySelector('[data-textarea="comment"]');
let button = document.querySelector('[data-action="add"]');
let commentList = document.querySelector('[data-id="comment-list"]');
button.addEventListener('click', () => {
  const object = {};
  if (commentarea.value != '') {
    comments.push({ id: nextId++, text: commentarea.value });
  }
  createElement(commentarea.value);
  commentarea.value = '';
  if (commentarea.value != 'viagra'){
    comments.push({ id: nextId++, text: commentList.value != '***' });
  }
  commentList.value = '***';
  
});

function createElement(ci) {
  let newComment = document.createElement('p');
  for (let i=0; i<newComment.length; i++) {
    newComment[i].style.marginLeft = i + '15px';}
  
  newComment.textContent = ci;
  commentList.appendChild(newComment);
  
  
}

  

