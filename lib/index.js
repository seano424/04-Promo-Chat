const batch = 1; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";

// Your turn to code!
const messagesDisplay = document.querySelector("#messages .list-unstyled");
const refreshBtn = document.getElementById("refresh");
const form = document.getElementById("comment-form");

const displayMessages = (event) => {
  messagesDisplay.textContent = "";
  console.log("Removed text content");
  const url = "https://wagon-chat.herokuapp.com/483/messages";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dataArray = data.messages;
      dataArray.forEach((dataPiece) => {
        const listDisplay = `<li>${dataPiece.content} (posted <span class="date">10 minutes ago</span>) ${dataPiece.author}</li>`;
        messagesDisplay.insertAdjacentHTML("beforeend", listDisplay);
      });
    });
};

const postForm = (event) => {
  // event.preventDefault();
  console.log(event);
  const comment = document.getElementById("your-message").value;
  const yourName = document.getElementById("your-name").value;
  const url = "https://wagon-chat.herokuapp.com/483/messages";
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ author: `${yourName}`, content: `${comment}` }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.hits);
    });
};

form.addEventListener("submit", postForm);
refreshBtn.addEventListener("click", displayMessages);
displayMessages();
