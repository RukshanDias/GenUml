import unittest
import sys
sys.path.append('serverside')
from spelling_grammer_checker.grammar_checker import GrammarChecker


class TestGrammarChecker(unittest.TestCase):
    def test_check_grammar_in_paragraph(self):
        # Test a paragraph with a single sentence
        paragraph = "I has a book."
        expected_result = "I have a book."
        self.assertEqual(GrammarChecker.check_grammar_in_paragraph(paragraph), expected_result)

        # Test a paragraph with multiple sentences
        paragraph = "She don't like ice cream. He isn't going to the party. They was happy to see him."
        expected_result = "She doesn't like ice cream. He isn't going to the party. They were happy to see him."
        self.assertEqual(GrammarChecker.check_grammar_in_paragraph(paragraph), expected_result)

if __name__ == '__main__':
    unittest.main()
