import { BlockProps } from '@/@types/blocks';
import { OPACITY, OPACITY_LEFT, STAGGER_CHILDREN } from '@/lib/animations';
import { motion } from 'framer-motion';
import ArrowButton from '../buttons/ArrowButton';
import Usp from './Usp';

const TextUsps = ({ content, children }: BlockProps) => {
	return (
		<section className="relative py-24">
			<div className="container flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-32">
				<motion.div
					variants={OPACITY_LEFT}
					className=" w-full pb-6 md:pb-12 md:pt-12 lg:w-1/2"
				>
					{content?.text && (
						<div
							className="text mb-8"
							dangerouslySetInnerHTML={{ __html: content?.text }}
						/>
					)}
					{content?.link_url && (
						<ArrowButton
							className="bg-light-blue text-white"
							href={content?.link_url}
						>
							{content?.link_text}
						</ArrowButton>
					)}
				</motion.div>
				<motion.div
					variants={STAGGER_CHILDREN}
					className="grid w-full shrink-0 grid-cols-2 gap-3 md:gap-8 lg:w-1/2"
				>
					{children?.usp?.map((child: BlockProps, i: number) => (
						<Usp {...child} key={i} />
					))}
				</motion.div>
			</div>
			{/* decoration */}
			<motion.div
				variants={OPACITY}
				className="absolute top-[10%] left-0 -z-10 aspect-square w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-light-sand md:top-1/3 md:w-[480px]"
			/>
		</section>
	);
};
export default TextUsps;
