import React from "react";
import { useState, useContext, useEffect, useRef } from "react";
import Navbar from "../../components/nav/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Edit_items from "../../components/edit_items/Edit_items";
import { Link } from "react-router-dom";
import plantUmlEncoder from "plantuml-encoder";
import axios from "axios";
import "./Edit.css";
import AlertMsg from "../../components/alert/AlertMsg";
import DiagramMarkdownContext from "../../context/DiagramMarkdownContext";
import DiagramDictionaryContext from "../../context/DiagramDictionaryContext";

const Edit = () => {
    const { responseData } = useContext(DiagramMarkdownContext); // Context
    const { setResponseData } = useContext(DiagramMarkdownContext); // Context
    const { diagramDictionary } = useContext(DiagramDictionaryContext); // Context
    const [diagramUrl, setDiagramUrl] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const childRef = useRef();

    // creating img from plantuml code
    const encodeDiagram = (plantUmlCode) => {
        const encodedCode = plantUmlEncoder.encode(plantUmlCode);
        const url = `http://www.plantuml.com/plantuml/img/${encodedCode}`;
        return url;
    };

    // run encodeDiagram fun onchange responseData
    useEffect(() => {
        const encodedDiagram = encodeDiagram(responseData);
        setDiagramUrl(encodedDiagram);
    }, [responseData]);

    // convert dictionary back to edit-supported dictionary
    const converEditObj = (dictionary) => {
        const dataArray = [];
        for (const actor in dictionary) {
            if (Object.hasOwnProperty.call(dictionary, actor)) {
                dataArray.push({ actor: actor, usecases: dictionary[actor] });
            }
        }
        return dataArray;
    };

    // onclick view btn
    const handleView = () => {
        const data = new FormData();
        data.append("dictionary", JSON.stringify(diagramDictionary));
        axios
            .post("http://localhost/GenUML/editDiagram.php", data)
            .then((response) => {
                setResponseData(response.data.code);
            })
            .catch((error) => {
                console.log(error);
                setShowAlert(true);
            });
    };

    // child refernces
    const handleAddActor = () => {
        childRef.current.addActor();
    };
    const handleAddUC = () => {
        childRef.current.addUsecase();
    };

    return (
        <div>
            <Navbar />
            {showAlert && <AlertMsg type="warning" text="Error occured.. pls try again.." setShowAlert={setShowAlert} />}
            <div className="mb-4">
                <h2>Edit your diagram</h2>
                <div className="main-container d-flex justify-content-center border border-5 rounded p-3">
                    {/* options panel */}
                    <div className="options">
                        {/* ADD btns */}
                        <div className="d-flex justify-content-around">
                            <button type="button" className="btn btn-primary px-4" onClick={handleAddActor}>
                                <i className="fa-solid fa-person"></i>
                            </button>
                            <button type="button" className="btn btn-primary px-4" onClick={handleAddUC}>
                                <i className="fa-regular fa-message"></i>
                            </button>
                        </div>

                        {/* text inputs */}
                        <Edit_items data={converEditObj(diagramDictionary)} ref={childRef} />

                        {/* View/Save btns */}
                        <div className="d-flex justify-content-around">
                            <button type="button" className="btn btn-success px-4" onClick={handleView}>
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
                    <div className="diagram-container">
                        <img src={diagramUrl} alt="generated diagram" className="p-0" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Edit;
