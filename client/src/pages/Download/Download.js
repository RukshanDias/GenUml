import React from 'react'
import Navbar from '../../components/nav/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';
import "./Download.css"

const Download = () => {
    return (
        <div>
            <Navbar />

            <div>
                <div className='download-container'>
                    <h2 className='mb-0'>GenUML</h2>
                    <p>Final output of your use case diagram</p>

                    <div className="diagram-container overflow-auto border border-dark border-2 rounded-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Use_case_restaurant_model.svg/1200px-Use_case_restaurant_model.svg.png"
                            alt="generated diagram"
                            className='p-4'
                        />
                    </div>

                    <div className="d-flex justify-content-around mt-4">
                        <Link to="/edit">
                            <button type="button" className="btn btn-success">
                                <i class="fa-solid fa-pen-to-square"></i> Edit
                            </button>
                        </Link>
                        <button type="button" className="btn btn-danger">
                            <i class="fa-regular fa-circle-down"></i> Download
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Download
