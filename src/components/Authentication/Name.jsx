export const Name = ({ name, setUserCredentials }) => {
	return (
		<>
			<label htmlFor="name" className="input-label sr-only">
				Name
			</label>
			<div className="center">
				<input
					className="relative block w-full appearance-none rounded-none   bg-gray-700 border-t-1 border-gray-600  px-3 py-2 text-white placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					value={name}
					onChange={(e) =>
				   setUserCredentials((userCredentials) => ({
            ...userCredentials,
          name:e.target.value
          }))
        }
				/>
			</div>
		</>
	);
};
