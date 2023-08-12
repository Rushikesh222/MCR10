import { CardComponent } from "../Component/CardComponet";
import { Leftside } from "../Component/Leftside";

export const Department = () => {
  return (
    <div className="container">
      <div className="leftside">
        <Leftside />
      </div>

      <div className="invintory">
        <CardComponent />
      </div>
    </div>
  );
};
