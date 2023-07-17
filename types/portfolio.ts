export interface PieceData {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    position: number;
}

export interface PortfolioPiece extends PieceData {
    slug: string;
}
