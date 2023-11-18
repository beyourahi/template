import Image from "next/image";
import coolgif from "public/coolgif.gif";

const Home = () => {
    return (
        <div className="flex h-[100dvh] flex-col items-center justify-center space-y-8 bg-black text-white">
            <Image src={coolgif} alt="rick roll" className="rounded-3xl" />
            <h1 className="text-[3vw] font-bold">arryt let&apos;s build something cool 🚀👌🏻</h1>
        </div>
    );
};

export default Home;
