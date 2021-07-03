const ddtas = ["Tom", "John", "Jack"];

const divElement = document.querySelector(".previews");
// console.log("Selector...");

const div1 = document.createElement("div");
const li1 = document.createElement("lable");
// div1.textContent = "dedddeeeeaasdas的";
// li1.textContent = "⌚🙅‍♂️扑街用情！";
console.log(li1.textContent);
div1.appendChild(li1);

divElement.appendChild(div1);

const p0 = document.querySelector(".here1");
const p_1 = document.createElement("p");
const li_pre = document.createElement("li");

p_1.appendChild(li_pre);
li_pre.textContent = "-NO.data.messag";
// p_1.textContent = li_pre.textContent

p0.appendChild(p_1);

let outloup = `<h2>Ddtas</h2>`;
ddtas.forEach((itme, i) => {
  outloup += `<ul><li>${itme}</li></ul>`;
  // console.log(outloup);
  // document.querySelector(".here0").innterHTML = outloup;//无法显示
});
document.getElementById("here0").innerHTML = outloup;

// Fetch API
function getPosts() {
  let output = `<h3>Posts</h3>`;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const docs = data.filter((doc) => doc.id <= 12); // 从API Fetch get data filter
      // });
      // console.log(docs);
      // let output = `<h3>Posts<h3>`;
      docs.forEach(function (post, i) {
        // console.log(i + ".NO  " + post.title);
        output += `<div style="border-style: solid">
        <h3>${post.title}</h3>
          <ul>
            <li>${post.id}</li>
            <li>${post.body}</li>
          </ul>
        </div>`;
      });
      document.getElementById("here2").innerHTML = output;
    });
}

getPosts();

// const ages = [21, 44, 52, 12, 22, 45];
// const along = ages.filter((age) => {
//   return age >= 24;
// });
// console.log(along);

// function addPost(e) {
//   e.preventDefault();
// let name = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let mobile = document.getElementById("mobile").value;
// let body = document.getElementById("body").value;

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       Accept: "application/json,text/plain,*/*",
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       mobile: mobile,
//       body: body
//     })
//   })
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data)
//         let output = `<h2>docs</h2>`
//         data.forEach(function(doc){
//           output += `<div class='card-card-body mb=3'>
//             <h2>${doc.name}</h2>
//             <h2>${doc.email}</h2>
//             <h2>${doc.mobile}</h2>
//             <h2>${doc.body}</h2>
//           <div>`
//         })
//         document.getElementById('output').innerHTML = output
//       }

// }
