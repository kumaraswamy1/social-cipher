export const FollowList = ({ requiresUserProfile, setFollowModal }) => {
	const handleClose = (e) => {
		if (e.target.id === "wrapper") {
			setFollowModal(false);
		}
	};
	return (
		<div
			class="fixed  flex flex-col justify-center items-center inset-0 container mx-auto px-4 sm:px-8 "
			id="wrapper"
			onClick={(e) => handleClose(e)}
		>
			<div class="py-8 ">
				<div onClick={() => setFollowModal(false)}>
					<h2
						class="text-xl font-semibold leading-tight flex justify-end"
						onClick={() => setFollowModal(false)}
					>
						X
					</h2>
				</div>
				<div class="py-2 overflow-x-auto">
					<div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
						<table class="min-w-full leading-normal">
							<thead>
								<tr>
									<th class="px-5 py-3 border-b-2 border-r-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
										Followers
									</th>

									<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
										Following
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm m-4 ">
										{requiresUserProfile.followers.map((item) => (
											<div class="flex  p-2 border-b  border-gray-200">
												<div class="flex-shrink-0 w-10 h-10">
													<img
														class="w-full h-full rounded-full"
														src={item.imageUrl}
														alt=""
													/>
												</div>
												<div class="m-3 ">
													<p class="text-gray-900 whitespace-no-wrap">
														{item.username}
													</p>
												</div>
											</div>
										))}
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										{requiresUserProfile.following.map((item) => (
											<div class="flex p-2 border-b border-gray-200">
												<div class="flex-shrink-0 w-10 h-10">
													<img
														class="w-full h-full rounded-full"
														src={item.imageUrl}
														alt=""
													/>
												</div>
												<div class="m-3">
													<p class="text-gray-900 whitespace-no-wrap">
														{item.username}
													</p>
												</div>
											</div>
										))}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
