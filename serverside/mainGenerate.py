import sys
import json
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
    print(json.dumps(finalDictionary))  # convert to double qoutes
    print("\n\n")

    # draw diagram
    diagramLink = generate_plantuml_code(finalDictionary)
    print(diagramLink)

    # runGenerator("Librarian can add books to the library catalog when new books are available in the library. Librarian can remove books from the library catalog when needed. Member can reserve books which he/she wishes to borrow. Library Manager can take a list of books available in the Library. Furthermore he/she can add or remove any books from the Library catalog when needed. When member is reserving the books he/she has to login to the system. Member can renew the books he/she has borrowed. When renewing if book has exceeded the loan period a fine will be calculated. For renewing purposes the member should login to the system. Library Manager can generate reports of the Borrowed books, Overdue books at the end of each month.")

arg1 = sys.argv[1]
runGenerator(arg1)
