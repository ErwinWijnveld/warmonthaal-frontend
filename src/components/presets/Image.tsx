import DefaultImage, { ImageProps } from 'next/image';
type NewImageProps = ImageProps & {
	[key: string]: any;
	src: any;
};

const Image = ({ ...rest }: NewImageProps) => {
	return <DefaultImage {...rest} />;
};
export default Image;
