import { BlockProps } from '@/@types/blocks';
import { OPACITY_LEFT, OPACITY_RIGHT } from '@/lib/animations';
import { motion } from 'framer-motion';
import ArrowButton from '../buttons/ArrowButton';
import BeigeLightBlue from '../dots/BeigeLightBlue';
import Image from '../presets/Image';

const TextImage = ({ content, medias }: BlockProps) => {
	return (
		<section className="relative flex items-center overflow-x-clip pt-[350px] pb-24 md:min-h-[526px] md:pb-32 md:pt-32	">
			<div className="container flex items-center">
				{/* text */}
				<motion.div variants={OPACITY_LEFT} className="w-full md:w-1/2">
					<div
						dangerouslySetInnerHTML={{
							__html: content?.text || '',
						}}
					/>
					{content?.link_url && (
						<ArrowButton
							className="mt-4 bg-light-blue text-white"
							href={content?.link_url}
						>
							{content?.link_text}
						</ArrowButton>
					)}
				</motion.div>

				{/* image */}
				{medias?.img && (
					<motion.div
						variants={OPACITY_RIGHT}
						className="absolute right-0  h-72 w-[calc(100%_-_1rem)]  md:right-0 md:h-[526px] md:w-half-padding "
					>
						<BeigeLightBlue className="absolute bottom-[calc(100%_-_1rem)] -right-6 z-10 origin-bottom-right scale-50 md:bottom-[calc(100%_-_3rem)] md:scale-100" />
						<Image
							src={medias?.img[0]?.url}
							alt={medias?.img[0]?.alt}
							fill
							className="overflow-hidden rounded-l-full object-cover"
						/>
					</motion.div>
				)}
			</div>
		</section>
	);
};
export default TextImage;
