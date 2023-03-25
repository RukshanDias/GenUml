"""
import pandas as pd
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics import accuracy_score, f1_score, recall_score
from sklearn.model_selection import train_test_split

# Load the dataset from CSV file
data = pd.read_csv('DATASET2.csv')

# Preprocess the data
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(data['Scenario'])
y = data['Classification']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Train the model
model = LogisticRegression()
model.fit(X_train, y_train)

# Save the trained model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Predict on test data
y_pred = model.predict(X_test)
print(y_pred)

# Compute the accuracy, F1 score, and recall score
accuracy = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred, average='weighted')
recall = recall_score(y_test, y_pred, average='weighted')

# Compute the number of correctly and incorrectly classified instances
correct_count = sum(y_test == y_pred)
incorrect_count = sum(y_test != y_pred)


1
# Print the results
print("Accuracy: {:.2f}%".format(accuracy * 100))
print("Correctly classified instances: {}".format(correct_count))
print("Incorrectly classified instances: {}".format(incorrect_count))
print("F1 Score: {:.2f}".format(f1))
print("Recall Score: {:.2f}".format(recall))

"""
# Import necessary libraries
import pandas as pd
import pickle
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics import accuracy_score, f1_score, recall_score
from sklearn.model_selection import train_test_split

# Load the dataset from CSV file
data = pd.read_csv('DATASET2.csv')

# Preprocess the data
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(data['Scenario'])
y = data['Classification']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = MultinomialNB()
model.fit(X_train, y_train)

# Predict on test data
y_pred = model.predict(X_test)

# Compute the accuracy, F1 score, and recall score
accuracy = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred, average='weighted')
recall = recall_score(y_test, y_pred, average='weighted')

# Compute the number of correctly and incorrectly classified instances
correct_count = sum(y_test == y_pred)
incorrect_count = sum(y_test != y_pred)

# Save the model to a file
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Print the results
print("Accuracy: {:.2f}%".format(accuracy * 100))
print("F1 score: {:.2f}".format(f1))
print("Recall score: {:.2f}".format(recall))
print("Correctly classified instances: {}".format(correct_count))
print("Incorrectly classified instances: {}".format(incorrect_count))
