import Head from 'next/head';

import { getAllPieceSlugs, getPieceData } from '@/lib/portfolio';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { PieceData } from '@/types/portfolio';
import { GetStaticProps } from 'next';

interface PortfolioPieceProps {
  pieceData: PieceData;
}

export default function PortfolioPiece({ pieceData }: PortfolioPieceProps) {
  return (
    <div>
      <Head>
        <title>Jason Halvorson | Portfolio: {pieceData.title}</title>
      </Head>

      <Breadcrumbs />

      <p>{pieceData.title}</p>
      <p>{pieceData.description}</p>
      {pieceData.tags.map((tag) => (
        <span key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-jhpurple text-white mr-1">
          {tag}
        </span>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPieceSlugs();

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PortfolioPieceProps, { piece: string }> = async ({ params }) => {
  const pieceData = getPieceData(params!.piece);

  return {
    props: { pieceData },
  };
};
