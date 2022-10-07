import glob

path_list = []
for filepath in glob.glob("**/*js", recursive=True):
    path_list.append(filepath)

doc_path = "../docs.js"
with open(doc_path, "w", encoding="utf-8") as f:
    f.write("")

for filepath in path_list:
    with open(filepath, "r", encoding="utf-8") as a, open(doc_path, "a", encoding="utf-8") as b:
        b.write(a.read() + "\n")

print(len(path_list), "files merged")