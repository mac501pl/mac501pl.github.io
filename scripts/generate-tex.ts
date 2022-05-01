import { readFileSync, writeFileSync } from "fs";
import { parse } from 'node-html-parser';

const latexFile = readFileSync('./latex/CV.tex', 'utf8');
const htmlDocument = readFileSync('../client/build/skills.html', 'utf8');

const parsedHTML = parse(htmlDocument);
const skills = parsedHTML.querySelectorAll('section').map(element => {
  const label = element.querySelector("h3")?.innerText!;
  const skills = element.querySelectorAll("li").map(element => element.innerText).join(', ');

  return { label, skills };
});

const skillsTexCode = `
\\section{Umięjętności}
  \\begin{itemize}[leftmargin=0.5cm, label={}]
    \\small{\\item{
${skills.map(({ label, skills }) => `    \\textbf{${label}}{: ${skills}}`).join('\\\\\n')}
    }}
  \\end{itemize}
`

const newFile = latexFile.replace("%{skills}%", skillsTexCode);
writeFileSync('./latex/output.tex', newFile);
