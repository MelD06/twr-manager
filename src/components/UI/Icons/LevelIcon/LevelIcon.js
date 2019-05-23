import React from 'react';

import VeryLowIcon from "@material-ui/icons/SignalCellular0Bar";
import LowIcon from "@material-ui/icons/SignalCellular1Bar";
import MediumIcon from "@material-ui/icons/SignalCellular2Bar";
import HighIcon from "@material-ui/icons/SignalCellular3Bar";
import VeryHighIcon from "@material-ui/icons/SignalCellular4Bar";
import NoDataIcon from "@material-ui/icons/NotInterested";

const levelIcon = (props) => {
        switch (props.level) {
          case "very-low":
            return <VeryLowIcon />;
          case "low":
            return <LowIcon />;
          case "medium":
            return <MediumIcon />;
          case "high":
            return <HighIcon />;
            case "very-high":
              return <VeryHighIcon />;
          default:
            return <NoDataIcon />;
      };
}

export default levelIcon;