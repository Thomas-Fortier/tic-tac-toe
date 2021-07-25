import Document, { Html, Head, Main, NextScript } from "next/document";
import MetaTags from "../components/metatags";
import MetatagProps from "../lib/metatagProps.interface";

export default class MyDocument extends Document {
    private properties: MetatagProps = {
        title: 'Tic-Tac-Toe',
        description: 'This is a simple Tic-Tac-Toe application that was created for educational / portfolio purposes. It was created with Ract / Next.JS using TypeScript.',
        image: '/icon-large.png'
    };
    
    render() {
        return (
            <Html>
                <Head>
                    <MetaTags props={this.properties}/>

                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}