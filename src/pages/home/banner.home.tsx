import Searchbox from "../../components/input/search.input";

export interface IHomeBannerProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

const HomeBanner = (props: IHomeBannerProps) => {
  const { searchText, setSearchText } = props;
  return (
    <div className="w-full flex flex-col h-auto items-center bg-gradient-to-tr from-gradient-100 to-gradient-200 px-4 py-4 lg:min-h-[33%]">
      <div className="w-full flex flex-row lg:justify-start justify-center">
        <h1 className="lg:text-xs text-lg text-white font-serif font-bold">
          SongSafari
        </h1>
      </div>
      <p className="md:text-lg text-sm  text-white text-center lg:mt-8 mt-2 font-sans font-semibold">
        Uncover the latest trends and timeless tunes on SongSafari, your gateway
        to musical exploration
      </p>
      <div className="lg:w-1/2 w-5/6 mt-4 lg:mb-0 mb-4">
        <Searchbox
          placeholder="Search for songs by title, albums or artists"
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
