from gingerit.gingerit import GingerIt



class GrammarChecker:
    parser = GingerIt()

    @classmethod
    def __check_grammar_single_sentence(cls,text:str) -> str:
        results = cls.parser.parse(text)
        return results['result']



    @classmethod
    def check_grammar_in_paragraph(cls,para:str) -> str:
        final_para_list = []
        sentence_list = para.split('.')
        for sentence in sentence_list:
            corrected_sen = cls.__check_grammar_single_sentence(text=sentence)
            final_para_list.append(corrected_sen)
        final_para = ".".join(final_para_list)
        return final_para