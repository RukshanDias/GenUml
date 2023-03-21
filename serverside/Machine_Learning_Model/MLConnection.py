import pickle
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer

# Load the saved model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Load the array to be predicted
array = ["banners banners","feel happy","touch book","fly plane","asd sad"]

# Load the dataset from CSV file
data = pd.read_csv('DATASET2.csv')

# Preprocess the test data using the same CountVectorizer as the training data
vectorizer = CountVectorizer()
vectorizer.fit_transform(data['Scenario'])
X_test = vectorizer.transform(array)

# Predict the labels using the loaded model
y_pred = model.predict(X_test)

# Print the predicted labels
print(y_pred)
