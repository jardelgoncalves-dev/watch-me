import './styles.scss';

interface LoadingSelectGenresProp {
  loading: boolean
}
export function LoadingSelectGenres({ loading }: LoadingSelectGenresProp) {
  return (
    loading ? (
      <div className="loading-select-genres">
        <div className="select-item-faker size-1 loading" />
        <div className="select-item-faker size-2 loading" />
        <div className="select-item-faker size-2 loading" />
        <div className="select-item-faker size-1 loading" />
      </div>
    ): null
  )
}