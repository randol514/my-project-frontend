import Card from "./Card";

import { customers } from "../../../mocks/customers";

const List = () => {
  return (
    <div className="customers-list">
      {customers.map((c) => (
        <Card key={c.id} customer={c} />
      ))}
    </div>
  );
};

export default List;
