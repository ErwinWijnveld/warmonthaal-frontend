import { BlockProps } from '@/@types/blocks';
import Image from '../presets/Image';

const ContactItem = ({ content, medias }: BlockProps) => {
	return (
		<a
			className="mb-4 flex items-center gap-2 last-of-type:mb-0 md:gap-4"
			href={content?.link_url || undefined}
		>
			{medias?.img && (
				<div className="relative aspect-square h-[36px] shrink-0 rounded-full bg-medium-blue md:h-[68px]">
					<Image
						src={medias?.img[0]?.url}
						alt={medias?.img[0]?.alt}
						fill
						className="scale-[.35] object-contain"
					/>
				</div>
			)}
			<div>
				<h3 className=" mb-0 text-[10px] font-bold text-dark-blue lg:pr-12">
					{content?.title}
				</h3>
				<div className="h-px w-[97px] bg-medium-blue" />
				<p className="m-0 mt-1 text-[10px] font-medium text-light-blue md:text-xs">
					{content?.link_text}
				</p>
			</div>
		</a>
	);
};
export default ContactItem;
