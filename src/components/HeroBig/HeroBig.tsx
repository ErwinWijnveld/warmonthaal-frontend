import { BlockProps } from '@/@types/blocks';
import { COLORS } from '@/lib/consts';
import Button from '../buttons/Button';
import ImageButton from './ImageButton';
import ScrollDown from './ScrollDown';

const HeroBig = ({ content, medias }: BlockProps) => {
	return (
		<section className="realtive mb-0 md:mb-32">
			<div className="absolute top-32 -left-[35px] aspect-square w-[95px] scale-50 rounded-full bg-dark-blue md:top-[25%]" />
			<div className="absolute top-20 left-[10%] aspect-square w-[38px] scale-50 rounded-full bg-light-blue md:top-[12%]" />
			<div className="relative mx-auto flex max-w-[1384px] flex-wrap-reverse justify-between px-4 md:h-screen md:max-h-[820px] md:min-h-[680px] md:flex-nowrap lg:px-12">
				<div className="flex w-full shrink-0 items-end md:w-[30%] lg:w-[27%]">
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
				</div>
				{content?.text && (
					<div className="flex w-full flex-col items-center justify-center py-12 md:w-4/12 md:py-0">
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
					</div>
				)}
				<div className="flex w-full shrink-0 justify-end md:block md:w-[30%] lg:w-[27%]">
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
				</div>
				<ScrollDown href="#hero-big--bottom" />
			</div>
			<div id="hero-big--bottom" />
		</section>
	);
};
export default HeroBig;
