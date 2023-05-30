import json

nome_f = "db.json" 

with open(nome_f, "r") as file:
    # Load the JSON data from the file
    data = json.load(file)

# Acrescentar o _id a cada registo da base de dados

counter = 1
for item in data:
    item["_id"] = str(counter)
    counter += 1

json_string = json.dumps(data, indent=2)

with open(nome_f, "w") as file:
    file.write(json_string)