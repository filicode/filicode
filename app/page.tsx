import Link from 'next/link';

export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                hey, I'm Filip 👋
            </h1>
            <p className="prose prose-neutral dark:prose-invert">
                {`I'm a software developer interested in blockchain, AI and data engineering. I `}
                <Link href="/work">work</Link>
                {` as a blockchain developer at `}
                <Link href="https://www.kriptal.io/">Kriptal</Link>
                .
            </p>
        </section>
    );
}