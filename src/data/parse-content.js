
import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const md = new MarkdownIt();

// Helper to clean markdown syntax from a string
const cleanText = (text) => {
  if (!text) return '';
  return text.replace(/(\*\*|__|\[|\]|\(|\))/g, ''); // Removes bold, italics, and link markdown
};

const content = fs.readFileSync(path.resolve(__dirname, '../../Portfolio-content.md'), 'utf8');
const tokens = md.parse(content, {});

const data = {
  en: {
    skills: { categories: [] },
    education: { entries: [] },
    experience: { entries: [] },
    projects: { entries: [] },
    leadership: { entries: [] },
    awards: { categories: [] },
    hero: {},
    about: { personalInfo: {} }
  },
  de: {
    skills: { categories: [] },
    education: { entries: [] },
    experience: { entries: [] },
    projects: { entries: [] },
    leadership: { entries: [] },
    awards: { categories: [] },
    hero: {},
    about: { personalInfo: {} }
  }
};

let currentSection = '';
let currentSubSection = null;
let isParsingTable = false;

const pushSubSection = () => {
  if (!currentSubSection) return;

  const sectionMap = {
    'Education / Ausbildung': 'education',
    'Professional Experience / Berufserfahrung': 'experience',
    'Projects / Projekte': 'projects',
    'Awards & Certificates / Auszeichnungen & Zertifikate': 'awards',
  };

  const sectionKey = sectionMap[currentSection];
  if (sectionKey) {
    if(sectionKey === 'awards') {
        const category = data.en[sectionKey].categories.find(c => c.name === currentSubSection.title) || { name: currentSubSection.title, items: [] };
        category.items.push(...currentSubSection.list);
         if(!data.en[sectionKey].categories.find(c => c.name === currentSubSection.title)) {
            data.en[sectionKey].categories.push(category);
            data.de[sectionKey].categories.push(category);
         }
    } else {
        const entry = {
            title: currentSubSection.title,
            meta: currentSubSection.meta,
            description: currentSubSection.description,
            achievements: currentSubSection.list
        };
        data.en[sectionKey].entries.push(entry);
        data.de[sectionKey].entries.push(entry);
    }
  }
  currentSubSection = null;
};


for (let i = 0; i < tokens.length; i++) {
  const token = tokens[i];

  if (token.type === 'heading_open') {
    pushSubSection();
    const content = cleanText(tokens[i + 1].content);
    if (token.tag === 'h2') {
      currentSection = tokens[i+1].content.trim();
      isParsingTable = (currentSection === 'Core Competencies / Kernkompetenzen');
    } else if (token.tag === 'h3') {
      currentSubSection = { title: content, list: [], description: '', meta: '' };
    }
  }

  // Personal Statement
  if (currentSection === 'Personal Statement' && token.type === 'paragraph_open') {
      const inline = tokens[i+1];
      if(inline.content.startsWith('**English**')){
          data.en.hero.statement = cleanText(inline.content.replace('**English**', '')).trim();
      } else if(inline.content.startsWith('**Deutsch**')){
          data.de.hero.statement = cleanText(inline.content.replace('**Deutsch**', '')).trim();
      }
  }

  // Competencies Table
  if (isParsingTable && token.type === 'tr_open') {
    const rowTokens = tokens.slice(i + 1, tokens.findIndex((t, idx) => idx > i && t.type === 'tr_close'));
    const cells = rowTokens.filter(t => t.type === 'inline').map(t => cleanText(t.content));
    if (cells.length === 3 && cells[0] !== 'Category') {
      data.en.skills.categories.push({ name: cells[0], skills: cells[1] });
      data.de.skills.categories.push({ name: cells[0], skills: cells[2] });
    }
  }

  // Lists for other sections
  if (currentSubSection && token.type === 'bullet_list_open') {
    const listTokens = tokens.slice(i + 1, tokens.findIndex((t, idx) => idx > i && t.type === 'bullet_list_close'));
    currentSubSection.list = listTokens.filter(t => t.type === 'inline').map(t => cleanText(t.content));
  }

  // Paragraphs for descriptions/meta
  if (currentSubSection && token.type === 'paragraph_open') {
      const p_content = cleanText(tokens[i+1].content);
      if(p_content.includes('–') || p_content.includes('|') || p_content.match(/\d{2}\/\d{4}/)) {
           currentSubSection.meta = p_content;
      } else {
          currentSubSection.description = p_content;
      }
  }

   // Leadership section (simple list)
  if (currentSection === 'Leadership & Extracurricular / Leadership & Außeruniversitäre Aktivitäten' && token.type === 'bullet_list_open') {
    const listTokens = tokens.slice(i + 1, tokens.findIndex((t, idx) => idx > i && t.type === 'bullet_list_close'));
    const items = listTokens.filter(t => t.type === 'inline').map(t => cleanText(t.content));
    data.en.leadership.entries.push(...items.map(item => ({description: item})));
    data.de.leadership.entries.push(...items.map(item => ({description: item})));
  }
}
pushSubSection(); // Push the last collected subsection

fs.writeFileSync(path.resolve(__dirname, '../locales/en.json'), JSON.stringify(data.en, null, 2));
fs.writeFileSync(path.resolve(__dirname, '../locales/de.json'), JSON.stringify(data.de, null, 2));

console.log('JSON files generated successfully.');
