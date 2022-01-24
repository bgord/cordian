import { useState } from "preact/hooks";

export function useToggle(defaultValue = false) {
  const [on, setIsOn] = useState(defaultValue);

  const setOn = () => setIsOn(true);
  const setOff = () => setIsOn(false);
  const toggle = () => setIsOn((v) => !v);

  return { on, off: !on, setOn, setOff, toggle };
}
