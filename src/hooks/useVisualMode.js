import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      setHistory([...history.slice(0, history.length - 1), newMode]);
    } else {
      history.push(newMode);
    }
    setMode(newMode);
  }

  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
      setHistory((prev) => [...prev.slice(0, -1)]);
    }
  }

  return { mode, transition, back };
}
