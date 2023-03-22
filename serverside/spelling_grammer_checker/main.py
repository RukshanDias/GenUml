# import sys
from spelling_grammer_checker.grammar_checker import GrammarChecker


def checkSentence(paragraph):

    obj = GrammarChecker()
    user_para = paragraph

    corrected_para = obj.check_grammar_in_paragraph(para=user_para)
    # print(f"corrected_para:\n{corrected_para}")
    # print(corrected_para)
    return corrected_para


# arg1 = sys.argv[1]
# checkSentence(arg1)
