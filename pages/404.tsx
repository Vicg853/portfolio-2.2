import type { ErrorProps } from 'next/error'
import type { GetStaticProps } from 'next'
import type { PageFullType  } from '../src/locales'

import Error from 'next/error'

import { getPageSource } from '@api-utils/locales-sources'

interface Props extends ErrorProps {
	pageSource: PageFullType<any>
}


export const getStaticProps: GetStaticProps<Pick<Props, 'pageSource'>> = 
async ({ locale }) => {
	const pageSource = getPageSource(locale, 'index')

	return { props: { pageSource } }
}

export default function Page() {
  return <Error statusCode={404} title='Not found!' />
}