import spacy

nlp = spacy.load("en_core_web_sm")

def extract_subject_verb_object(paragraph):
    doc = nlp(paragraph)
    actors = []
    usecases = []
    for sent in doc.sents:
        subjects = []
        verbs = []
        objects = []
        for token in sent:
            if token.dep_ == "ROOT" and token.pos_ == "VERB":
                verbs.append(token.text)
                for subject in token.lefts:
                    if subject.dep_ == "nsubj":
                        subjects.append(subject.text)
                for obj in token.rights:
                    if obj.dep_ == "dobj":
                        objects.append(obj.text)
        actors.extend(subjects)
        usecases.append(" ".join(verbs + objects))
    return actors, usecases

paragraph = input("Enter a paragraph: ")
actors, usecases = extract_subject_verb_object(paragraph)
print("Actors:", actors)
print("Usecases:", usecases)
   