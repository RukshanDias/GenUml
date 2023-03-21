
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
  
def ML_classifiaction(Usecases,model):
    
    # Load the dataset from CSV file
    data = pd.read_csv('DATASET2.csv')

    # Preprocess the test data using the same CountVectorizer as the training data
    vectorizer = CountVectorizer()
    vectorizer.fit_transform(data['Scenario'])
    X_test = vectorizer.transform(Usecases)

    # Predict the labels using the loaded model
    y_pred = model.predict(X_test)
    y_pred_list = y_pred.tolist()
    ###############################todo - remove this
    print(y_pred_list) 
    return y_pred_list



   
    
