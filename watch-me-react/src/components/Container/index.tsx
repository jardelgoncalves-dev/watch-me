import './styles.scss';

interface ContainerProp {
  children: React.ReactNode
}

export function Container({ children }: ContainerProp) {
  return (
    <div className="container">
      {children}
    </div>
  )
}