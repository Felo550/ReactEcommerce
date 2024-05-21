/* eslint-disable react/prop-types */
import { Item } from "../Item/Item";

export const ItemList = ({ productsList }) => {
  return (
    <div className="container">
      <div className="row">
        {productsList?.map((elem) => {
          return (
            <div key={elem.id} className="col-md-4 mb-3">
              <Item {...elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
