const fs = require('fs');
const path = require('path');

// Chemin du dossier public
const publicDir = path.join(__dirname, '..', '..', 'public');

// Chemin où le fichier .tsx sera généré
const outputDir = path.join(__dirname);
const outputPath = path.join(outputDir, 'GeneratedImages.tsx');

// Fonction pour obtenir tous les fichiers d'un dossier et de ses sous-dossiers
function getFilesRecursively(directory) {
  let filesInDirectory = fs.readdirSync(directory);
  let files = [];

  filesInDirectory.forEach((file) => {
    const absolutePath = path.join(directory, file);

    if (fs.statSync(absolutePath).isDirectory()) {
      files = files.concat(getFilesRecursively(absolutePath));
    } else if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      files.push(absolutePath);
    }
  });

  return files;
}

// Obtenir tous les fichiers d'images dans le dossier public et sous-dossiers
const imageFiles = getFilesRecursively(publicDir);

// Générer des importations et des noms de variables
let imports = '';
let exportVariables = '';

imageFiles.forEach((file) => {
  const fileName = path.basename(file, path.extname(file)); // Nom du fichier sans extension
  const variableName = fileName.replace(/\W/g, '_'); // Remplacer les caractères non alphanumériques par des underscores
  const relativePath = '../public/' + path.relative(publicDir, file).replace(/\\/g, '/'); // Gérer les chemins relatifs
  imports += `import ${variableName} from '${relativePath}';\n`;
  exportVariables += `  ${variableName},\n`;
});

// Contenu du fichier .tsx
const content = `
${imports}

const images = [
${exportVariables}
];

export default images;
`;

// Créer le dossier output s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Écrire le contenu dans le fichier .tsx
fs.writeFileSync(outputPath, content);

console.log(`Fichier ${outputPath} généré avec succès.`);
