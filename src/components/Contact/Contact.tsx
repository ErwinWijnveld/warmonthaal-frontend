import { BlockProps } from '@/@types/blocks';
import {
	OPACITY,
	OPACITY_BOTTOM,
	OPACITY_TOP,
	STAGGER_CHILDREN,
} from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from '../presets/Image';
import ContactItem from './ContactItem';

const Contact = ({ content, medias, children }: BlockProps) => {
	return (
		<motion.section variants={STAGGER_CHILDREN} className="py-20 md:py-40">
			<div className="container flex flex-wrap gap-6 md:flex-nowrap">
				<motion.div
					variants={OPACITY_BOTTOM}
					className="w-full shrink-0 rounded-sma bg-light-sand p-8 md:w-auto md:rounded-med md:px-12 md:py-14 lg:rounded-huge lg:py-28 lg:px-24"
				>
					{children?.['contact-item']?.map(
						(item: any, index: any) => (
							<ContactItem {...item} key={index} />
						)
					)}
				</motion.div>
				<motion.div
					variants={OPACITY}
					className="relative min-h-[400px] w-full flex-1 overflow-hidden rounded-sma md:w-auto md:rounded-med lg:rounded-huge [&_iframe]:h-full [&_iframe]:w-full "
				>
					{content?.maps_url && (
						<div
							className="h-full"
							dangerouslySetInnerHTML={{
								__html: content?.maps_url,
							}}
						/>
					)}
					<motion.a
						variants={OPACITY_TOP}
						className="absolute top-0 right-0 flex items-center gap-4 rounded-bl-huge bg-light-sand py-8 px-12 md:py-10 md:pl-20 md:pr-16"
						href={content?.location_link_url || undefined}
					>
						{medias?.img && (
							<div className="relative aspect-square h-8 shrink-0">
								<Image
									src={medias?.img[0]?.url}
									alt={medias?.img[0]?.alt}
									fill
									className="object-contain"
								/>
							</div>
						)}
						<div>
							<h3 className=" mb-0 text-[10px] font-bold text-dark-blue lg:pr-12">
								{content?.location_title}
							</h3>
							<div className="h-px w-[97px] bg-medium-blue" />
							<p className="m-0 mt-1 text-xs font-medium text-light-blue">
								{content?.location_link_text}
							</p>
						</div>
					</motion.a>
				</motion.div>
			</div>
		</motion.section>
	);
};
export default Contact;
