import Image from 'next/image';

const FirstBanner = () => {
    return (
        <Image
                src={'/cta banner (3).svg'}
                alt="Banner"
                width={1800}
                height={526}
            />
    );
};

export default FirstBanner;