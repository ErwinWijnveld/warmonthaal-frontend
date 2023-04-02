import { BlockProps } from '@/@types/blocks';
import Image from '../presets/Image';

const ImageText = ({ content, medias, i, length }: BlockProps & any) => {
	return (
		<div
			style={{
				zIndex: '-' + i,
			}}
			className="imagetextslide absolute inset-0 flex h-full flex-col items-center gap-4 md:flex-row md:gap-10"
		>
			{medias?.img && (
				<div className="relative aspect-[2] w-full shrink-0 overflow-hidden rounded-full md:aspect-[.5] md:h-full md:w-auto">
					<Image
						fill
						src={medias?.img[0].url}
						alt={medias?.img[0].alt}
						className="object-cover"
					/>
				</div>
			)}
			<div className="pagination flex shrink-0 items-center justify-center gap-2 md:flex-col">
				{[...Array(length)]?.map((_, index) => (
					<div
						key={index}
						className={`h-[6px] w-8 rounded-full md:h-[41px] md:w-[6px] ${
							i === index ? 'bg-medium-blue' : 'bg-light-sand'
						}`}
					/>
				))}
			</div>
			<div className="content flex flex-col justify-center md:h-full">
				{content?.title && (
					<h3 className="max-w-max border-b-2 border-main-sand pb-1 text-lg font-bold text-dark-blue md:pb-2 md:pr-20 md:text-2xl">
						{content?.title}
					</h3>
				)}
				{content?.text && (
					<div
						className="text-sm text-medium-blue md:text-base lg:text-xl"
						dangerouslySetInnerHTML={{ __html: content?.text }}
					/>
				)}
			</div>
		</div>
	);
};
export default ImageText;
