import os
import re

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    # Replace metadata titles
    new_content = new_content.replace('Gengy Summer', 'Vultures')
    
    # Replace uppercase
    new_content = new_content.replace('GENRAGE', 'VULTURES')
    
    # Replace capitalized
    # We want to replace Genrage but not in URLs like genrage.com
    new_content = re.sub(r'\bGenrage\b', 'Vultures', new_content)
    
    # Replace genzy.store
    new_content = new_content.replace('genzy.store', 'vultures.store')

    # Replace 'genzy' standalone? In content.ts it's mostly 'genzy.store'
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.json', '.css')):
            replace_in_file(os.path.join(root, file))
