const Stars = ({ amount }: any) => {
	return (
		<div className="flex gap-1">
			{[...Array(5)].map((_, i) => {
				if (i <= amount - 1) {
					return (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="13.884"
							height="13.289"
							viewBox="0 0 13.884 13.289"
						>
							<path
								id="Icon_awesome-star"
								data-name="Icon awesome-star"
								d="M7.639.461,5.944,3.9,2.152,4.45a.831.831,0,0,0-.459,1.417L4.436,8.54l-.649,3.776a.83.83,0,0,0,1.2.875l3.392-1.783,3.392,1.783a.831.831,0,0,0,1.2-.875L12.33,8.54l2.743-2.673a.831.831,0,0,0-.459-1.417L10.823,3.9,9.128.461a.831.831,0,0,0-1.49,0Z"
								transform="translate(-1.441 0.001)"
								fill="#ffe27b"
							/>
						</svg>
					);
				}
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13.884"
						height="13.289"
						viewBox="0 0 13.884 13.289"
					>
						<path
							id="Icon_awesome-star"
							data-name="Icon awesome-star"
							d="M7.639.461,5.944,3.9,2.152,4.45a.831.831,0,0,0-.459,1.417L4.436,8.54l-.649,3.776a.83.83,0,0,0,1.2.875l3.392-1.783,3.392,1.783a.831.831,0,0,0,1.2-.875L12.33,8.54l2.743-2.673a.831.831,0,0,0-.459-1.417L10.823,3.9,9.128.461a.831.831,0,0,0-1.49,0Z"
							transform="translate(-1.441 0.001)"
							fill="#D5D5D5"
						/>
					</svg>
				);
			})}
		</div>
	);
};
export default Stars;
