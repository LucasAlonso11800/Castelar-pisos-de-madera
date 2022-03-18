import Head from 'next/head'

type Props = { title: string };

export default function CustomHead({ title }: Props) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Lucas Alonso" />
            <title>{title}</title>
        </Head>
    )
};