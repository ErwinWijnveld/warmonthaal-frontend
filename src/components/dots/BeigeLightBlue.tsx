const BeigeLightBlue = ({ className, ...rest }: any) => {
	return (
		<div
			className={
				'flex h-[145px] w-[238px] flex-col justify-between ' + className
			}
		>
			<div className="aspect-square w-8 rounded-full bg-light-blue" />
			<div className="aspect-square w-24 self-end rounded-full bg-light-sand" />
		</div>
	);
};
export default BeigeLightBlue;
