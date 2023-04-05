import usePrevious from "./usePrevious"

export default function useCompare (val) {
    const prevVal = usePrevious(val)
    return prevVal !== val
  }