import React from 'react'
import Navbar from '../../components/nav/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Edit_items from '../../components/edit_items/Edit_items';
import { Link } from 'react-router-dom';
import "./Edit.css"

const Edit = () => {
    return (
        <div>
            <Navbar />

            <div className='mb-4'>
                <h2>Edit your diagram</h2>
                <div className='main-container d-flex justify-content-center border border-5 rounded p-3'>

                    {/* options panel */}
                    <div className='options'>
                        {/* ADD btns */}
                        <div className='d-flex justify-content-around'>
                            <button type="button" className="btn btn-primary px-4">
                                <i className="fa-solid fa-person"></i>
                            </button>
                            <button type="button" className="btn btn-primary px-4">
                                <i className="fa-regular fa-message"></i>
                            </button>
                        </div>

                        {/* text inputs */}
                        <Edit_items />

                        {/* View/Save btns */}
                        <div className='d-flex justify-content-around'>
                            <button type="button" className="btn btn-success px-4">
                                <i className="fa-sharp fa-regular fa-eye"></i> View
                            </button>
                            <Link to="/download">
                                <button type="button" className="btn btn-danger px-4">
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i> Save
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* diagram img */}
                    <div className='diagram-container'>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Use_case_restaurant_model.svg/1200px-Use_case_restaurant_model.svg.png"
                            alt="generated diagram"
                            className='p-0'
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Edit
