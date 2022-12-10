import Head from "next/head";
import Script from "next/script";
import NavBar from "./navbar";

interface LayoutProps {
    children: React.ReactNode;
    activeIndex: number;
}

export default function BaseLayout({ children, activeIndex } : LayoutProps) {
    return (
        <>
        <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin='anonymous'></Script>
        <div className="container">
            <NavBar index={activeIndex}></NavBar>
            {children}
        </div>
        </>
    );
}
