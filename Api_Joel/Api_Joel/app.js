fetch("https://imdb8.p.rapidapi.com/auto-complete?q=super%20campeones", {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': 'df2ce514c1msh2761be30c9f93f3p1d8d9cjsn6c53a2f74d39',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
    //console.log(data)
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        //console.log(element)

        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s
        
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>            
        `
        document.getElementById('container').innerHTML += poster
    })
})
.catch(err => {
	console.error(err);
});