import useQueries from 'history/useQueries'
import useBasename from 'history/useBasename'

export default function useRouterHistory(createHistory) {
  return function (options) {
    const history = useQueries(useBasename(createHistory))(options)
    history.__v2_compatible__ = true
    return history
  }
}
