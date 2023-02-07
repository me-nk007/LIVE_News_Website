console.log("This is a news website")
// API Key : aa9517bc6fe742be91fa981a3bbd212b


// Initialize the news API parameters
let source = 'BBC-NEWS';
let apikey = 'aa9517bc6fe742be91fa981a3bbd212b';

// Grab the News Container
let newsAccordion = document.getElementById('newsAccordion');


// Create an AJAX GET request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);
// What to do when response is ready
xhr.onload = function(){
    if (this.status === 200){            
     
       let json =  JSON.parse(this.responseText)
       let articles = json.articles;
    //    console.log(articles);
    let newsHTML = '';
    articles.forEach(function(element,index) {

         let news = `
        <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                       <b> Breaking News ${index+1} :</b>  ${element.title}
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body">
                    ${element.content}. <a href="${element.url}" target="_blank">Read more here</a>
                </div>
            </div>
        </div> `
        newsHTML += news;                
       });
       newsAccordion.innerHTML = newsHTML;
    }
    else{
        console.log("Some Error Occured");
    }
    
}
xhr.send();


