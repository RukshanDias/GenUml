import React from 'react'
import Navbar from '../../components/nav/navbar/Navbar'
import "./UserInput.css"

const UserInput = () => {
    return (
        <div>
            <Navbar />

            <div>
                <div className='userInput-container'>
                    <h2 className='mb-4'>GenUML</h2>

                    <div className="form-outline">
                        <textarea className="form-control border border-5 rounded" id="textarea" rows="6" placeholder='Enter your senario..'></textarea>
                    </div>

                    <div className="d-flex justify-content-around mt-4">
                        <button type="button" className="btn btn-success">
                            <i class="fa fa-file-arrow-up ms-1"></i> import file
                        </button>
                        <button type="button" className="btn btn-danger">
                            Generate Diagram
                            <i className="fas fa-long-arrow-alt-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserInput
