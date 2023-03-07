from gingerit.gingerit import GingerIt



class GrammarChecker:
    parser = GingerIt()
    last_para_list = []
    @classmethod
    def check_grammar_single_sentence(cls,text:str):
        results = cls.parser.parse(text)
        correction_list = results['corrections']
        if len(correction_list) != 0:
            if '\n' in results['text']:
                results['text'] = results['text'].replace("\n", "")
            print(f"Incorrect sentence: {results['text']}\n")
            for i in range(len(correction_list)):
                print(f"Incorrect word: {correction_list[i]['text']}\nCorrected_Word: {correction_list[i]['correct']}\n")
            print(f"Corrected sentence: {results['result']}\n___________________________________________________________________________________________________________________________________________________________________________________")
            cls.last_para_list.append(results['result'])

    @classmethod
    def check_grammar_in_files(cls,file_name:str):
        with open(file_name,'r') as file:
            sentences_list=file.read().split('.')
            for sentence in sentences_list:
                cls.check_grammar_single_sentence(text=sentence)

    @classmethod
    def check_grammar_in_paragraph(cls,para:str):
        sentence_list = para.split('.')
        for sentence in sentence_list:
            cls.check_grammar_single_sentence(text=sentence)