import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './CrystalForm.css'
import PropTypes from 'prop-types'

const CrystalForm = ({addCrystalCallback}) => {
    //instead of seperate states you can have one
    // const [name, setName] = React.useState('')
    // const [color, setColor] = React.useState(' ')
    // const [powers, setPower] =React.useState(' ')
    const [formFields, setFormFields] = React.useState({
        name: "",
        color: "",
        powers: "",
        charges: 0,
    })

    const handleChange = event => setFormFields({
        ...formFields,
        [event.target.name]: event.target.value
    })

    // const onNameChange =(event) => {
    //     const {value} = event.target;
    //     setFormFields({
    //         ...formFields,
    //         name: value
    //     });
    // };

    // const onColorChange = (event)=> {
    //     setFormFields({
    //         ...formFields,
    //         color: event.target.value
    //     });
    // };

    // const onPowersChange = (event)=> {
    //     setFormFields({
    //         ...formFields,
    //         powers: event.target.va
    //     });    
    // };

    const handleSubmit = (event) => {
        event.preventDefault()
        addCrystalCallback(formFields);
        setFormFields({
            name: "",
            color: "",
            powers: "",
            charges: 0
        })
    };

    return (
    <form className="new_crystal_form" onSubmit = {handleSubmit}>
        <section>
            <h2>Add a Crystal</h2>
            <div className="new_crystal_fields">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input name="name" value={formFields.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="color"> Color: </label>
                    <input name="color" value ={formFields.color} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="power"> Powers: </label>
                    <input name="powers" value = {formFields.powers} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="charge"> Charges: </label>
                    <input name="charges" value = {formFields.charges} onChange={handleChange}/>
                </div>
                <button className="button new-crystal-button" type="submit" value="Add Crystal">Add Crystal</button>
            </div>
        </section>
    </form>
    );
}


CrystalForm.propTypes = {
    addCrystalCallback : PropTypes.func.isRequired
}

export default CrystalForm;