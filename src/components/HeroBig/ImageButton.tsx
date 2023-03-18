import Image from '../presets/Image';
import Link from '../presets/Link';

const ImageButton = ({ image, link, reverse, ...rest }: any) => {
	const reverseContainer = reverse
		? 'flex-col rounded-full md:translate-y-[25%]'
		: 'flex-col-reverse md:-translate-y-[10%] rounded-b-full -mt-20 md:mt-0';
	const reverseLink = reverse
		? 'pb-4 md:pb-6 lg:pb-12 pt-8 md:pt-10 lg:pt-20 flex-col-reverse'
		: 'pt-4 md:pt-6 lg:pt-12 pb-8 md:pb-10 lg:pb-20 flex-col';
	const reverseImage = reverse ? 'rounded-full' : 'rounded-b-full';

	return (
		<>
			{link?.url && (
				<Link
					href={link.url}
					{...rest}
					className={
						'flex aspect-[.55] w-[180px] md:aspect-[.5] md:w-full ' +
						reverseContainer
					}
				>
					<div
						className={
							'flex items-center justify-center gap-1 px-2 text-center text-sm font-semibold uppercase text-white md:gap-2 md:text-xl lg:gap-4 lg:text-2xl ' +
							reverseLink
						}
					>
						{link?.title}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12.592"
							height="12.592"
							viewBox="0 0 12.592 12.592"
						>
							<path
								id="Icon_ionic-md-arrow-down"
								data-name="Icon ionic-md-arrow-down"
								d="M13.059,5.977v9.562l4.407-4.407,1.1,1.141-6.3,6.3-6.3-6.3,1.1-1.1,4.407,4.368V5.977Z"
								transform="translate(-5.977 -5.977)"
								fill="#fff"
							/>
						</svg>
					</div>
					{image?.url && (
						<div
							className={
								'relative w-full flex-1  overflow-hidden ' +
								reverseImage
							}
						>
							<Image
								src={image.url}
								alt={image?.alt}
								fill
								className="object-cover"
							/>
						</div>
					)}
				</Link>
			)}
		</>
	);
};
export default ImageButton;
