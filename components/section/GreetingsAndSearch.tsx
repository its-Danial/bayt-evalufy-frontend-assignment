import { Card } from "@tremor/react";
import { FC } from "react";
import SearchField from "@/components/input/SearchField";

const GreetingsAndSearch: FC = (props) => {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="my-auto">
          <h3 className="text-3xl font-medium">Welcome Tim Collins!</h3>
        </div>
        <div className="flex space-x-2">
          <SearchField label="Customer" />
          <SearchField label="Invoice #" />
          <SearchField label="Ticket #" />
          <SearchField label="Inventory" />
        </div>
      </div>
    </Card>
  );
};
export default GreetingsAndSearch;
