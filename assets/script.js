// Dichiarazione output
const output = document.querySelector('.output');

// Array con oggetti
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "assets/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "assets/img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "assets/img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "assets/img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "assets/img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "assets/img/barbara-ramos-graphic-designer.jpg",
  },
];

for(let member of team){
  console.log(member);
  
}