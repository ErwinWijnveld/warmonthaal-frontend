import { BlockProps } from '@/@types/blocks';
import { OPACITY_BOTTOM } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from '../presets/Image';

const Usp = ({ content, files }: BlockProps) => {
	return (
		<motion.div variants={OPACITY_BOTTOM}>
			<div className="mb-2 flex aspect-square w-[45px] items-center justify-center rounded-full bg-lighter-blue p-3 md:w-[70px]">
				<Image
					className="object-contain"
					src={files?.icon[0].url}
					alt="Icoontje"
					width="28"
					height="28"
				/>
			</div>
			{content?.title && (
				<h3 className="m-0 text-lg font-semibold md:text-xl">
					{content.title}
				</h3>
			)}
			{content?.text && (
				<p className="text-xs md:text-sm">{content.text}</p>
			)}
		</motion.div>
	);
};
export default Usp;
