import React, { Fragment } from "react";
import { observer } from "mobx-react";

import EzHeader from "./pages/EzHeader";
import EzLogViewer from "./pages/EzLogViewer";

@observer class EzLogViewerApp extends React.Component {

  render() {
    return (
      <Fragment>
        <div id="logViewerContainer" style={{minHeight: window.innerHeight}}>
          <EzHeader />
          <EzLogViewer />
        </div>
      </Fragment>
    );
  }
}

export default EzLogViewerApp;