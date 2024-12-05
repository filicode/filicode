import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Work',
    description: 'A summary of my work and contributions.',
};

const navigation = {
    social: [
        {
            name: 'GitHub',
            href: 'https://github.com/filipzupancic',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function WorkPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">work experience</h1>
            <div className="prose prose-neutral dark:prose-invert">
                {/*<p>
                    Here's a summary of my work so far.
                </p>*/}
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Munich Innovation Labs (MIL)</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Software developer, 2024 — present
                </p>
                <p>
                As a member of the engineering team at MIL, my primary responsibility is maintaining and enhancing the codebase for the INspectre analysis platform, ensuring its performance, scalability, and reliability.
                </p>
                <ul>
                    <li>
                        Python, React, Microservices.
                    </li>
                </ul>

                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Kriptal</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Blockchain Developer, 2022 — present
                </p>
                <p>
                    I joined Kriptal as the first employee to help build blockchain solutions. Our core product is
                    developed in Kotlin and Java.
                    As the industry is rapidly evolving, we are constantly learning and adapting so I used many
                    different tools and technologies
                </p>
                <ul>
                    <li>
                        Kotlin, Java, Solidity, Typescript, Python, SQL.
                    </li>
                </ul>

                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">GEN-I</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Software Developer, 2021 — 2022
                </p>
                <p>
                    GEN-I is a leading energy trading company in Slovenia. I worked on the development of internal
                    software.
                </p>
                <ul>
                    <li>
                        C#, .NET, Microsoft SQL Server.
                    </li>
                </ul>

                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">CGS Labs</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Data analyst, 2020
                </p>
                <p>
                    I made an analysis and prepared a report of weather stations data on Slovenian highways.
                </p>
                <ul>
                    <li>
                        Python, SQL.
                    </li>
                </ul>

                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Marand, d.o.o. (now Better)</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Software developer, 2018
                </p>
                <p>
                    Fixing bugs and developing new features for the healthcare software.
                </p>
                <ul>
                    <li>
                        Java, SpringBoot, Oracle DB.
                    </li>
                </ul>

                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">University of Ljubljana, Institute of
                    Pathology, IT department</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    IT department, network infrastructure maintenance, 2017
                </p>
                <p>
                    Helpdesk, network infrastructure maintenance, preparing computers for new employees, etc.
                </p>
                <ul>
                    <li>
                        Microsoft Active Directory, Hardware maintenance, etc.
                    </li>
                </ul>
            </div>

            <h1 className="font-medium text-2xl mb-8 mt-16 tracking-tighter">education</h1>
            <div className="prose prose-neutral dark:prose-invert mb-16">
                {/*<p>
                    Here's a summary of my work so far.
                </p>*/}
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">FRI</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Bachelor's degree in Computer Science and Informatics.
                </p>
                <p>
                    Fun times, learned a lot about AI, software development and life, met some great people.
                    I dropped out of master's degree to pursue my career which I intend to finish in the future.
                </p>
                <ul>
                    <li>
                        Bachelor's thesis title: Open source tools for control of industrial processes
                    </li>
                </ul>

            </div>

            <footer className="bg-white">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8">
                    <div className="flex justify-center space-x-10">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        ))}
                    </div>
                    <p className="mt-10 text-center leading-5">
                        Filip Kokalj Zupančič &copy; 2024.
                    </p>
                </div>
            </footer>
        </section>
    );
}