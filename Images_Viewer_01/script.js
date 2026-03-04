let img = document.createElement("img");
img.src = "https://ismailhosenbd.com/wp-content/uploads/2025/10/Gemini_Generated_Image_it44w4it44w4it44-removebg-preview.png"

document.querySelector("#main").appendChild(img);
img.style.height = "200px";
img.style.padding = "10px";


let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  inp.click();
})

inp.addEventListener("change", function (dets) {
  console.log(dets);
const file=dets.target.files[0];
if(file){
btn.textContent=file.name;
// img.src=dets.target.value;
  img.src = URL.createObjectURL(file);
}
});
  
