import { useRouter } from 'next/router';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { portfolioItems } from '../../lib/portfolio';
import Head from 'next/head';
import Sidenav from '../../components/Sidenav/Sidenav';

export function getStaticProps() {
    return {
        props : {}
    };
}

export async function getStaticPaths() {
    const paths = portfolioItems.map((item) => ({ params: { portfolioItem: item.slug } }));

    return {
        paths,
        fallback : false
    };
}

const PortfolioItem = () => {
    const router = useRouter();
    const currentSlug = router.query.portfolioItem;
    console.log(currentSlug);

    // check if slug matches any of the portfolio items slugs
    const currentItem = portfolioItems.find((item) => item.slug === currentSlug);

    return (
        <div className="dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
            <Head>
                <title>Jason Halvorson | Portfolio</title>
            </Head>

            <Breadcrumbs />
            <Sidenav>
                <p>{currentItem.title}</p>
                <p>{currentItem.description}</p>
                {currentItem.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-jhpurple text-white mr-1">
                        {tag}
                    </span>
                ))}
            </Sidenav>
        </div>
    );
};

export default PortfolioItem;
