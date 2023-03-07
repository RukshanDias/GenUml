from grammar_checker import GrammarChecker

obj = GrammarChecker()

print("Welcome to the grammar checker!!!!")
print("IF YOU WANT TO CHECK GRAMMAR ERRORS IN A TEXT FILE ENTER 'file', IF YOU WANT TO CHECK GRAMMAR IN A SINGLE PARAGRAPH TYPE 'para' or"
      " if you want to check grammar in a single sentence type 'sentence")
user_choice = input("Type here: ").lower()

if user_choice == 'file':
    file_name = input('Enter the absolute file path: ')
    obj.check_grammar_in_files(file_name=file_name)
    with open(file_name,'w') as final_file:
        final_file.writelines(obj.last_para_list)

elif user_choice == 'para':
    paragraph = input("Copy and paste or type your paragraph here. Separate your paragraphs by fullstops:\n")
    obj.check_grammar_in_paragraph(para=paragraph)
    final_para = ".".join(obj.last_para_list)
    print(f"Corrected paragraph:")
    print(f"""{final_para}""")


elif user_choice == 'sentence':
    user_sentence = input("Enter your sentence here: ")
    obj.check_grammar_single_sentence(text=user_sentence)

else:
    print('Wrong input!!')