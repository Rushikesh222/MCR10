import { CardComponent } from "../Component/CardComponet";
import { LeftSide } from "../Component/Leftside";

export const Department = () => {
  return (
    <div className="container">
      <div className="leftside">
        <LeftSide />
      </div>

      <div className="invintory">
        <CardComponent />
      </div>
    </div>
  );
};
