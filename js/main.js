// let darkMode = document.querySelector('.dMode');

// darkMode.addEventListener('click', (e)=>{
//   console.log(e.target.dataset.color);
//   document.documentElement.style.setProperty("--main-color",e.target.dataset.color1)
//   document.documentElement.style.setProperty("--sacnd-text-color",e.target.dataset.color2)
//   document.documentElement.style.setProperty("--main-text-color",e.target.dataset.color3)
//   document.documentElement.style.setProperty("--three-text-color",e.target.dataset.color4)
//   document.documentElement.style.setProperty("--bg-card",e.target.dataset.color5)
//   document.documentElement.style.setProperty("--bg-text",e.target.dataset.color6)
//   document.documentElement.style.setProperty("--bg-main",e.target.dataset.color7)
// })

// let darkMode = document.querySelector(".dMode").dataset;


// let arrDataset = Object.values(darkMode);

// console.log(arrDataset);

// function setDarkMode() {
//   arrDataset.addEventListener('click', (e) => {
//     if(document.body.classList.add("dark")){
//       document.documentElement.style.setProperty(
//       "--main-color",
//       e.target.dataset.color1
//     );
//     document.documentElement.style.setProperty(
//       "--sacnd-text-color",
//       e.target.dataset.color2
//     );
//     document.documentElement.style.setProperty(
//       "--main-text-color",
//       e.target.dataset.color3
//     );
//     document.documentElement.style.setProperty(
//       "--three-text-color",
//       e.target.dataset.color4
//     );
//     document.documentElement.style.setProperty(
//       "--bg-card",
//       e.target.dataset.color5
//     );
//     document.documentElement.style.setProperty(
//       "--bg-text",
//       e.target.dataset.color6
//     );
//     document.documentElement.style.setProperty(
//       "--bg-main",
//       e.target.dataset.color7
//     );
//     document.documentElement.style.setProperty(
//       "--shadow",
//       e.target.dataset.color8
//     );
//     }
//   });
// }
// console.log(setDarkMode());

// function setSunMode() {
//   document.documentElement.style.setProperty("--main-color", "#4674FF");
//   document.documentElement.style.setProperty("--sacnd-text-color", "#ffffff");
//   document.documentElement.style.setProperty("--main-text-color", "#000");
//   document.documentElement.style.setProperty("--three-text-color", "#44566c");
//   document.documentElement.style.setProperty("--bg-card", "#eef5fa");
//   document.documentElement.style.setProperty("--bg-text", "#f3f2f2");
//   document.documentElement.style.setProperty(
//     "--bg-main",
//     "linear-gradient(135deg, hsla(304, 57%, 88%, 1) 0%, hsla(254, 43%, 90%, 1) 26%, hsla(163, 43%, 92%, 1) 54%)"
//   );
//   document.documentElement.style.setProperty(
//     "--shadow",
//     "0 0 10px rgba(0, 0, 0, 0.2)"
//   );
// }

// darkMode.addEventListener("click", () => {
//   // لو في وضع دارك، رجعه للوضع العادي
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.remove("dark");
//     setSunMode(); // ترجّع الألوان الافتراضية
//   } else {
//     document.body.classList.add("dark");
//     setDarkColors(); // تحط ألوان الدارك
//   }
// });

let colorChange = document.querySelectorAll(".color-change ul li");

for(let i=0;i<colorChange.length;i++){
  console.log(`thame${i + 1}`);
  colorChange[i].addEventListener('click', () => {
    // 1- شيل أي كلاس قديم بيبدأ بـ "thame"
    document.body.classList.forEach((className) => {
      if (className.startsWith("thame")) {
        document.body.classList.remove(className);
      }
    });

    // 2- أضف الكلاس الجديد اللي اختاره المستخدم
    document.body.classList.add(`thame${i + 1}`);
    
  })
}

// الجزء الخاص بفتح الثيم بوكس
let togolOpen = document.querySelector(".thame");
let btn = document.querySelector(".thame button");

console.log(btn);

btn.addEventListener("click", (e) => {
  if (togolOpen.classList.contains("open")) {
    togolOpen.classList.remove("open");
  } else {
    togolOpen.classList.add("open");
  }
});


let dMode = document.querySelector(".dMode");
let sMode = document.querySelector(".sMode");

dMode.addEventListener("click",() =>{
  document.body.classList.toggle("dark");
  dMode.classList.toggle("d-none");
  sMode.classList.toggle("d-none");
})
sMode.addEventListener("click",() =>{
  document.body.classList.toggle("dark");
  dMode.classList.toggle("d-none");
  sMode.classList.toggle("d-none");
})