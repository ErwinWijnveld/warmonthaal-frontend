import { BlockProps } from '@/@types/blocks';
import Stars from './Stars';

const Review = ({ stars, title, content, author, date }: any) => {
	return (
		<div className="hidden first-of-type:block md:block">
			<div className="mb-2 flex flex-wrap items-center gap-4 md:flex-nowrap">
				<Stars amount={stars} />
				{title && (
					<h3 className="m-0 w-full text-base font-medium md:w-auto">
						{title}
					</h3>
				)}
			</div>
			{content && (
				<div
					className="mb-4 text-medium-blue"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)}
			{author && (
				<p className="m-0 text-xs text-dark-grey">
					{author} - {date}
				</p>
			)}
		</div>
	);
};
export default Review;
