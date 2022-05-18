

import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const NewPetForm = () => {
    let [name, setName] = useState("")
    let [type, setType] = useState("")
    let [description, setDescription] = useState("")
    let [skillOne, setSkillOne] = useState("")
    let [skillTwo, setSkillTwo] = useState("")
    let [skillThree, setSkillThree] = useState("")
    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createPetSubmitHandler = (e) => {
        e.preventDefault();
        let formInfoObj = { name, type, description, skillOne, skillTwo, skillThree }
        axios.post("http://localhost:8000/api/pets", formInfoObj)
            .then(res => {
                console.log("form submitted!", res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors)
                } else {
                    setName(res.data.results)
                    setType(res.data.results)
                    setDescription(res.data.results)
                    setSkillOne(res.data.results)
                    setSkillTwo(res.data.results)
                    setSkillThree(res.data.results)
                    history.push("/")
                }
            })
            .catch(err => console.log("error insubmitting post request", err))
    }


    return (
        <>

            {/* container */}
            <div className="container px-4">

                {/* form header */}
                <form onSubmit={createPetSubmitHandler}>
                    <Link to={`/`}>back to home</Link>
                    <p>Know a pet needing a home?</p>

                    {/* row */}
                    <div className="row gx-5">

                        {/* left column */}
                        <div className="col">

                            {/* header */}

                            {/* left form */}
                            <div className="p-3 border bg-light">
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Pet Name:</label>
                                    <input onChange={(e) => { setName(e.target.value) }} type="text" name="" id="" className="form-control" />
                                    <p className="text-danger">{formErrors.name?.message}</p>
                                </div>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Type:</label>
                                    <input onChange={(e) => { setType(e.target.value) }} type="text" name="" id="" className="form-control" />
                                    <p className="text-danger">{formErrors.type?.message}</p>
                                </div>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Description:</label>
                                    <input onChange={(e) => { setDescription(e.target.value) }} type="text" name="" id="" className="form-control" />
                                    <p className="text-danger">{formErrors.description?.message}</p>
                                </div>
                                <input type="submit" value="Add Pet" className="btn btn-primary" />


                            </div>

                        </div>

                        {/* right column */}
                        <div className="col">

                            {/* right form */}
                            <div className="p-3 border bg-light">
                                <p>Skills (optional)</p>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Skill 1:</label>
                                    <input onChange={(e) => { setSkillOne(e.target.value) }} type="text" name="" id="" className="form-control" />
                                    &nbsp;
                                </div>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Skill 2:</label>
                                    <input onChange={(e) => { setSkillTwo(e.target.value) }} type="text" name="" id="" className="form-control" />
                                    &nbsp;
                                </div>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="">Skill 3:</label>
                                    <input onChange={(e) => { setSkillThree(e.target.value) }} type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )

};

export default NewPetForm;