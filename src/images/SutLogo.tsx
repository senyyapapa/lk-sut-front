import Image from 'next/image';

interface SutLogoProps {
    height: number,
    width: number,
}

export const SutLogo = ({height, width} : SutLogoProps ) => {
    const logoPath = '/sut_logo_black.svg'
    return (
        <Image 
            src={logoPath}
            alt='sut-logo'
            height={height}
            width={width}
        />
    )
}
