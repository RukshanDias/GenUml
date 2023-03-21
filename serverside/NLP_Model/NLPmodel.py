import spacy

# Load the language model
nlp = spacy.load("en_core_web_sm")



# Define a function to check if a token is a verb
def is_verb(token):
    return token.pos_ == "VERB"

# Define a function to check if a token is an object
def is_object(token):
    return token.dep_ == "dobj"

# Define a function to check if a token is a subject
def is_subject(token):
    return token.dep_ == "nsubj" and token.pos_ != "PRON"

def extractActorsUc(text):
    # Process the text with the language model
    doc = nlp(text)
    # Initialize empty sets to store unique actors and usecases
    actors = set()
    usecases = set()

    # initialize a variable and a dictonary
    activeActor = ""
    actorUsecaseDictionary = {}

    # Loop through the tokens in the processed text
    for token in doc:
        # If the token is a verb, and it has an object
        if is_verb(token) and any(is_object(child) for child in token.children):
            # Get the verb and its object
            verb = token.lemma_
            obj = [child for child in token.children if is_object(child)][0]
            # Add the chunk to the set of usecases
            usecases.add(f"{verb} {obj}")

            # dictionary part
            if activeActor not in actorUsecaseDictionary:
              actorUsecaseDictionary[activeActor] = [(f"{verb} {obj}")]
            else:
              actorUsecaseDictionary[activeActor].append(f"{verb} {obj}")

        # If the token is a subject
        elif is_subject(token):
            # Add the root form of the subject to the set of actors
            actors.add(token.lemma_.lower())
            activeActor=token.lemma_.lower() #change active actor
            
    return actorUsecaseDictionary
        


# Print the final sets of chunks
# print("Actors:", actors)
# print("Use Cases:", usecases)
# print("dictionary",actorUsecaseDictionary)
