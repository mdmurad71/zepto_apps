
// Get references to the input textbox and loading spinner
const inputTextbox = document.getElementById('catchDesc');
const loadingSpinner = document.getElementById('loadingSpinner');
const spinnerButton= document.getElementById('spinButton');
const headButton = document.getElementById('heading');
const headInput = document.getElementById('headInput');
const headingHide = document.getElementById('heading_hide');
const image = document.getElementById('image');
const imageInput = document.getElementById('imageInput');
const imageHide = document.getElementById('image_hide');
const descButton = document.getElementById('desc');
const descInput = document.getElementById('descInput');
const descHide = document.getElementById('desc_hide');

// Add an event listener to the input textbox to trigger the spinner
inputTextbox.addEventListener('input', () => {
  // Toggle the display of the spinner based on the input value
  if (inputTextbox.value.length <= 70 ) {
    loadingSpinner.style.display = 'block';
    spinnerButton.style.background= 'green';
  }else if(inputTextbox.value.length > 70){
    spinnerButton.style.background= 'red';

  } else {
    loadingSpinner.style.display = 'none';
  }
});

headButton.addEventListener('click', ()=>{
    headInput.style.display= 'block';
    headButton.style.display= 'none';
});

headingHide.addEventListener('click', ()=>{
    headInput.style.display= 'none';
    headButton.style.display= 'block';

});

image.addEventListener('click', ()=>{
    imageInput.style.display= 'block';
    image.style.display= 'none';

});

imageHide.addEventListener('click', ()=>{
    imageInput.style.display= 'none';
    image.style.display= 'block';

});

descButton.addEventListener('click', ()=>{
    descInput.style.display= 'block';
    descButton.style.display= 'none';
});

descHide.addEventListener('click', ()=>{
    descInput.style.display= 'none';
    descButton.style.display= 'block';

});


function  headPreview (){
    let catchHead= document.getElementById('catchHead');
    document.getElementById('getHeading').innerHTML= catchHead.value;

}

function getImagePreview(event){

    let WIDTH= 400;

    let img_file= event.target.files[0];
   

    let reader= new FileReader;
    console.log(reader);
    reader.readAsDataURL(img_file);
    reader.onload= (event)=>{
        let image_url= event.target.result;
        let image= document.createElement('img');
        image.src= image_url;

        image.onload= (e)=>{
            let canvas= document.createElement('canvas');
            let ratio= WIDTH/e.target.width;
            canvas.width= WIDTH;
            canvas.height= e.target.height *ratio;
            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            let new_image_url= context.canvas.toDataURL("image/jpeg", 90);
            let new_image= document.createElement("img");
            
            new_image.src= new_image_url;
          let empty= document.getElementById('getImage');
          empty.innerHTML= '';
          empty.appendChild(new_image);
        }


    }
    

}


function getDescPreview(){
    let catchDesc= document.getElementById('catchDesc');
    document.getElementById('getDesc').innerHTML= catchDesc.value;
}


document.querySelector('#btn-one').addEventListener('click', function () {
html2canvas(document.querySelector('#content')).then((canvas) => {
    let base64image = canvas.toDataURL('image/png');
    // console.log(base64image);
    let pdf = new jsPDF('p', 'px', [1600, 1160]);
    pdf.addImage(base64image, 'PNG', 15, 15, 1110, 460);
    pdf.save('download.pdf');
});
});



document.getElementById('left').addEventListener('click', function(){
    let left= document.getElementById('getHeading');
    left.style.textAlign= 'left';
   });

   document.getElementById('center').addEventListener('click', function(){
    let center= document.getElementById('getHeading');
    center.style.textAlign= 'center';
   });

   document.getElementById('right').addEventListener('click', function(){
    let right= document.getElementById('getHeading');
    right.style.textAlign= 'right';
   });


   document.getElementById('blue').addEventListener('click', function(){
    let blue= document.getElementById('getHeading');
    blue.style.color= 'blue';
   });

   document.getElementById('black').addEventListener('click', function(){
    let black= document.getElementById('getHeading');
    black.style.color= 'black';
   });

   document.getElementById('green').addEventListener('click', function(){
    let green= document.getElementById('getHeading');
    green.style.color= 'green';
   });
    

