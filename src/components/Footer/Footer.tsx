import Link from '../presets/Link';

export default function Footer({ menus }: any) {
	const footerMenu =
		menus?.find((item: any) => item?.slug === 'footer') || null;

	if (!footerMenu) return null;

	const footerBlock = footerMenu?.blocks[0];

	const { content, children } = footerBlock;

	console.log(footerBlock);

	return (
		<section className="border-t-2">
			<div className="container flex flex-wrap gap-10 py-20 sm:flex-nowrap sm:gap-[18px] [&_h5]:mb-0 [&_a]:block [&_a]:text-lg">
				<div className="w-full sm:w-3/12">
					<h5>{content?.title_1}</h5>
					{children?.link_left?.map((item: any, i: number) => (
						<Link href={item?.content?.link_url} key={i}>
							{item?.content?.link_text}
						</Link>
					))}
				</div>
				<div className="w-full sm:w-3/12">
					<h5>{content?.title_2}</h5>
					{children?.link_middle?.map((item: any, i: number) => (
						<Link href={item?.content?.link_url} key={i}>
							{item?.content?.link_text}
						</Link>
					))}
				</div>
				<div className="w-full sm:w-4/12">
					<h5>{content?.title_3}</h5>
					<div
						className="[&_p]:text-lg"
						dangerouslySetInnerHTML={{
							__html: content?.text || '',
						}}
					/>
					{/* <h6>
						Dinsdag t/m Donderdag en Zondag
						<br />
						12:00 - 22:00
						<br />
						Vrijdag en Zaterdag
						<br />
						12:00 - 23:00
					</h6> */}
				</div>
				<div className="w-full sm:w-2/12">
					<h5>{content?.title_4}</h5>
					{children?.link_right?.map((item: any, i: number) => (
						<Link href={item?.content?.link_url} key={i}>
							{item?.content?.link_text}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
