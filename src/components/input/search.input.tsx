export interface ISearchProps {
  searchText: string;
  setSearchText: (value: string) => void;
  placeholder: string;
}

const Searchbox = (props: ISearchProps) => {
  const { searchText, setSearchText, placeholder } = props;

  return (
    <input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full py-2 px-4 border border-gray-300 text-sm custom-input
      rounded-lg font-sans font-medium"
      placeholder={placeholder}
      type="text"
    />
  );
};

export default Searchbox;
