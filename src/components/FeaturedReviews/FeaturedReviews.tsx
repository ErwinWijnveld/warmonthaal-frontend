import { BlockProps } from '@/@types/blocks';
import TopLeftBlue from '../dots/TopLeftBlue';
import Review from './Review';
import Stars from './Stars';

const FeaturedReviews = ({ content, extra_data }: BlockProps) => {
	return (
		<section id="recensies" className="relative py-12 md:py-36">
			<TopLeftBlue />
			<div className="container">
				{content?.text && (
					<div dangerouslySetInnerHTML={{ __html: content?.text }} />
				)}
				<div className="mb-6 flex items-center gap-2">
					<h3 className="m-0 font-semibold lg:text-[36px]">
          				{parseFloat(extra_data?.average).toFixed(1)}
					</h3>
					<div>
						<Stars amount={extra_data?.average} />
						<p className="m-0 text-xs text-dark-grey">
							Gebaseerd op {extra_data?.total} reviews
						</p>
					</div>
				</div>
				<div className="grid gap-12 md:grid-cols-2">
					{content?.browsers?.reviews?.map(
						(review: any, index: number) => (
							<Review {...review} key={index} />
						)
					)}
				</div>
			</div>
		</section>
	);
};
export default FeaturedReviews;
