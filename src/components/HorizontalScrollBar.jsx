import React, { useContext, useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Icon } from "@iconify/react";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
// import usePreventBodyScroll from "../utils/usePreventBodyScroll";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    useContext(VisibilityContext);
  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <div
      className="right-arrow"
      onClick={() => scrollPrev()}
      disabled={disabled}
      style={{ opacity: disabled ? "0" : "1" }}
    >
      <Icon icon="bxs:left-arrow" />
    </div>
  );
};
const RightArrow = () => {
  const { isLastItemVisible, scrollNext, visibleElements } =
    useContext(VisibilityContext);
  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  );
  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <div
      className="left-arrow"
      onClick={() => scrollNext()}
      disabled={disabled}
      style={{ opacity: disabled ? "0" : "1" }}
    >
      <Icon icon="bxs:right-arrow" />
    </div>
  );
};

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  // const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    // <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          className="horizontal-container"
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
    // </div>
  );
};

export default HorizontalScrollBar;
