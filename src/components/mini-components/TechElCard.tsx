import { styled } from 'linaria/react'
import Link from 'next/link'

const Card = styled.div`
   font-size: 0.85rem;
   font-weight: 400;
   font-family: var(--fonts-secondary);
   color: var(--pallete-text);
   width: auto;
   
   background-color: var(--pallete-bg);
   border-radius: 0.3rem;
   border: 1px solid var(--pallete-opaque-bgAlt);

   padding: 0.25rem 0.45rem;

   a {
      text-decoration: underline;
      text-decoration-color: var(--pallete-accent);
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 400;
      font-family: var(--fonts-secondary);
      color: var(--pallete-text);
   }
`

interface PageProps {
   url?: string
   techLabel: string
}

export const TechElCard: React.FC<PageProps> = ({
   url,
   techLabel
}) => {
   return (
      <Card>
			{url ?
				<Link href={url} passHref>
					<a>{techLabel}</a>
				</Link>
			: techLabel}
		</Card>
   )
}