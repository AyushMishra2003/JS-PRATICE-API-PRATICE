const  parent=document.querySelector('#img')


fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20').then(function(resonse){
    return resonse.json()
})
.then(function(resp1){
    resp1.photos.forEach(function(item){
         const child=document.createElement('div')
         child.id="child"
         const image=document.createElement('IMG')
         image.src=item.url
         child.appendChild(image)
         parent.appendChild(child)
         const para=document.createElement('p')
         para.innerHTML=item.description;  
         child.appendChild(para)
         parent.appendChild(child)
    })
    /*
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
     */
})
.catch(function(error){
   console.log(error);
})