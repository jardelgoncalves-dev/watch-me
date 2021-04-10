import './styles.scss';

interface RowProp {
  children: React.ReactNode
}

export function Row({ children }: RowProp) {
  return (
    <div className="row">
      {children}
    </div>
  )
}