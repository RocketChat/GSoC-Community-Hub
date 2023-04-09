import Image from 'next/image';

export default function BrandLogo(props) {
  return (
    <>
      <Image
        src={props.brandLogoSrc}
        title={props.imageTitle}
        alt={props.brandName}
        height={props.height}
        width={props.width}
      />
    </>
  );
}
