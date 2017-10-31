import uniq from 'lodash/fp/uniq'

export const getChangedProps = (props, prevProps) =>
  uniq(Object.keys(props), Object.keys(prevProps))
    .filter(key => props[key] !== prevProps[key])
