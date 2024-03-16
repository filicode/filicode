import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Work',
    description: 'A summary of my work and contributions.',
};


export default function WorkPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    My main areas of interest are software development, blockchain, AI and data engineering. Here's a
                    summary of my work so far.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Kriptal</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Blockchain Developer, 2022 — present
                </p>

                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">GEN-I</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Software Developer, 2021 — 2022
                </p>

            </div>
        </section>
    );
}