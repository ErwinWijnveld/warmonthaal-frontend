import { BlockProps } from '@/@types/blocks';
import Image from '../presets/Image';

const ImageText = ({ content, medias, i, length }: BlockProps & any) => {
	return (
		<div
			style={{
				zIndex: '-' + i,
			}}
			className="imagetextslide absolute inset-0 flex h-full items-center gap-10"
		>
			{medias?.img && (
				<div className="relative aspect-[.5] h-full shrink-0 overflow-hidden rounded-full">
					<Image
						fill
						src={medias?.img[0].url}
						alt={medias?.img[0].alt}
						className="object-cover"
					/>
				</div>
			)}
			<div className="pagination flex shrink-0 flex-col items-center justify-center gap-2">
				{[...Array(length)]?.map((_, index) => (
					<div
						key={index}
						className={`h-[41px] w-[6px] rounded-full ${
							i === index ? 'bg-medium-blue' : 'bg-light-sand'
						}`}
					/>
				))}
			</div>
			<div className="content flex h-full flex-col justify-center">
				{content?.title && (
					<h3 className="max-w-max border-b-2 border-main-sand pb-2 text-2xl font-bold text-dark-blue md:pr-20">
						{content?.title}
					</h3>
				)}
				{content?.text && (
					<div
						className="text-xl text-medium-blue"
						dangerouslySetInnerHTML={{ __html: content?.text }}
					/>
				)}
			</div>
		</div>
	);
};
export default ImageText;
