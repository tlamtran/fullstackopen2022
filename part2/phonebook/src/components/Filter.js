const Filter = ({persons, filter}) => {
    return(
        <ul>
            {persons.filter( p => p.name.toLowerCase().includes(filter.toLowerCase()))
                    .map( p => <Person person={p} key={p.id}/>)}
        </ul>
    )
}

const Person = ({person}) => {
    return(
        <li>
            {person.name} {person.number}
        </li>
    )
}

export default Filter
