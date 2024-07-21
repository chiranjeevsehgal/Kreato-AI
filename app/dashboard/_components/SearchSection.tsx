import { Search } from "lucide-react"

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-800 via-purple-900 to-purple-700 
    flex justify-center items-center text-white flex-col">

      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-2 sm:mb-3">Browse All Templates</h2>
      <p className="text-sm sm:text-base md:text-lg text-center mb-4 sm:mb-6">What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 p-2 sm:p-3 border rounded-md items-center bg-white my-3 sm:my-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-3xl">
            <Search className="text-primary w-5 h-5 sm:w-6 sm:h-6"/>
            <input 
              placeholder="Search" 
              className="bg-transparent outline-none w-full text-black text-sm sm:text-base"
              onChange={(event) => onSearchInput(event.target.value)}
            />
        </div>
      </div>
    </div>
  )
}

export default SearchSection