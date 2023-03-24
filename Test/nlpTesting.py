import sys
sys.path.append('serverside')
from NLP_Model.NLPmodel import is_verb, is_object, is_subject,extractActorsUc
import unittest
import spacy

# Load the language model
nlp = spacy.load("en_core_web_sm")

class TestFunctions(unittest.TestCase):

    def test_is_verb(self):
        doc = nlp("I am running")
        self.assertTrue(is_verb(doc[2]))
        self.assertFalse(is_verb(doc[1]))

    def test_is_object(self):
        doc = nlp("I am eating an apple")
        self.assertTrue(is_object(doc[4]))
        self.assertFalse(is_object(doc[1]))

    def test_is_subject(self):
        doc = nlp("The customer is going to the store")
        self.assertTrue(is_subject(doc[1]))
        self.assertFalse(is_subject(doc[2]))


#Testing extractActorUc() function
class TestExtractActorsUc(unittest.TestCase):

    def setUp(self):
        # Load the language model only once for all tests
        self.nlp = spacy.load("en_core_web_sm")

    def test_extractActorsUc(self):
        # Test case 1: check that the function returns a dictionary
        text = "The customer buys a product."
        result = extractActorsUc(text)
        self.assertIsInstance(result, dict)

        # Test case 2: check that the dictionary has the expected keys and values
        expected_result = {'customer': ['buy product']}
        self.assertDictEqual(result, expected_result)

        # Test case 3: check that the function can handle multiple actors and use cases
        text = "The customer buys a product. The employee returns it."
        result = extractActorsUc(text)
        expected_result = {'customer': ['buy product'], 'employee': ['return it']}
        self.assertDictEqual(result, expected_result)

if __name__ == '__main__':
    unittest.main()