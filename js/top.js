function Show() {
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
            let html = '';
            data.countries_stat.forEach(ct => {
                if (ct.deaths.replace(/[^0-9]+/g,'') > 10000) {
                    html += `
                    <div class="box col-lg-4">
                        <ul class="list-group countries"  >
                            <li class="list-group-item">Country : ${ct.country_name} </li>
                            <li class="list-group-item">The total number of infected : ${ct.cases} </li>
                            <li class="list-group-item">Number of active patients : ${ct.active_cases} </li>
                            <li class="list-group-item">Number of tests : ${ct.total_tests}</li>
                            <li class="list-group-item" style="color: red;">Total death toll : ${ct.deaths}</li>
                            <li class="list-group-item" style="color: green;">Total recovered : ${ct.total_recovered}</li>

                        </ul>
                    </div>
                    `
                }
                else{
                    console.log(ct.deaths);
                }
            })
            document.getElementById('List10').innerHTML = html

        })
        .catch(error => console.log(error))
    
}
Show();