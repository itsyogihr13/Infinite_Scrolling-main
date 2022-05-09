const container = document.querySelector(".container");

//total data in one page
let limit = 25;

//curr page no.
let pageCount = 1;

//curr post no.
let postCount = 1;

//fetching data using api
const getPostData = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );

  const data = await res.json();
  console.log(data);

  setData(data);
};

getPostData();

//setting the data dynamically on screen
function setData(data) {
  data.map((curr, idx) => {
    const htmlData = `<div class="scroll-data">
        <h2><span class="scroll-id">${postCount++}</span>Masai School</h2>
      </div>`;

    //we need to set in the document through dom
    container.insertAdjacentHTML("beforeend", htmlData);

    const topBtn = `<div class="scroll-top">
      <button class="topBtn"><i class="fa-solid fa-arrow-up"></i></button>
    </div>`;

    // container.insertAdjacentElement("afterend", topBtn);
  });
}

//showing the data after 500ms and also increasing pageCount
const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPostData();
  }, 500);
};

window.addEventListener("scroll", () => {
  //clientHeight -> view that user can see on the screen
  //scrollHeight -> total scrollable height or the whole page of data
  //scrollTop -> current scroll position

  //object destructing
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("At Bottom");
    showData();
  }
});
