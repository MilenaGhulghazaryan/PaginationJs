const test = document.querySelector(".test");
const container = document.querySelector(".container");
const labels = document.querySelectorAll('label')

function fetchData(page) {
  fetch("https://jsonplaceholder.typicode.com/posts?_page=" + page)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      test.innerHTML = ''
      data.forEach((obj) => {
        const markup = `
      <li> ${obj.id} ${obj.title} ${obj.body}</li>`;
        test.insertAdjacentHTML("beforeend", markup);
        console.log(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });

}


Array.from(labels).forEach((label, i) => {
  label.onclick = () => {
    fetchData(i + 1);
  }
})

fetchData(1);
