class Reviewes{

    renderReviewes()
    {
        


        let containerReviews = document.querySelector('.reviews');
        //const wrepper = document.createElement('div');
        //wrepper.className = "wrepperPromoWorks";
        //elemInner.append(wrepper);
        
        
        
        
        
        
        let outClient = '';
        
        
        
        let count = 0;
        outClient +=`<ul class='reviewsAll'>`;
        for(let key in CLIENTS)
        {
           
                outClient +=`<li class="reviewsAll__item">
                        <span class="reviewsAll__photo"><img class="reviews__img" src="${CLIENTS[key].img}"></span> 
                        <span class="reviewsAll__textWrepper">

                            <h3 class="reviewsAll__name">${CLIENTS[key].name}</h3>
                            <span class="reviewsAll__text">${CLIENTS[key].text}</span>
                       
                        </span> 
                        </li>`

                count++
                      
            
            




        }

                        
                        outClient +=`</ul>`;
                        console.log(outClient);
                        containerReviews.innerHTML = outClient;
    }
    
    
}

let reviewes = new Reviewes();
reviewes.renderReviewes();