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
  
  if (commentarea.value != '') {
    comments.push({ id: nextId++, text: commentarea.value });
  }
  createElement(commentarea.value);
  commentarea.value = '';
  checkSpam(commentarea.value);
  commentarea.value = '';
  if (comments.includes("viagra") || comments.includes("xxx")) {
    let commentarea = comments.toLowerCase();
  let spam1=commentarea.includes('viagra');
  let spam2=commentarea.includes('xxx');
    comments.push({ id: nextId++, text: commentarea.replace(spam1 || spam2,commentarea.value('***')) });
  }
  
});

function createElement(ci) {
  var newComment = document.createElement("div");
  newComment.classList.add('panel-comments');
  document.body.append(newComment);
  for (i=0; i<newComment.length; i++) {
    newComment[i].style.marginLeft = i + '10%' ;}

  console.log(newComment);
  commentList.appendChild(newComment);
  newComment.textContent = ci;
}
checkSpam=(str)=> {
  let commentarea = str.toLowerCase();
const spam1=commentarea.includes('viagra');
const spam2=commentarea.includes('xxx');
  
let commentarea2=commentarea.replace(spam1 || spam2,commentList.includes('***'));
    console.log(commentarea2);
}
  

