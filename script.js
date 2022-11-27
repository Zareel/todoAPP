let form = document.querySelector("#form");
let input = document.querySelector("#input");
let msg = document.querySelector("#msg");
let posts = document.querySelector("#posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    msg.innerHTML = "";
    console.log("success");
    acceptData();
  }
};

// if success accept and store data

/*
 whatever we write inside text area should be collected in acceptData funtion and 
 store it in the data{}
*/

let data = {};

let acceptData = () => {
  //pushing the data inside the data{}
  data["text"] = input.value;
  console.log(data);
  createPosts();
};

let createPosts = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
  </span>
</div>
  
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
