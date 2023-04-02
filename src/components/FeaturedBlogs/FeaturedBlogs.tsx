import { BlockProps } from '@/@types/blocks';
import { BlogProps } from '@/@types/blog';
import { OPACITY, OPACITY_LEFT, STAGGER_CHILDREN } from '@/lib/animations';
import { motion } from 'framer-motion';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopLeftBlue from '../dots/TopLeftBlue';
import Blog from './Blog';

const FeaturedBlogs = ({ content }: BlockProps) => {
	return (
		<section className="relative overflow-hidden py-12 md:py-32">
			<TopLeftBlue />
			<motion.div variants={STAGGER_CHILDREN} className="container">
				{content?.text && (
					<motion.div
						variants={OPACITY_LEFT}
						className="text mx-auto max-w-[546px] pb-12"
						dangerouslySetInnerHTML={{ __html: content?.text }}
					/>
				)}
				<Swiper
					className="!overflow-visible"
					spaceBetween={16}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
				>
					{content?.browsers?.blogs?.map(
						(blog: BlogProps, i: number) => (
							<SwiperSlide key={i}>
								<Blog {...blog} />
							</SwiperSlide>
						)
					)}
				</Swiper>
			</motion.div>
		</section>
	);
};
export default FeaturedBlogs;
