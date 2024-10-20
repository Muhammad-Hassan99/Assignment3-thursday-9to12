import Image from "next/image";
interface Cardprops {
    imageSrc: string;
    altText:string
    text: string;
  }
  
  export default function Cards({ imageSrc, altText, text }:Cardprops) {
    return (
      <div className="flex flex-col h-full">

        <Image
          src={imageSrc}
          width={250}
          height={200}
          alt={altText}
           className="h-2/4"
        />
        <p className="text-pink-800 mt-4 p-3">{text}</p>
      </div>
    );
  }