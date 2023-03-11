import Image from "next/image";
import coolGif from "@/public/coolgif.gif";

export const CoolComponent = () => (
    <section className="flex flex-col items-center space-y-8">
        <Image src={coolGif} alt="Cool GIF" />
        <h1 className="text-3xl font-bold">
            Let&apos;s get started Bitches 🚀
        </h1>
    </section>
);
