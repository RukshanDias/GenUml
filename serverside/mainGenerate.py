import sys

import socket
from spelling_grammer_checker.main import checkSentence
from NLP_Model.NLPmodel import extractActorsUc
from Machine_Learning_Model.MLModelConnection import ML_classifiaction
import pickle


socket.getaddrinfo('localhost', 8080)

def createUcArray(actorUcDictionary):
  
    Usecases = []
    for key in actorUcDictionary:
        for usecase in actorUcDictionary[key]:
            Usecases.append(usecase)
    #####todo remove thisss
    print(Usecases)        
    return Usecases
            
def createNotUcList(usecases,resultList):
    notUcList = []
    for index, value in enumerate(resultList):
        if value == 'Not Use case':
            notUcList.append(usecases[index])
            
    return notUcList 

def generateFinalDictionary(actorUcDictionary,notUcList):
    for i in notUcList:
        for x in actorUcDictionary:
            for j in actorUcDictionary[x]:
                if j == i:
                    actorUcDictionary[x].remove(j)
    return actorUcDictionary
                


    # draw diagram
    #diagramLink = generate_plantuml_code(actorUcDictionary)
    #print(diagramLink)
    #return diagramLink

# Load the saved model
with open('model.pkl', 'rb') as f:
   model = pickle.load(f)
   
#spelling detection
corrected_para = checkSentence("Librarian can add books to the library catalog when new books are available in the library. Librarian can remove books from the library catalog when needed. Member can reserve books which he/she wishes to borrow. Library Manager can take a list of books available in the Library. Furthermore he/she can add or remove any books from the Library catalog when needed. When member is reserving the books he/she has to login to the system. Member can renew the books he/she has borrowed. When renewing if book has exceeded the loan period a fine will be calculated. For renewing purposes the member should login to the system. Library Manager can generate reports of the Borrowed books, Overdue books at the end of each month.")
# identify actor & usecases - NLP model
#actorUcDictionary = {}
actorUcDictionary = extractActorsUc(corrected_para)   
######todo:add text
usecases = createUcArray(actorUcDictionary)
resultList = ML_classifiaction(usecases,model)
notUcList = createNotUcList(usecases, resultList)
FinalDictionary = generateFinalDictionary(actorUcDictionary,notUcList)
print(FinalDictionary)


 
#arg1 = sys.argv[1]
#runGenerator(arg1)

