

document.addEventListener('DOMContentLoaded', function(event){
  let namea = localStorage.getItem("name");
  document.getElementById("comment").value = "";
  if (namea!=null){
    document.getElementById("name").value = namea;
  }
});

function setmes() {
  let commentarea = document.getElementById('comment').value;
  let namea = document.getElementById('name').value;
  let commentList = document.getElementById('comment-list');
  commentList.innerHTML+=`<span>${namea}</span><a href="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg"><img src="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg" width="50" 
  height="50" alt="avatar"></a><span>${commentarea}</span><br>` ;
  commentarea.value = '';

  if (localStorage.getItem('name') == null){
    localStorage.setItem ('name', namea);
  }
  if (commentarea.includes("viagra")){
    commentList.innerHTML=`<div>${'***'}</div><br>`;}
    
    if (commentarea.includes("xxx")){
      commentList.innerHTML=`<div>${'***'}</div><br>`;}  

      commentarea.value = '';
  }
  


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
  

