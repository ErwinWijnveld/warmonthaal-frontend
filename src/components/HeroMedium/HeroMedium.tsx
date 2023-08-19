import { BlockProps } from '@/@types/blocks';
import {
	OPACITY,
	OPACITY_LEFT,
	OPACITY_TOP,
	STAGGER_CHILDREN,
} from '@/lib/animations';
import { COLORS } from '@/lib/consts';
import { motion } from 'framer-motion';
import ImageButton from '../HeroBig/ImageButton';
import Button from '../buttons/Button';
import BeigeMediumBlue from '../dots/BeigeMediumBlue';
import TopLeftBlue from '../dots/TopLeftBlue';

const HeroMedium = ({ content, medias }: BlockProps) => {
	return (
		<motion.section
			variants={STAGGER_CHILDREN}
			className="relative mb-0 md:mb-32"
		>
			<BeigeMediumBlue className="absolute top-[21%] -left-8 origin-left scale-[.6] md:scale-100" />

			<div className="container relative z-10 mx-auto flex h-full flex-wrap-reverse justify-between px-4 md:max-h-[820px]">
				{content?.text && (
					<motion.div
						variants={OPACITY_LEFT}
						className=" flex w-full flex-col items-start justify-center pt-80 pb-24 md:w-[65%] md:pt-60 md:pb-12 lg:max-w-[657px]"
					>
						<div
							className="mb-2 lg:mb-4 [&>h1]:mb-6 [&>h1]:text-3xl md:[&>h1]:text-4xl lg:[&>h1]:text-5xl [&_p]:text-sm lg:[&_p]:text-lg "
							dangerouslySetInnerHTML={{
								__html: content?.text,
							}}
						/>
						{content?.link_url && (
							<Button
								className="bg-main-sand text-white"
								href={content?.link_url}
							>
								{content?.link_text}
							</Button>
						)}
					</motion.div>
				)}
			</div>
			<motion.div
				variants={OPACITY_TOP}
				className="absolute right-4 top-0 z-10 flex w-full shrink-0 items-start justify-end md:block md:w-[30%] xl:right-24 xl:w-[320px] xxl:right-auto xxl:left-[calc(50%_+_300px)]"
			>
				{medias?.img_1 && (
					<ImageButton
						image={medias?.img_1[0]}
						link={{
							url: content?.link_2_url,
							title: content?.link_2_text,
						}}
						as="div"
						style={{
							backgroundColor: COLORS['medium-blue'],
						}}
						onClick={(e: any) => {
							e.preventDefault();
							window.scrollTo({
								top: window.innerHeight,
								behavior: 'smooth',
							});
						}}
					/>
				)}
			</motion.div>
			<div id="content" />
		</motion.section>
	);
};
export default HeroMedium;
