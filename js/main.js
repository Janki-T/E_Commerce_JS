fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let str = "";
        json.forEach(element => {
            // console.log(element.price)
            // console.log(element.image)
            str += `<div class="col mb-5">
            <div class="card h-100">
               
                <img class="card-img-top" src="${element.image}" alt="..." />
               
               <div class="card-body p-4">
                   <div class="text-center">
                      
                       <h5 class="fw-bolder">${element.title}</h5>
                       
                       $${element.price}
                   </div>
               </div>
               
               <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                   <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add To Cart</a>
                   </div>
               </div>
           </div>
       </div>`
            document.getElementById('products').innerHTML = str;

        });

    });

