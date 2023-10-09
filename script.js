// ===============Hide and Show Div=============================


// =================Projects card section=====================

const data = [
    {
        img_src : "/imgs/OSP.png",
        Name : "Online Student Portal",
        Web_link : "xyz",
        Description : "OSP is a centralized solution to maintain all academic activates inside college."
    },
    {
        img_src : "/imgs/KCG.png",
        Name : "Killer Cats Game",
        Web_link : "https://sandeshbhale.github.io/Killer-Cats/",
        Description : "Killer Cats is a strategic turn-based multiplayer (2P,3P,4P) game."
    },
    {
        img_src : "/imgs/PP.png",
        Name : "Personal Portfolio Website",
        Web_link : "adfmnkd",
        Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deleniti?"
    },
    {
        img_src : "/imgs/PP.png",
        Name : "Personal Portfolio Website",
        Web_link : "adfmnkd",
        Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deleniti?"
    },
    {
        img_src : "/imgs/PP.png",
        Name : "Personal Portfolio Website",
        Web_link : "adfmnkd",
        Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deleniti?"
    }
];


data.forEach((element,i) => {

const skills = document.querySelector(".projects");

//Creation of card

const card = document.createElement('div');
card.classList = 'card';

const projectCard =`
    <p> <strong> ${data[i].Name} </strong></p>
    <img src=".${data[i].img_src}" alt="">
    <br>
    <button href="${data[i].Web_link}"> Download </button>
     <br>
    <p>${data[i].Description}</p>`
;

card.innerHTML += projectCard;
skills.appendChild(card);
});