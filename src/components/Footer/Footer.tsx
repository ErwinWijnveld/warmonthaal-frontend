import Image from '../presets/Image';
import Link from '../presets/Link';

export default function Footer({ menus }: any) {
	const footerMenu =
		menus?.find((item: any) => item?.title === 'Footer') || null;

	if (!footerMenu) return null;

	const footerBlock = footerMenu?.blocks[0];

	const { content, children, medias } = footerBlock;

	const menuItems = children?.['menu-item'];
	const contactItems = children?.['contact-item'];

	return (
		<footer className="footer pt-12 lg:pb-12">
			<div className="container mx-auto flex max-w-[1600px] flex-col items-center px-4 font-medium text-medium-blue lg:flex-row lg:gap-20">
				{medias?.img && (
					<div className="relative -ml-8 min-h-[200px] w-full shrink-0 overflow-hidden rounded-r-full lg:-ml-[170px] lg:w-[calc(40%_+_170px)] lg:self-stretch lg:rounded-full">
						<Image
							src={medias?.img[0]?.url}
							alt={medias?.img[0]?.alt}
							fill
							className="object-cover"
						/>
					</div>
				)}
				<div className="grid w-full flex-1 grid-cols-2 gap-x-12 gap-y-4 py-8 lg:w-auto lg:max-w-[664px]">
					<div className="col-span-2 xl:col-span-1">
						<p className="mb-0 text-sm font-medium uppercase">
							{content?.phone_title}
						</p>
						<a
							className="mb-8 block text-4xl font-semibold"
							href={`tel:${content?.phone_number}`}
						>
							{content?.phone_number}
						</a>

						{content?.text && (
							<div
								className="text-sm"
								dangerouslySetInnerHTML={{
									__html: content?.text,
								}}
							/>
						)}
					</div>
					<div className="col-span-2 xl:col-span-1">
						<ul className="headerlist p-0">
							<p className="mb-4 text-sm uppercase">
								{content?.navigation_title}
							</p>
							{menuItems?.map((item: any, i: number) => {
								const { content } = item;
								return (
									<li key={i}>
										<Link
											className="mb-2 block text-xs uppercase"
											href={content?.link_url}
										>
											{content?.link_title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="col-span-2 h-px bg-light-grey" />
					{contactItems?.map((item: any, i: number) => {
						const { content, medias } = item;
						return (
							<div
								key={i}
								className="col-span-2 flex items-center gap-2 xl:col-span-1"
							>
								{medias?.img && (
									<div className="relative aspect-square h-5 shrink-0">
										<Image
											src={medias?.img[0]?.url}
											alt={medias?.img[0]?.alt}
											fill
											className="object-contain"
										/>
									</div>
								)}
								<p
									className="mb-0 text-sm"
									dangerouslySetInnerHTML={{
										__html: content?.title,
									}}
								/>
							</div>
						);
					})}
					<div className="col-span-2 h-px bg-light-grey" />
					<div
						className="col-span-2 text-xs text-light-grey [&_p]:mb-0"
						dangerouslySetInnerHTML={{
							__html: content?.footer_text || '',
						}}
					/>
				</div>
			</div>
		</footer>
	);
}
