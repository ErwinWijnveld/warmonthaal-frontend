import { BlogProps } from '@/@types/blog';
import { OPACITY_TOP } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from '../presets/Image';
import Link from '../presets/Link';

const Blog = ({ image, slug, title, created_at, date, excerpt }: BlogProps) => {
	const dateObject = new Date(date);
	// format to 12-01-2023
	const formattedDate = `${('0' + dateObject.getDate()).slice(-2)}-${(
		'0' +
		(dateObject.getMonth() + 1)
	).slice(-2)}-${dateObject.getFullYear()}`;
	return (
		<Link className="block" href={`/nieuwtjes/${slug}`}>
			<motion.div
				className="overflow-hidden rounded-xl bg-ligter-sand shadow-lg"
				variants={OPACITY_TOP}
			>
				{image && (
					<div className="relative h-[200px]">
						<Image
							src={image || '/images/placeholder.jpg'}
							alt={title}
							className=" object-cover"
							fill
						/>
					</div>
				)}
				<div className="px-8 py-6 text-medium-blue">
					{date && <p className="m-0 text-xs">{formattedDate}</p>}
					{title && (
						<h3 className="font-semibold lg:text-lg">{title}</h3>
					)}
					{excerpt && <p className="m-0 mb-2 text-sm">{excerpt}</p>}
				</div>
			</motion.div>
		</Link>
	);
};
export default Blog;
