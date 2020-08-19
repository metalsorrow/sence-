


const container = document.getElementById("main");


( async()=>{
    let data = await fetch('https://ghibliapi.herokuapp.com/films');
    let films = await data.json();
    console.log(films)
    films.map( film => {
        let card  = document.createElement("div",);
        let info  = document.createElement("div");
        let titulo = document.createElement('p');
        let año = document.createElement('p');
        let id = document.createElement('p');
        let descripcion = document.createElement('p');

        titulo.textContent = film.title;
        año.textContent = `Date of release: ${film.release_date}`;
        id.textContent = film.id;
        descripcion.textContent = film.description;
        
        info.appendChild(titulo);
        info.appendChild(descripcion);
        info.appendChild(año);
        info.appendChild(id);
        titulo.className = 'title';
        id.className = 'id';
        
        card.appendChild(info);
        card.className = 'card';
        container.appendChild(card);
    })
})()