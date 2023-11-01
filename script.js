const  parent=document.querySelector('#img')
console.log(img);


fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20').then(function(resonse){
    return resonse.json()
})
.then(function(resp1){
    for(let i=0;i<=19;i++)
    { 
        const child=document.createElement('div')
        child.id="child"
         const image=document.createElement('IMG')
         image.src=resp1.photos[i].url 
         child.appendChild(image)
         parent.appendChild(child)
         const para=document.createElement('p')
         para.innerHTML=resp1.photos[i].description;  
         child.appendChild(para)
         parent.appendChild(child)
    }

})
.catch(function(error){
   console.log(error);
})