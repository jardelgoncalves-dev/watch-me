import './styles.scss';

interface LoadingSelectButtonProp {
  loading: boolean
}
export function LoadingSelectButton({ loading }: LoadingSelectButtonProp) {
  return (
    loading ? (
      <div className="loading-select-button">
        <div className="select-item-faker size-1 loading" />
        <div className="select-item-faker size-2 loading" />
        <div className="select-item-faker size-2 loading" />
        <div className="select-item-faker size-1 loading" />
      </div>
    ): null
  )
}