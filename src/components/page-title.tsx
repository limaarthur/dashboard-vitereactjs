import { Helmet } from 'react-helmet-async'

interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Helmet titleTemplate="%s | dashboard.web">
      <title>{title}</title>
    </Helmet>
  )
}
