import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";

const AllPets = () => {
    let [allPets, setAllPets] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log("getting all pets -->", res)
                setAllPets(res.data.results)
            })
            .catch(err => console.log("Error", err))
    }, [])


    return (
        <>
            {/* container */}
            <div className="container px-4">

                {/* row */}
                <div className="row gx-5">

                    {/* column */}
                    <div className="col">


                        {/* header */}
                        <Link to={"/pets/new"}>add a pet to the shelter</Link>
                        <h4>These pets are looking for a good home</h4>


                        {/* table */}
                        <table className="table table-bordered border-dark table-striped " id="allPetsTable">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allPets.map((petObj, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{petObj.name}</th>
                                            <td>{petObj.type}</td>
                                            <td>
                                                <Link to={`/pets/${petObj._id}`} >Details</Link> |&nbsp;
                                                <Link to={`/pets/${petObj._id}/edit`} >Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </>
    )

};

export default AllPets;