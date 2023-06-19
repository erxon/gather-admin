import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

interface PhotoProps {
  photo: string;
  type: string;
}

export default function Photo(props: PhotoProps) {
  const type = props.type === "reference" ? "report-photos" : "query-photos";
  const publicId = `${type}/${props.photo}`;

  const image = new CloudinaryImage(publicId, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }).resize(fill().height(150));

  return <AdvancedImage cldImg={image} />;
}
