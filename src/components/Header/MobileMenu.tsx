import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Link from '../presets/Link';

const MobileMenu = ({ menuItems, close }: any) => {
	const bgRef = useRef(null);
	const timelineRef = useRef(null as any);
	const wrapperRef = useRef(null as any);

	useEffect(() => {
		gsap.context(() => {
			timelineRef.current = gsap
				.timeline()
				.fromTo(
					'.mobile-bg',
					{
						opacity: 0,
					},
					{
						opacity: 1,
						duration: 0.6,
						ease: 'power3.out',
					}
				)
				.fromTo(
					'ul li a',
					{
						x: -100,
						opacity: 0,
					},
					{
						x: 0,
						opacity: 1,
						duration: 0.6,
						ease: 'power3.out',
						stagger: 0.05,
					},
					'-=0.4'
				);
		}, wrapperRef);
	}, []);

	const onClose = () => {
		timelineRef.current.reverse().then(() => {
			close();
		});
	};
	return (
		<div
			ref={wrapperRef}
			className="fixed inset-x-0 z-[90] flex h-screen w-full items-center"
		>
			<div
				onClick={onClose}
				className="mobile-bg absolute inset-0 bg-dark-blue bg-opacity-75"
			/>

			<div className="container mx-auto">
				<ul className="headerlist flex flex-col gap-4">
					{menuItems?.map((item: any, i: number) => {
						const { content } = item;
						return (
							<li key={i} className="[&_:marker]:hidden">
								<Link
									className="block text-xl font-semibold uppercase text-white"
									href={content?.link_url}
									onClick={onClose}
								>
									{content?.link_title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default MobileMenu;
