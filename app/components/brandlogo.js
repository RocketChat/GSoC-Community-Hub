import Image from "next/image";

export default function BrandLogo(props) {
  console.log("logo", props.brandLogoSrc)
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