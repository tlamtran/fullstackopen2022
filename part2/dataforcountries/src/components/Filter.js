const Filter = ({filter, countries}) => {
    const filteredByName = countries
    .filter( c => c.name.common.toLowerCase().includes(filter.toLowerCase()))
   
    if (filteredByName.length > 10) {
        return(
            <p>Too many matches, specify another filter</p>
        )
    }

    if (filteredByName.length < 10 && filteredByName.length > 1) {
        return(
            filteredByName.map( (c, i) => <p key={i}>{c.name.common}</p>)
        )
    }

    if (filteredByName.length === 1) {
        const country = filteredByName[0]
        const langKeys = Object.keys(country.languages)
        return(
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h2>languages</h2>
                <ul>
                    {langKeys.map( (k, i) => <li key={i}>{country.languages[k]}</li>)}
                </ul>
                <img src={country.flags.png} 
                alt="picture of the flag"
                />   
            </div>
        )
    }
}


export default Filter