import sys
from spelling_grammer_checker.main import checkSentence
from NLP_Model.NLPmodel import extractActorsUc
from Machine_Learning_Model.mainMLGenerate import getFinalDictionary
from draw.draw_diagram import generate_plantuml_code


def runGenerator(text):
    # spelling detection
    corrected_para = checkSentence(text)

    # identify actor & usecases - NLP model
    actorUcDictionary = {}
    actorUcDictionary = extractActorsUc(corrected_para)

    # ML model
    finalDictionary = getFinalDictionary(actorUcDictionary)

    # draw diagram
    diagramLink = generate_plantuml_code(finalDictionary)
    print(diagramLink)
    return diagramLink


arg1 = sys.argv[1]
runGenerator(arg1)
