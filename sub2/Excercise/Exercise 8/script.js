
// console.log(plants[0].description);

// jquery shorthand for making sure document is fully loaded
$ (function () {

    fetch("https://ghibliapi.vercel.app/films")
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data);
            console.log(data[12].title);
            console.log(data[12].original_title);
            console.log(data[12].image);
            console.log(data[12].director);
            console.log(data[12].description);
            $("main").append(`
                <div>
                    <h2>${data[12].title}</h2>
                    <img src="images/${data[12].image}" width="50%">
                    <h3>${data[12].director}</h3>
                    <p>${data[12].description}</p>
                </div>
            `)

            

            /*
            for (let i =0; i < data.plants.length; i++ ) {
                $("main").append(`
                    <div>
                        <img src="images/${data.plants[i].photo}" width="50%">
                        <h2>${data.plants[i].name}</h2>
                        <p>${data.plants[i].description}</p>
                    </div>
                `);
            }
            */
        })
        .catch(function(error){
            $("main").html("There's been an error");

        })
    //same result differnt method
    /* 
        $("main").append("<h2>" + plant.name + "</h2>")
        $("main").append(`<h2>${plants[0].name}</h2>`);
    */
    
})