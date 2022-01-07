import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { getAllPieceSlugs, getPieceData } from '../../lib/portfolio';

export default function PortfolioPiece({ pieceData }) {
    return (
        <div>
            <Head>
                <title>Jason Halvorson | Portfolio</title>
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

export async function getStaticProps({ params }) {
    const pieceData = getPieceData(params.piece);

    return {
        props: { pieceData },
    };
}
