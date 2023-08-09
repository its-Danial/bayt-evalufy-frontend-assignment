import { FC } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";
type SearchFieldProps = {
  label: string;
};

const SearchField: FC<SearchFieldProps> = ({ label }) => {
  return (
    <div>
      <h6 className="text-sm font-medium pb-1 ml-1">{label}</h6>
      <TextInput className="w-4 h-8" icon={SearchIcon} placeholder="Search..." />
    </div>
  );
};
export default SearchField;
