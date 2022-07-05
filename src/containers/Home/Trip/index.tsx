import { FC } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

const Index: FC = () => {
  const anchors = ["firstPage", "secondPage", "thirdPage"];

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

        return (
          <div>
            <div className="section">
              <h3>Slide down1</h3>
            </div>
            <div className="section">
              <h3>Slide down2</h3>
            </div>
            <div className="section">
              <h3>Slide down3</h3>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Index;
