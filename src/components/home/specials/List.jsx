import Card from "./Card";

import { specials } from "../../../mocks/specials";

const List = () => {
  return (
    <div className="specials-list">
      {specials.map((s) => (
        <Card key={s.id} specials={s} />
      ))}
    </div>
  );
};

export default List;
