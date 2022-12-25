export const NotificationCard = ({ notificationInfo }) => {
	return (
		<ul class="w-96 p-4  border border-gray-500">
			<li class="pb-3 sm:pb-4">
				<div class="flex items-center space-x-4">
					<div class="flex-shrink-0">
						<img
							class="w-8 h-8 rounded-full"
							src={notificationInfo.sender.imageUrl}
							alt={`${notificationInfo.sender} iamge`}
						/>
					</div>
					<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
						{notificationInfo.sender.username}

						<span class="text-sm text-gray-500 truncate dark:text-gray-400">
							{notificationInfo.action === "Liked"
								? " has liked your post"
								: notificationInfo.action === "Followed"
								? " started following you."
								: " has unfollowed you"}
						</span>
					</p>
				</div>
			</li>
		</ul>
	);
};
