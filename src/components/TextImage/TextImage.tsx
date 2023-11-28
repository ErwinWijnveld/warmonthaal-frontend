import { BlockProps } from '@/@types/blocks';
import { OPACITY_LEFT, OPACITY_RIGHT } from '@/lib/animations';
import { motion } from 'framer-motion';
import ArrowButton from '../buttons/ArrowButton';
import BeigeLightBlue from '../dots/BeigeLightBlue';
import Image from '../presets/Image';

const TextImage = ({ content, medias }: BlockProps) => {
	const imageLeft = content?.image_position === 'left';

	return (
		<section className="relative mt-12 flex items-center overflow-x-clip pt-[350px] pb-10 md:mt-0 md:min-h-[526px] md:pb-32 md:pt-32	">
			<div
				className={`container flex items-center ${
					imageLeft ? 'md:flex-row-reverse' : ''
				}`}
			>
				{imageLeft && (
					<BeigeLightBlue className="absolute top-[240px] -right-6 z-10 origin-bottom-right scale-50 md:top-auto md:bottom-3/4 md:scale-100" />
				)}
				{/* text */}
				<motion.div
					variants={OPACITY_LEFT}
					className="w-full md:w-1/2  [&_a]:text-medium-blue [&_a]:underline"
				>
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
						className={
							'absolute right-0 top-0 h-72 w-[calc(100%_-_1rem)] md:top-auto  md:right-0 md:h-[526px] md:w-half-padding ' +
							(imageLeft ? 'left-0' : '')
						}
					>
						{!imageLeft && (
							<BeigeLightBlue className="absolute bottom-[calc(100%_-_1rem)] -right-6 z-10 origin-bottom-right !scale-50 md:bottom-[calc(100%_-_3rem)] md:scale-100" />
						)}
						<Image
							src={medias?.img[0]?.url}
							alt={medias?.img[0]?.alt}
							fill
							// className="overflow-hidden rounded-l-full object-cover"
							className={` overflow-hidden object-cover ${
								imageLeft ? 'rounded-r-full' : 'rounded-l-full'
							}`}
						/>
					</motion.div>
				)}
			</div>
		</section>
	);
};
export default TextImage;
