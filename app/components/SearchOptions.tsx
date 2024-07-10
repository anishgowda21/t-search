export default function SearchOptions() {
    return (
        <div className="flex space-x-4">
            <label className="flex items-center">
                <input type="radio" name="searchOption" value="web" className="mr-2" /> Web
            </label>
            <label className="flex items-center">
                <input type="radio" name="searchOption" value="images" className="mr-2" /> Images
            </label>
            <label className="flex items-center">
                <input type="radio" name="searchOption" value="maps" className="mr-2" /> News
            </label>
        </div>
    )

}