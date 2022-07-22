import Button from "./Button"

const Filter = ({persons, filter, removePerson}) => {

    return(
        <div>
            {persons.filter( p => p.name.toLowerCase().includes(filter.toLowerCase()))
                    .map( p => 
                    <p key={p.id}>
                        {p.name} {p.number} <Button text="delete" type="submit" onClick={removePerson(p)}/>
                    </p>
                    )}
        </div>
    )
}
 

export default Filter
