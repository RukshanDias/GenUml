import spacy

nlp = spacy.load("en_core_web_sm")

def extract_subject_verb_object(paragraph):
    doc = nlp(paragraph)
    actors = set()
    usecases = set()
    for sent in doc.sents:
        subjects = []
        verbs = []
        objects = []
        for token in sent:
            if token.dep_ == "ROOT" and token.pos_ == "VERB":
                verbs.append(token.lemma_)
                for subject in token.lefts:
                    if subject.dep_ == "nsubj":
                        if subject.pos_ != "PRON":
                            subjects.append(subject.text.lower())
                for obj in token.rights:
                    if obj.dep_ == "dobj":
                        objects.append(obj.text.lower())
        actors.update(subjects)
        usecases.add(" ".join(verbs + objects))
    return list(map(str, actors)), list(map(str, usecases))

paragraph = input("Enter a paragraph: ")
doc = nlp(paragraph)
new_paragraph = " ".join([token.text for token in doc if not token.pos_ == "PRON"])
actors, usecases = extract_subject_verb_object(new_paragraph)
print("Actors:", actors)
print("Usecases:", usecases)
