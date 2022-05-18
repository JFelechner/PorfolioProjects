
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import AllPets from './AllPets';

const OnePet = () => {
    const { id } = useParams();
    const history = useHistory();
    const [petDetails, setPetDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log("Request for single pet", res)
                setPetDetails(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log("Pet deleted", res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {/* container */}
            <div className="container px-4">

                {/* row */}
                <div className="row gx-5">

                    {/* column */}
                    <div className="col">
                        {/* header */}
                        <Link to={`/`}>back to home</Link>
                        <h4>Details about: {petDetails.name} |&nbsp; <button onClick={deletePet} className="btn btn-sm btn-danger">Adopt {petDetails.name} </button></h4>

                        <div className="p-3 border bg-light">

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="col">Pet type:</th>
                                        <td>{petDetails.type}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Description:</th>
                                        <td>{petDetails.description}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Skills:</th>
                                        <td>
                                            {petDetails.skillOne} &nbsp;
                                            {petDetails.skillTwo} &nbsp;
                                            {petDetails.skillThree}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )

};

export default OnePet;