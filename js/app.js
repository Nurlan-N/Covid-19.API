function ShowCountries() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e2d9d837a5msh966c6cea1fabd71p16e85fjsn841affe3c9ec',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    
    let cases = document.getElementById('Cases');
    let deaths = document.getElementById('Deaths');
    let recovered = document.getElementById('Recovered')
    let time = document.getElementById('Time')
    let acases = document.getElementById('Acases');
    let ndeaths = document.getElementById('Ndeaths');
    let ncases = document.getElementById('Ncases');




    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(data => {
           let html = '';
           data.countries_stat.forEach(ct => {
                html += `
                <ul class="list-group countries" >
                    <li class="list-group-item">Country : ${ct.country_name} </li>
                    <li class="list-group-item">The total number of infected : ${ct.cases} </li>
                    <li class="list-group-item">Number of active patients : ${ct.active_cases} </li>
                    <li class="list-group-item">Number of tests : ${ct.total_tests}</li>
                    <li class="list-group-item">Total death toll : ${ct.deaths}</li>
                </ul>
                `
           })
           document.getElementById('List').innerHTML = html
           acases.innerHTML = data.world_total.active_cases;
           cases.innerHTML = data.world_total.total_cases;
           deaths.innerHTML = data.world_total.total_deaths;
           recovered.innerHTML = data.world_total.total_recovered;
           time.innerHTML = data.world_total.statistic_taken_at;
           ncases.innerHTML = data.world_total.new_cases;
           ndeaths.innerHTML = data.world_total.new_deaths;

        })
        .catch(error => console.log(error))
    
   
}

ShowCountries();

