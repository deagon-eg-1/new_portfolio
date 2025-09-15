// main.js
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
// let togolOpen = document.querySelector(".thame");
// let btn = document.querySelector("button");

// console.log(btn);

// btn.addEventListener("click", (e) => {
//   if (togolOpen.classList.contains("open")) {
//     togolOpen.classList.remove("open");
//   } else {
//     togolOpen.classList.add("open");
//   }
// });


let dMode = document.querySelector(".dMode");
let sMode = document.querySelector(".sMode");
const body = document.body;
// التحقق من التخزين المحلي لتعيين الثيم الافتراضي
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

dMode.addEventListener("click",() =>{
  document.body.classList.toggle("dark");
  dMode.classList.toggle("d-none");
  sMode.classList.toggle("d-none");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
})
sMode.addEventListener("click",() =>{
  document.body.classList.toggle("dark");
  dMode.classList.toggle("d-none");
  sMode.classList.toggle("d-none");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
})

// فلترة المشاريع
let filterButtons = document.querySelectorAll(".filter-item button");
let projectCards = Array.from(document.querySelectorAll(".project-card"));

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // إزالة الكلاس "active" من جميع الأزرار
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    // إضافة الكلاس "active" للزر الذي تم النقر عليه
    button.classList.add("active");
    
    // الحصول على الفلتر المطلوب
    let filter = button.getAttribute("data-filter");
    console.log(filter);
    
    // إظهار أو إخفاء بطاقات المشاريع بناءً على الفلتر
    projectCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
