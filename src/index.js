
const wordsToType = ["web_developer", "front-end_developer","backend_developer"];


const typingSpeed = 150;

const typingElement = document.getElementById('typing-text');


function typeText(words, index) {
  const currentWord = words[index % words.length];
  typingElement.textContent = currentWord.substring(0, typingElement.textContent.length + 1);
  if (typingElement.textContent === currentWord) {
    setTimeout(function() {
      deleteText(currentWord.length, index);
    }, 100); 
    return;
  }
  setTimeout(function() {
    typeText(words, index);
  }, typingSpeed);
}

// Function to delete typed text
function deleteText(length, index) {
  typingElement.textContent = typingElement.textContent.substring(0, typingElement.textContent.length - 1);
  if (typingElement.textContent === '') {
    setTimeout(function() {
      typeText(wordsToType, index + 1);
    }, 100); // Pause before typing the next word
    return;
  }
  setTimeout(function() {
    deleteText(length, index);
  }, typingSpeed);
}

// Start typing animation
typeText(wordsToType, 0);
let a;
const words=["Hii,It's Me","Aayush_Jain","and You?",`hii`,"Nice to meet you","Glad,you find me interesting","hope to meet again"];
var button = document.getElementById("about");
var index=0;
const delay = 50; // Delay between each character in milliseconds
const typingEffect = document.getElementById("comment");
function typeWriter(text, index) {
    if (index < text.length) {
        typingEffect.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(text, index + 1), delay);
    }
}
button.addEventListener("click", function() {
    var a;
     var word=words[index];
    typingEffect.innerHTML="";
    
    if(index===6){
        index--
    }
    setTimeout(()=>{
      if(word=="and You?")
      {
     a=prompt("enter your name");
     if(a==null){
      a='friend';
     }
     words[3]="hii "+a;
      }
    },1000);
    if(index==4){
    let hello=document.getElementById("a");
    hello.style.display="inline";
    }
    typeWriter(word, 0);
    index++;
});

var aboutc=document.getElementById('aboutc');
var about=document.getElementById('about');
var projectc=document.getElementById('projectc');
var project=document.getElementById('project');
var skillc=document.getElementById('skillc');
var skill=document.getElementById('skill');
var home=document.getElementById('home');
var homec=document.getElementById('homec');


project.addEventListener('mouseover',()=>{
  skillc.style.display="none";
   homec.style.display="none";
   aboutc.style.display="none";
  projectc.style.display="inline";
});
skill.addEventListener('mouseover',async ()=>{
  projectc.style.display="none";
  aboutc.style.display="none";
   homec.style.display="none";
  skillc.style.display="inline";
});
about.addEventListener('mouseover',async ()=>{
  projectc.style.display="none";
  skillc.style.display="none";
   homec.style.display="none";
  aboutc.style.display="inline";
  
});
home.addEventListener('mouseover',async ()=>{
  projectc.style.display="none";
  skillc.style.display="none";
  aboutc.style.display="none";
  homec.style.display="inline"
});