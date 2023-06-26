let index1 = 0;
let index2 = 0;
let index3 = 0;
displayImages("image", index1);
displayImages("sp", index2);
displayImages("bf", index3)
function displayImages(className, index) {
  const images = document.getElementsByClassName(className);
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";


if (className === "image") {
    index1 = index2;
}else if(className ==="sp"){
    index2 = index1;
}

else if(className ==="bf"){
  index3 = index;
}
  setTimeout(() =>displayImages(className, index), 2000); 
}

// let index1 = 0;
// let index2 = 0;

// displayImages("image", index1);
// displayImages("sp", index2);

// function displayImages(className, index) {
//   const images = document.getElementsByClassName(className);
//   for (let i = 0; i < images.length; i++) {
//     images[i].style.display = "none";
//   }
//   index++;
//   if (index > images.length) {
//     index = 1;
//   }
//   images[index - 1].style.display = "block";
  
//   if (className === "image") {
//     index1 = index;
//   } else if (className === "sp") {
//     index2 = index;
//   }
  
//   setTimeout(() => displayImages(className, index), 2000);
// }
