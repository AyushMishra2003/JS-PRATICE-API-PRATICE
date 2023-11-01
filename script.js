const img=document.querySelector('#img1')
const doc=document.querySelector('#doc1')
const img1=document.querySelector('#img2')
const doc1=document.querySelector('#doc2')
fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
.then(function(respose){
    return respose.json()
})
.then(function(resp1){
    const ur=resp1.photos[0].url
    img.src=ur
    const ur1=resp1.photos[1].url
    img1.src=ur1
    doc.innerHTML=resp1.photos[0].
    description;
    doc1.innerHTML=resp1.photos[1].description
})
.catch(function(error){
   console.log(error);
})