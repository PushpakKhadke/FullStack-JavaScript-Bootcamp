const courses=[
    {
        name:"Javascript Course",
        price:"2.1",
    },
    {
        name:"Angular Course",
        price:"4.2",
    },
    {
        name:"ReactJS Course",
        price:"2.4",
    },
    {
        name:"MongoDB Course",
        price:"3.2",
    },
];

function generateLIST(){
    const ul=document.querySelector(".list");
    ul.innerHTML="";

    courses.forEach((course) => {

        const li=document.createElement("li");
        li.classList.add("course-name");
        const name=document.createTextNode(course.name);
        li.appendChild(name);

        const span=document.createElement("span");
        span.classList.add("course-price");
        const coursePrice=document.createTextNode("$ "+course.price);
        span.appendChild(coursePrice);

        li.appendChild(span);
        ul.appendChild(li);
    });
}


window.addEventListener("load",generateLIST);

const asenSort=document.querySelector(".sort-btn");

asenSort.addEventListener("click", ()=>{
    courses.sort((a,b)=> a.price-b.price);
    generateLIST();
});

// assignment

const desSort=document.querySelector(".des-sort");

desSort.addEventListener("click", ()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateLIST();
});
