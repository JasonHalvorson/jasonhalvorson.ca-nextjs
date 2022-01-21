import fs from 'fs';
import path from 'path';

const portfolioDirectory = path.join(process.cwd(), 'portfolio');

export function getSortedPiecesData() {
    // Get file names under /portfolio
    const fileNames = fs.readdirSync(portfolioDirectory);
    const allPiecesData = fileNames.map((fileName) => {
        // Remove ".json" from file name to get slug
        const slug = fileName.replace(/\.json$/, '');

        // Read json file as string
        const fullPath = path.join(portfolioDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse string as JSON
        const pieceData = JSON.parse(fileContents);
        return {
            slug,
            ...pieceData
        };
    });
    return allPiecesData.sort((a, b) => {
        if (a.position > b.position) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPieceSlugs() {
    const fileNames = fs.readdirSync(portfolioDirectory);
    return fileNames.map((fileName) => {
        return {
            params : {
                piece : fileName.replace(/\.json$/, '')
            }
        };
    });
}

export function getPieceData(piece) {
    const fullPath = path.join(portfolioDirectory, `${piece}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return JSON.parse(fileContents);
}
