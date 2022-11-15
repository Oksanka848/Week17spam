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
/*let nextId = 1;

const comments = [];*/


let commentarea = document.getElementById('comment').value;
let button = document.querySelector('[data-action="add"]');
let commentList = document.getElementById('comment-list');

button.addEventListener('click', () => {
 

  commentList.innerHTML+=`<div>${commentarea}</div><br>`;
  
  if (commentarea.includes("viagra")){
    commentList.innerHTML=`<div>${'***'}</div><br>`;}
    
     if (commentarea.includes("xxx")){
      commentList.innerHTML=`<div>${'***'}</div><br>`;}  
     

  });



  /*if (commentarea.value != '') {
    comments.push({ id: nextId++, text: commentarea.value });
  }
  createElement(commentarea.value);
  commentarea.value = '';
  checkSpam(commentarea.value);
  commentarea.value = '';
  /*if (comments.includes("viagra") || comments.includes("xxx")) {
    let commentarea = comments.toLowerCase();
  let spam1=commentarea.includes('viagra');
  let spam2=commentarea.includes('xxx');
  
    comments.push({ id: nextId++, text: commentarea.replace(spam1 || spam2,commentarea.value('***')) });
  }
  var str = commentarea.join ('<br>');
  commentList.innerHTML=str;
  commentarea.value = '';*/
  


/*function createElement(ci) {
  var newComment = document.createElement("div");
  newComment.classList.add('panel-comments');
  document.body.append(newComment);
  for (i=0; i<newComment.length; i++) {
    newComment[i].style.marginLeft = i + + "150px" ;

  console.log(newComment);
  commentList.appendChild(newComment);
  newComment.textContent = ci;
}}
checkSpam=(str)=> {
  let commentarea = str.toLowerCase();
const spam1=commentarea.includes('viagra');
const spam2=commentarea.includes('xxx');
  
let commentarea2=commentarea.replace(spam1 || spam2,commentList.includes('***'));
    console.log(commentarea2);
}*/
  

