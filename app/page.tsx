import Link from 'next/link';
import Image from 'next/image';

import ljubljana from 'public/images/home/ljubljana.jpeg';
import kriptalio from 'public/images/home/kritalio.jpg';
import filip from 'public/images/home/filip.jpg';
import filipe from 'public/images/home/filipe.jpeg';
import fric from 'public/images/home/fri.jpeg';
import miza from 'public/images/home/miza.jpg';

import {CodeBracketIcon} from '@heroicons/react/20/solid'

const stats = [
    {id: 1, name: 'Years of experience with software development', value: '4+'},
    {id: 2, name: 'Hours dedicated to programming', value: '10k'},
    {id: 3, name: 'Projects, hackathons, summer schools', value: '30+'},
]

const features = [
    {
        name: 'Java',
        description:
            'The first programming language I learned as an undergrad and It still has a special place in my heart.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'Kotlin',
        description:
            'I first used it for Android development at college and later in backend development. I love its simplicity and conciseness.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'Python',
        description:
            'I used it for data analysis, machine learning, web development, and more. It is my go-to language for quick prototyping.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'Javascript and TypeScript',
        description:
            'I used it a lot for web development. Since I wrote some trading bots in typescript I started to like it.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'SQL',
        description:
            'It is a must-have skill for every software developer. I used it for data analysis, data engineering, and backend development.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'Git',
        description:
            'I use it every day for version control and collaboration with other developers or even solo projects.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'C# and .NET',
        description:
            'I first used it for my bachelor thesis and later for some projects at work. It is a great language for enterprise applications.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'Solidity',
        description:
            'I used Solidity for smart contract development and I am trying to improve my auditing skills.',
        href: '#',
        icon: CodeBracketIcon,
    },
    {
        name: 'C and C++',
        description:
            'I used it for some projects at college and later for some projects at work. I never mastered it but you have to admire its performance.',
        href: '#',
        icon: CodeBracketIcon,
    },
]

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

export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                hey, I'm Filip 👋
            </h1>
            <p className="prose prose-neutral dark:prose-invert">
                {`a software developer from Ljubljana. In addition to software development, my main interests are AI, data analytics, cybersecurity and blockchains. Currently I `}
                <Link href="/work">work</Link>
                {` as a blockchain developer at `}
                <Link href="https://www.kriptal.io/">Kriptal</Link>
                {` .  I hold a Bachelor's degree in computer science and informatics, and my career goal is to become a top technologist and connect with people in the industry. Above all, I want to be part of a team, company, and projects that add value to Slovenia, Europe, and the world `}
                .
            </p>
            <div className="columns-2 sm:columns-3 gap-4 my-8">
                <div className="relative h-40 mb-4">
                    <Image
                        alt="My faculty, FRI."
                        src={fric}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80 mb-4 sm:mb-0">
                    <Image
                        alt="Me and myself."
                        src={filip}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-[-16px] sm:object-center"
                    />
                </div>
                <div className="relative h-40 sm:h-80 sm:mb-4">
                    <Image
                        alt="Work desk."
                        src={miza}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-top sm:object-center"
                    />
                </div>
                <div className="relative h-40 mb-4 sm:mb-0">
                    <Image
                        alt="Ljubljana, my beautiful city."
                        src={ljubljana}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Where I work."
                        src={kriptalio}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80">
                    <Image
                        alt="Myself and I."
                        src={filipe}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>

            <div className="bg-white py-12 sm:py-12">
                <div className="pb-12 sm:pb-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="prose prose-neutral dark:prose-invert text-gray-600">{stat.name}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>


                <p className="prose prose-neutral dark:prose-invert">
                    I am most proficient in Java and Kotlin, but I also wrote many lines
                    of code in Python Typescript, Solidity, C# and more. You can check out
                    some of my coding projects on my <Link href="https://github.com/filipzupancic"> Github</Link>.
                </p>

                <div className="mt-12 sm:mt-12 lg:mt-12">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none" aria-hidden="true"/>
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col prose prose-neutral dark:prose-invert leading-7">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
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