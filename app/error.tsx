"use client";

import { Button } from "components/ui/button";
import { useEffect } from "react";
import Image from "next/image";
import notfound from "public/error.svg";

interface ErrorPage {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: ErrorPage) => {
    useEffect(() => console.error(error), [error]);

    return (
        <div className="typo flex flex-grow flex-col items-center justify-center space-y-16 text-center lg:space-y-20">
            <div className="xs:w-[70%] 3xl:w-[20%] 4xl:w-[20%] w-[80%] sm:w-[50%] lg:w-[40%] xl:w-[30%]">
                <Image src={notfound} alt="not found" className="relative" />
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-5">
                <h3 className="!text-gray-700">Hmm...Something went wrong 🤔</h3>
                <Button onClick={reset} className="!w-auto !font-bold !text-white lg:!text-base">
                    Try Again
                </Button>
            </div>
        </div>
    );
};

export default Error;
