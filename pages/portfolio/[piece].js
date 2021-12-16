import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { getAllPieceSlugs, getPieceData } from '../../lib/portfolio';

// FIXME: this page is using server-side rendering, and breaking dark mode
// Dark mode is working on this page, but still causes a flash of light mode beforehand.

export default function PortfolioItem({ pieceData }) {
    // const router = useRouter();
    // const currentSlug = router.query.portfolioItem;
    console.log(pieceData);

    // // check if slug matches any of the portfolio items slugs
    // const pieceData = portfolioItems.find((item) => item.slug === currentSlug);

    return (
        <div className="dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
            <Head>
                <title>Jason Halvorson | Portfolio</title>
            </Head>

            <Breadcrumbs />
            <p>{pieceData.title}</p>
            <p>{pieceData.description}</p>
            {pieceData.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-jhpurple text-white mr-1">
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
        fallback : false
    };
}

export async function getStaticProps({ params }) {
    const pieceData = getPieceData(params.piece);

    return {
        props : { pieceData }
    };
}
