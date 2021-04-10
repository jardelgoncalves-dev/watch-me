import './styles.scss';

interface ColProp {
  children: React.ReactNode,
  className?: string;
}

export function Col({ children, className }: ColProp) {
  return (
    <div className={`col ${className}`}>
      {children}
    </div>
  )
}