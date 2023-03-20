import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/nav/navbar/Navbar";
import "./UserInput.css";
import axios from "axios";
import DiagramMarkdownContext from "../../context/DiagramMarkdownContext";

const UserInput = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const { setResponseData } = useContext(DiagramMarkdownContext); // Context

    // add textarea value to state
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // handle generate diagram btn click
    const handleSubmit = (event) => {
        event.preventDefault();
        sendDataToServer(formData);
    };

    // sending data to server
    function sendDataToServer(data) {
        const data1 = new FormData();
        data1.append("userinput-textarea", data["userinput-textarea"]);
        console.log(data1);
        axios
            .post("http://localhost/GenUML/generateDiagram.php", data1)
            .then((response) => {
                console.log("res " + response.data);
                setResponseData(response.data.link);
                navigate("/download");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar />
            <div>
                <div className="userInput-container">
                    <h2 className="mb-4">GenUML</h2>

                    <div className="form-outline">
                        <textarea
                            name="userinput-textarea"
                            onChange={handleChange}
                            className="form-control border border-5 rounded"
                            id="textarea"
                            rows="6"
                            placeholder="Enter your senario.."
                        ></textarea>
                    </div>

                    <div className="d-flex justify-content-around mt-4">
                        <button type="button" className="btn btn-success">
                            <i class="fa fa-file-arrow-up ms-1"></i> import file
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleSubmit}>
                            Generate Diagram
                            <i className="fas fa-long-arrow-alt-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInput;
