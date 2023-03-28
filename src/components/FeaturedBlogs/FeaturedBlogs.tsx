import { BlockProps } from '@/@types/blocks';
import { BlogProps } from '@/@types/blog';
import { OPACITY, OPACITY_LEFT, STAGGER_CHILDREN } from '@/lib/animations';
import { motion } from 'framer-motion';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Blog from './Blog';

const FeaturedBlogs = ({ content }: BlockProps) => {
	return (
		<section className="relative overflow-hidden py-32">
			{/* blue dots */}
			<motion.div
				variants={OPACITY}
				className="absolute top-32 -left-[35px] aspect-square w-[95px] scale-50 rounded-full bg-dark-blue md:top-[25%] md:scale-100"
			/>
			<motion.div
				variants={OPACITY}
				className="absolute top-20 left-[10%] aspect-square w-[38px] scale-50 rounded-full bg-light-blue md:top-[12%] md:scale-100"
			/>
			{/* sand circle */}
			<motion.div
				variants={OPACITY}
				className="absolute right-0 top-40 -z-10 aspect-square w-[470px] translate-x-1/2 rounded-full bg-light-sand"
			/>
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
					{content?.browsers?.blogs?.map((blog: BlogProps) => (
						<SwiperSlide>
							<Blog {...blog} />
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</section>
	);
};
export default FeaturedBlogs;
