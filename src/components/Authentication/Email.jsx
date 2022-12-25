export const Email = ({ email, setUserCredentials }) => {
  return (
    <>
      <label htmlFor="email" className="input-label sr-only">
        Email
      </label>

      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="relative block w-full appearance-none rounded-none   bg-gray-700 border-t-1 border-gray-600  px-3 py-2 text-white placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={email}
        placeholder="email"
        onChange={(e) =>
          setUserCredentials((userCredentials) => ({
            ...userCredentials,
          email:e.target.value
          }))
        }
      />
    </>
  );
};
