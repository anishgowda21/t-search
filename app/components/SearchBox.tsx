export default function SearchBox() {
    return (
        <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Search
            </button>
        </div>
    );
}