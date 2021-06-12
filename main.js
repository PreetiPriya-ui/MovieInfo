
    var searchText = document.querySelector('#searchText');
    var res = document.querySelector('#movie_title');
    var actors = document.querySelector('#actors');
    var released_date = document.querySelector('#released');
    var movie_details = document.querySelector('#movie_details');
    var genre = document.querySelector('#genre');
    var director = document.querySelector('#director');
    var writer = document.querySelector('#writer');
    var image = document.querySelector('#image');
    
    
    // Fetch with XHR
    function getFactAjax(){
      let text = searchText.value;
      if(text != ''){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.omdbapi.com/?t='+text+'&apikey=c0ab542f');
  
        xhr.onload = function(){
          if(this.status >= 200 && this.status<400){
          	const obj=JSON.parse(this.responseText)
            res.innerText = 'Title: '+obj.Title;
            actors.innerText='Actors: '+obj.Actors;
            released_date.innerText='Released Date: '+obj.Released;
            genre.innerText='Genre: '+obj.Genre;
            director.innerText='Director: '+obj.Director;
            writer.innerText='Writer: '+obj.Writer;
            image.src=obj.Poster;
          }
          else{
          	console.log("We connected to the server but it returned an error");
          }
        }
  
        xhr.send(); 
        }
    }

    // Fetch with Fetch API

    function getFactFetch(){
      let text = searchText.value;
      
      if(text != ''){
        fetch('http://www.omdbapi.com/?t='+text+'&apikey=c0ab542f')
        .then(response => response.text())
        .then(data => {
        	data=JSON.parse(data);
          res.innerText = 'Title: '+data.Title;
            actors.innerText='Actors: '+data.Actors;
            released_date.innerText='Released Date: '+data.Released;
            genre.innerText='Genre: '+data.Genre;
            director.innerText='Director: '+data.Director;
            writer.innerText='Writer: '+data.Writer;
            image.src=data.Poster;
        })
        .catch(err => console.log(err)); 
      }
    }

    