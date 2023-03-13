from grammar_checker import GrammarChecker

obj = GrammarChecker()

print("Welcome to the grammar checker!!!!")

user_para = input("Enter Paragraph here: ").lower()





corrected_para = obj.check_grammar_in_paragraph(para=user_para)
print(f"corrected_para:\n{corrected_para}")

