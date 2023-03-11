import Head from "next/head";
import { CoolComponent } from "@/src/components";

const Home = () => (
    <section className="flex min-h-screen items-center justify-center bg-zinc-900 text-white">
        <Head>
            <title>template</title>
            <meta name="description" content="I should get a life :)" />
        </Head>

        <CoolComponent />
    </section>
);

export default Home;
