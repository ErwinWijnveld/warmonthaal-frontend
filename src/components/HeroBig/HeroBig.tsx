import { BlockProps } from '@/@types/blocks';
import {
	OPACITY,
	OPACITY_BOTTOM,
	OPACITY_LEFT,
	OPACITY_TOP,
	STAGGER_CHILDREN,
} from '@/lib/animations';
import { COLORS } from '@/lib/consts';
import { motion } from 'framer-motion';
import Button from '../buttons/Button';
import TopLeftBlue from '../dots/TopLeftBlue';
import ImageButton from './ImageButton';
import ScrollDown from './ScrollDown';

const HeroBig = ({ content, medias }: BlockProps) => {
	return (
		<motion.section
			variants={STAGGER_CHILDREN}
			className="realtive mb-0 md:mb-32"
		>
			<TopLeftBlue />

			<div className="relative mx-auto flex max-w-[1384px] flex-wrap-reverse justify-between px-4 md:h-screen md:max-h-[820px] md:min-h-[680px] md:flex-nowrap lg:px-12">
				<motion.div
					variants={OPACITY_BOTTOM}
					className="flex w-full shrink-0 items-end md:w-[30%] lg:w-[27%]"
				>
					{medias?.img && (
						<ImageButton
							image={medias?.img[0]}
							link={{
								url: content?.link_1_url,
								title: content?.link_1_text,
							}}
							style={{
								backgroundColor: COLORS['light-blue'],
							}}
							reverse
						/>
					)}
				</motion.div>
				{content?.text && (
					<motion.div
						variants={OPACITY}
						className="flex w-full flex-col items-center justify-center py-12 md:w-4/12 md:py-0"
					>
						<div
							className="mb-2 text-center lg:mb-4 [&>h1]:mb-6 [&>h1]:text-3xl md:[&>h1]:text-4xl lg:[&>h1]:text-5xl [&>p]:text-sm lg:[&>p]:text-base "
							dangerouslySetInnerHTML={{
								__html: content?.text,
							}}
						/>
						{content?.link_center_url && (
							<Button
								className="bg-main-sand text-white"
								href={content?.link_center_url}
							>
								{content?.link_center_text}
							</Button>
						)}
					</motion.div>
				)}
				<motion.div
					variants={OPACITY_TOP}
					className="flex w-full shrink-0 justify-end md:block md:w-[30%] lg:w-[27%]"
				>
					{medias?.img_1 && (
						<ImageButton
							image={medias?.img_1[0]}
							link={{
								url: content?.link_2_url,
								title: content?.link_2_text,
							}}
							style={{
								backgroundColor: COLORS['medium-blue'],
							}}
						/>
					)}
				</motion.div>
				<ScrollDown href="#hero-big--bottom" />
			</div>
			<div id="hero-big--bottom" />
		</motion.section>
	);
};
export default HeroBig;
