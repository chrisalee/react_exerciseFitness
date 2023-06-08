import { useCallback, useEffect, useState } from "react";

const preventDefault = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
};

const enableBodyScroll = () => {
  document && document.removeEventListener("wheel", preventDefault, false);
};
const disableBodyScroll = () => {
  document &&
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
};

const usePreventBodyScroll = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    hidden ? disableBodyScroll() : enableBodyScroll();

    return enableBodyScroll;
  }, [hidden]);

  const disableScroll = useCallback(() => setHidden(true), []);
  const enableScroll = useCallback(() => setHidden(true), []);
  return { disableScroll, enableScroll };
};

export default usePreventBodyScroll;
