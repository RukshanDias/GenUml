def generate_plantuml_code(dic):
    code = "@startuml\n"
    code += "left to right direction\n"

    # Display actors based on the dictionary keys
    for actor in dic.keys():
        code += f"actor \"{actor}\" as {actor.lower()}\n"

    code += "rectangle {\n"  # include UCD name after -> rectangle

    firstUcCount = 0
    for key, values in dic.items():
        for value in values:
            code += f"  usecase \"{value}\" as UC{firstUcCount}\n"
            firstUcCount += 1

    code += "}\n"

    lastUcCount = 0
    for key, values in dic.items():
        for value in values:
            code += f"{key.lower()} -- UC{lastUcCount}\n"
            lastUcCount += 1

    code += "@enduml"

    return code


thisdict = {  # dictionary value should be a list
    "brand": ["test", "Ford"],
    "model": ["Mustang"],
    "year": ["1964"]
}
newdict = {
    "Food": ["Eat Food", "Pay for Food", "Drink"],
    "Drink": ["HI", "BYE"]
}
# code = generate_plantuml_code(thisdict)
# print(code)