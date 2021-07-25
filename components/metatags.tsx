import Head from 'next/head';
import MetatagProps from '../lib/metatagProps.interface';

export default function MetaTags({ props: props }: { props: MetatagProps }) {
    return (
        <>
            <title>{props.title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@BixbiteMr" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={props.image} />

            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />

            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon-large.png"/>
            <meta name="theme-color" content="#9A348E"/>
        </>
    );
}