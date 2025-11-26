const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function convertFiles() {
  const files = await glob('src/**/*.{ts,tsx}', { ignore: ['node_modules/**'] });
  
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Skip if already has 'use client' or is a data/type file
    if (content.includes("'use client'") || file.includes('/data/') || file.includes('/types/')) {
      continue;
    }
    
    // Replace react-router-dom imports
    if (content.includes("from 'react-router-dom'") || content.includes('from "react-router-dom"')) {
      // Check if it's a component file (has React or JSX)
      if (content.includes('React') || content.includes('export') || content.includes('function') || content.includes('const') && content.includes('= ()')) {
        // Add 'use client' at the top if it's a component
        if (!content.includes("'use client'") && (file.endsWith('.tsx') || content.includes('React'))) {
          content = "'use client';\n\n" + content;
          modified = true;
        }
        
        // Replace Link import
        if (content.includes("import { Link } from 'react-router-dom'")) {
          content = content.replace(
            /import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"]/g,
            "import Link from 'next/link'"
          );
          modified = true;
        }
        
        if (content.includes('import { Link } from "react-router-dom"')) {
          content = content.replace(
            /import\s*{\s*Link\s*}\s*from\s*["']react-router-dom["']/g,
            'import Link from "next/link"'
          );
          modified = true;
        }
        
        // Replace useParams, useNavigate, useLocation
        if (content.includes("useParams") || content.includes("useNavigate") || content.includes("useLocation")) {
          content = content.replace(
            /import\s*{([^}]*)}\s*from\s*['"]react-router-dom['"]/g,
            (match, imports) => {
              const importsList = imports.split(',').map(i => i.trim());
              const nextImports = [];
              const routerImports = [];
              
              importsList.forEach(imp => {
                if (imp === 'Link') {
                  // Already handled above
                } else if (imp === 'useParams' || imp === 'useNavigate' || imp === 'useLocation') {
                  if (imp === 'useLocation') {
                    routerImports.push('usePathname');
                  } else if (imp === 'useNavigate') {
                    routerImports.push('useRouter');
                  }
                } else {
                  nextImports.push(imp);
                }
              });
              
              let result = '';
              if (routerImports.length > 0) {
                result += `import { ${routerImports.join(', ')} } from 'next/navigation';\n`;
              }
              if (nextImports.length > 0) {
                result += `import { ${nextImports.join(', ')} } from 'react-router-dom';\n`;
              }
              return result.trim() || '';
            }
          );
          modified = true;
        }
        
        // Replace Link 'to' prop with 'href'
        content = content.replace(/<Link\s+to=/g, '<Link href=');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  }
}

convertFiles().catch(console.error);

