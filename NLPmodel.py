import spacy

# Load the language model
nlp = spacy.load("en_core_web_sm")

# Define the text to process
text = "“A customer calls a hair salon to make an appointment for a haircut. The receptionist checks the availability of the hairdresser and schedules the appointment for the next available time slot."

# Process the text with the language model
doc = nlp(text)

# Define a function to check if a token is a verb
def is_verb(token):
    return token.pos_ == "VERB"

# Define a function to check if a token is an object
def is_object(token):
    return token.dep_ == "dobj"

# Define a function to check if a token is a subject
def is_subject(token):
    return token.dep_ == "nsubj" and token.pos_ != "PRON"

# Initialize empty sets to store unique actors and usecases
actors = set()
usecases = set()

# Loop through the tokens in the processed text
for token in doc:
    # If the token is a verb, and it has an object
    if is_verb(token) and any(is_object(child) for child in token.children):
        # Get the verb and its object
        verb = token.lemma_
        obj = [child for child in token.children if is_object(child)][0]
        # Add the chunk to the set of usecases
        usecases.add(f"{verb} {obj}")
    # If the token is a subject
    elif is_subject(token):
        # Add the root form of the subject to the set of actors
        actors.add(token.lemma_.lower())

# Print the final sets of chunks
print("Actors:", actors)
print("Use Cases:", usecases)
