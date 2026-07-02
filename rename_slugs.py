import json

with open('src/data/catalog.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

def update_str(s):
    if not isinstance(s, str):
        return s
    # replace genrage -> vultures
    s = s.replace('genrage', 'vultures')
    s = s.replace('genzy', 'vultures')
    s = s.replace('genz', 'vultures')
    s = s.replace('GENRAGE', 'VULTURES')
    s = s.replace('GENZY', 'VULTURES')
    return s

def traverse(obj):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k not in ('image', 'hoverImage', 'assets', 'hero'):
                if isinstance(v, str):
                    obj[k] = update_str(v)
                else:
                    traverse(v)
    elif isinstance(obj, list):
        for item in obj:
            traverse(item)

traverse(catalog)

with open('src/data/catalog.json', 'w', encoding='utf-8') as f:
    json.dump(catalog, f, indent=2, ensure_ascii=False)
    
