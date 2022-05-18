import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const EditPetForm = () => {
    const { id } = useParams();
    let [formErrors, setFormErrors] = useState({});
    let [petNotFound, setPetNotFound] = useState(false);
    let [petInfo, setPetInfo] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res)
                if (res.data.results) {
                    console.log("response is this-->", res)
                    setPetInfo(res.data.results)
                } else {
                    setPetNotFound(true)
                }
            })
            .catch(err => console.log(err))
    }, [])

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("change recorded")
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value,
            [e.target.type]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.skillOne]: e.target.value,
            [e.target.skillTwo]: e.target.value,
            [e.target.skillThree]: e.target.value
        })
    }

    const updatePetSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${id}/pets`, petInfo)
            .then(res => {
                console.log("res after put request-->", res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors)
                } else {
                    history.push(`/`)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                petNotFound ?
                    <>
                        <p className="ms-4 text-danger">We're sorry, but we could not find the pet you are looking for. Would you like to add this pet to our database? <Link to={`/pets/new`}>add a pet</Link></p>
                    </>

                    :
                    <>
                        {/* container */}
                        <div className="container px-4">

                            {/* form header */}
                            <form onSubmit={updatePetSubmitHandler}>
                                <Link to={`/`}>back to home</Link>
                                <h4>Edit {petInfo.name} </h4>

                                {/* row */}
                                <div className="row gx-5">

                                    {/* left column */}
                                    <div className="col">

                                        {/* header */}

                                        {/* left form */}
                                        <div className="p-3 border bg-light">
                                            <div className="form-group">
                                                <label className="mb-2" htmlFor="">Pet Name:</label>
                                                <input onChange={changeHandler} type="text" name="name" className="form-control" value={petInfo.name}/>
                                                <p className="text-danger">{formErrors.name?.message}</p>
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-2" htmlFor="">Type:</label>
                                                <input onChange={changeHandler} type="text" name="type" className="form-control" value={petInfo.type}/>
                                                <p className="text-danger">{formErrors.type?.message}</p>
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-2" htmlFor="">Description:</label>
                                                <input onChange={changeHandler} type="text" name="description" className="form-control" value={petInfo.description}/>
                                                <p className="text-danger">{formErrors.description?.message}</p>
                                            </div>
                                            <input type="submit" value="Update Pet" className="btn btn-primary" />

                                        </div>

                                    </div>

                                    {/* right column */}
                                    <div className="col">

                                        {/* right form */}
                                        <div className="p-3 border bg-light">
                                            <p>Skills (optional)</p>
                                            <div className="form-group">
                                                <label className="mb-2" htmlFor="">Skill 1:</label>
                                                <input onChange={changeHandler} type="text" name="skillOne" className="form-control" value={petInfo.skillOne}/>
                                                &nbsp;
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-2" htmlFor="">Skill 2:</label>
                                                <input onChange={changeHandler} type="text" name="skillTwo"  className="form-control" value={petInfo.skillTwo}/>
                                                &nbsp;
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-2" htmlFor="">Skill 3:</label>
                                                <input onChange={changeHandler} type="text" name="skillThree"  className="form-control" value={petInfo.skillThree}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </>
            }
        </div>
    )

}

export default EditPetForm;