import fs from 'fs';
import path from 'path';
import { PortfolioPiece, PieceData } from '@/types';

const portfolioDirectory = path.join(process.cwd(), 'portfolio');

export function getSortedPiecesData(): PortfolioPiece[] {
  // Get file names under /portfolio
  const fileNames: string[] = fs.readdirSync(portfolioDirectory);
  const allPiecesData: PortfolioPiece[] = fileNames.map((fileName: string) => {
    // Remove ".json" from file name to get slug
    const slug: string = fileName.replace(/\.json$/, '');

    // Read json file as string
    const fullPath: string = path.join(portfolioDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');

    // Parse string as JSON
    const pieceData: PieceData = JSON.parse(fileContents);
    return {
      slug,
      ...pieceData,
    };
  });
  
  return allPiecesData.sort((a: PortfolioPiece, b: PortfolioPiece) => {

    if (a.position > b.position) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPieceSlugs(): { params: { piece: string } }[] {
  const fileNames: string[] = fs.readdirSync(portfolioDirectory);
  return fileNames.map((fileName: string) => {
    return {
      params: {
        piece: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export function getPieceData(piece: string): PieceData {
  const fullPath: string = path.join(portfolioDirectory, `${piece}.json`);
  const fileContents: string = fs.readFileSync(fullPath, 'utf8');

  return JSON.parse(fileContents);
}

