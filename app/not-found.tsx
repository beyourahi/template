import { buttonVariants } from "components/ui/button";
import { cn } from "lib";
import Image from "next/image";
import Link from "next/link";
import notfound from "public/404.svg";

const NotFound = () => (
    <div className="typo flex flex-grow flex-col items-center justify-center space-y-16 pt-20 text-center lg:space-y-20">
        <div className="xs:w-[70%] 3xl:w-[20%] 4xl:w-[20%] w-[80%] sm:w-[50%] lg:w-[40%] xl:w-[30%]">
            <Image src={notfound} alt="not found" className="relative" />
        </div>

        <div className="space-y-4 lg:space-y-5">
            <h3 className="!text-gray-700">Awww...You seem lost buddy.</h3>

            <Link href="/" className={cn("!font-bold !text-white", buttonVariants({ variant: "default" }))}>
                Back to shopping
            </Link>
        </div>
    </div>
);

export default NotFound;
