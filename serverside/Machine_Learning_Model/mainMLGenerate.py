import socket
import pickle
from Machine_Learning_Model.MLModelConnection import ML_classifiaction

socket.getaddrinfo('localhost', 8080)


def getFinalDictionary(actorUcDictionary):
    with open('Machine_Learning_Model/model.pkl', 'rb') as f:
        model = pickle.load(f)

    usecases = createUcArray(actorUcDictionary)
    resultList = ML_classifiaction(usecases, model)
    notUcList = createNotUcList(usecases, resultList)
    FinalDictionary = generateFinalDictionary(actorUcDictionary, notUcList)
    return FinalDictionary


def createUcArray(actorUcDictionary):

    Usecases = []
    for key in actorUcDictionary:
        for usecase in actorUcDictionary[key]:
            Usecases.append(usecase)
    # todo remove thisss
    # print(Usecases)
    return Usecases


def createNotUcList(usecases, resultList):
    notUcList = []
    for index, value in enumerate(resultList):
        if value == 'Not Use case':
            notUcList.append(usecases[index])

    return notUcList


def generateFinalDictionary(actorUcDictionary, notUcList):
    for i in notUcList:
        for x in actorUcDictionary:
            for j in actorUcDictionary[x]:
                if j == i:
                    actorUcDictionary[x].remove(j)
    return actorUcDictionary
