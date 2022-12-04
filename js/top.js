function Show() {
    let texts = document.querySelectorAll('.txt');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e2d9d837a5msh966c6cea1fabd71p16e85fjsn841affe3c9ec',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(response => response.json())
        .then(data => {
          for (const txt of texts) {
            let  html = `
            <ul class="list-group countries w-100" >
                <li class="list-group-item">Country : ${data.countries_stat[txt.parentElement.id].country_name} </li>
               
            </ul>
            `
                txt.innerHTML= html
          }
        })
        .catch(error => console.log(error))
       
}