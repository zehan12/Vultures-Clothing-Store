import os
import re

files_to_fix = [
    "src/app/partner/page.tsx",
    "src/app/shipping-policy/page.tsx",
    "src/app/refund-policy/page.tsx",
    "src/app/about-us/page.tsx",
    "src/app/policies/page.tsx",
    "src/app/exchange-policy/page.tsx",
    "src/app/terms-of-service/page.tsx",
    "src/app/privacy-policy/page.tsx",
    "src/app/return-policy/page.tsx"
]

for filepath in files_to_fix:
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove the import line
    content = re.sub(r'import \{ contentPages \} from "@/data/content";\n?', '', content)
    
    # Replace page={contentPages["slug"]} with pageId="slug"
    content = re.sub(r'page=\{contentPages\["([^"]+)"\]\}', r'pageId="\1"', content)

    with open(filepath, 'w') as f:
        f.write(content)

