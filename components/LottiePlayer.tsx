import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
    src: string;
    className?: string;
    loop?: boolean;
}

export default function LottiePlayer({ src, className, loop = true }: LottiePlayerProps) {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        let isMounted = true;
        fetch(src)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) setAnimationData(data);
            })
            .catch((error) => console.error("Error loading Lottie animation:", error));

        return () => {
            isMounted = false;
        };
    }, [src]);

    if (!animationData) return <div className={className} />;

    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            className={className}
        />
    );
}
