import re

with open('src/data/content.ts', 'r') as f:
    content = f.read()

# Rename the export
content = content.replace('export const contentPages: Record<string, ContentPage> = {', 'export const contentPagesEn: Record<string, ContentPage> = {')

# Add imports at top
imports = """import { contentPagesHi } from './content-hi';
import { contentPagesFr } from './content-fr';
import { contentPagesEs } from './content-es';

"""

content = imports + content

# Add the combined export at the bottom
exports = """

export const contentPages = {
  en: contentPagesEn,
  hi: contentPagesHi,
  fr: contentPagesFr,
  es: contentPagesEs
};
"""

content += exports

with open('src/data/content.ts', 'w') as f:
    f.write(content)
