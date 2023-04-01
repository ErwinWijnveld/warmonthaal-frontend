import { BlockProps } from '@/@types/blocks';
import { OPACITY, OPACITY_BOTTOM, OPACITY_TOP } from '@/lib/animations';
import { motion } from 'framer-motion';
import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { useEffect } from 'react';
import ImageText from './ImageText';

const StickyImageText = ({ children }: BlockProps) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline({
			defaults: {
				ease: 'none',
			},
			scrollTrigger: {
				trigger: '.slider',
				start: '50% 50%',
				end: '+=2000',
				scrub: 0.8,
				// markers: true,
				pin: true,
			},
		});

		const slides = gsap.utils.toArray('.imagetextslide');
		slides.forEach((slide: any, index: number) => {
			// image inslide of the slide
			const image = slide.querySelector('img');
			const pagination = slide.querySelector('.pagination');
			const content = slide.querySelector('.content');

			// not first slide
			if (index > 0) {
				timeline.fromTo(
					content,
					{
						opacity: 0,
						y: -200,
					},
					// opacity 1 to 0
					{
						opacity: 1,
						y: 0,
					}
				);
			}
			// if is not the last slide
			if (index < slides.length - 1) {
				// image animation
				timeline.fromTo(
					image,
					// clip path bottom to top
					{
						clipPath: 'inset(0 0 0 0)',
					},
					{
						clipPath: 'inset(100% 0 0 0)',
					}
				);

				// pagination animation
				timeline.fromTo(
					pagination,
					// opacity 1 to 0
					{
						opacity: 1,
					},
					{
						opacity: 0,
					},
					'-=0.5'
				);

				// content animation
				timeline.fromTo(
					content,
					// opacity 1 to 0
					{
						opacity: 1,
						y: 0,
					},
					{
						opacity: 0,
						y: 200,
					},
					'-=0.5'
				);
			}
		});
	}, []);
	return (
		<section>
			<motion.div variants={OPACITY} className="container">
				<div className="slider relative h-[557px]">
					{children?.['image-text']?.map(
						(item: any, index: number) => (
							<ImageText
								key={index}
								length={children?.['image-text']?.length}
								i={index}
								{...item}
							/>
						)
					)}
				</div>
			</motion.div>
		</section>
	);
};
export default StickyImageText;
