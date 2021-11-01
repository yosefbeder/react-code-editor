import { useEffect, useState } from 'react';
import Editor from '../../dist/react-throwcode.esm';
import GithubCorners from '@uiw/react-github-corners';
import {
	CodeIcon as Code,
	DocumentIcon as Document,
	LinkIcon as Link,
} from '@heroicons/react/solid';

import Documentation from '../documentation.md';
import { MDXProvider } from '@mdx-js/react';

import { lowlight } from 'lowlight/lib/core';
import { toHtml } from 'hast-util-to-html';

import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';

lowlight.registerLanguage('bash', bash);
lowlight.registerLanguage('javascript', javascript);
lowlight.registerLanguage('typescript', typescript);
lowlight.registerLanguage('xml', xml);

import 'highlight.js/styles/atom-one-light.css';

const convertToSlug = text =>
	text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');

function H2({ children }) {
	const slug = convertToSlug(children);
	const [isMouseIn, setIsMouseIn] = useState(false);

	return (
		<h2
			id={slug}
			className="flex gap-2 items-center transform -translate-x-8"
			onMouseEnter={() => setIsMouseIn(true)}
			onMouseLeave={() => setIsMouseIn(false)}
		>
			<a href={`#${slug}`} className={`${!isMouseIn ? 'opacity-0' : ''}`}>
				<Link className="w-6 h-6" />
			</a>
			{children}
		</h2>
	);
}

function H3({ children }) {
	const slug = convertToSlug(children);
	const [isMouseIn, setIsMouseIn] = useState(false);

	return (
		<h3
			id={slug}
			className="flex gap-1 items-center transform -translate-x-6"
			onMouseEnter={() => setIsMouseIn(true)}
			onMouseLeave={() => setIsMouseIn(false)}
		>
			<a href={`#${slug}`} className={`${!isMouseIn ? 'opacity-0' : ''}`}>
				<Link className="w-5 h-5" />
			</a>
			{children}
		</h3>
	);
}

function A({ children, href, ...elProps }) {
	const inPage = href.startsWith('#');

	return (
		<a {...elProps} href={href} target={inPage ? '_self' : '_blank'}>
			{children}
		</a>
	);
}

function ToggleSwitch({ isChecked, onToggle, children }) {
	return (
		<div className="flex items-center justify-between sm:justify-start sm:gap-2 ">
			<p className="select-none">{children}</p>
			<div
				onClick={onToggle}
				className={`flex ${
					isChecked ? 'justify-end' : 'justify-start'
				} items-center ${
					isChecked
						? 'bg-blue-500 hover:bg-blue-600'
						: 'bg-gray-300 hover:bg-gray-400'
				} rounded-full w-10 h-5 px-0.5 cursor-pointer`}
			>
				<div className="rounded-full w-4 h-4 bg-white"></div>
			</div>
		</div>
	);
}

function App() {
	const [value, setValue] = useState(`import { useState } from 'react';
import CodeEditor from 'react-throwcode';

import { lowlight } from 'lowlight/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';

lowlight.registerLanguage(javascript, 'javascript');

function App() {
	const [code, setCode] = useState('');

	return (
		<div className="app">
			<CodeEditor
				language="javascript"
				value={code}
				onChange={text => setCode(text)}
			/>
		</div>
	);
}

export default App;`);

	const [configs, setConfigs] = useState({
		language: 'javascript',
		theme: 'light',
		value,
		onChange: text => setValue(text),
		height: 300,
		lineNumbers: true,
		highlight: true,
		spellCheck: false,
		handleSpecialCharacters: true,
		handleHistory: true,
	});

	useEffect(() => {
		document.querySelectorAll('pre > code').forEach(codeblock => {
			const language = codeblock.className.split('-')[1];
			const content = codeblock.innerText;

			codeblock.innerHTML = toHtml(lowlight.highlight(language, content));
			codeblock.classList.add('hljs');
		});
	}, []);

	return (
		<>
			<GithubCorners
				href="https://github.com/yosefbeder/react-code-editor"
				fixed
				zIndex={10}
				target="_blank"
			/>
			<div className="max-w-screen-sm mx-auto py-4 px-2">
				<section>
					<h1 className="flex">
						<Code className="w-11 h-11 text-blue-500 mr-4" />
						React-
						<span className="text-blue-500">ThrowCode</span>
					</h1>
					<p className="w-96">
						A mini code-editor for small apps with the most essential features
						for a code editor!
					</p>
				</section>

				<section>
					<H2>Example</H2>
					<Editor
						{...configs}
						className="editor rounded-md shadow-md border mb-4"
					/>
					<div className="grid sm:grid-cols-2 p-2 rounded-md shadow-md border bg-white mb-4">
						<ToggleSwitch
							isChecked={configs.height !== 'auto'}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									height: prev.height === 'auto' ? 300 : 'auto',
								}))
							}
						>
							Explicit height (300px)
						</ToggleSwitch>

						<ToggleSwitch
							isChecked={configs.theme === 'dark'}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									theme: prev.theme === 'light' ? 'dark' : 'light',
								}))
							}
						>
							Dark mode
						</ToggleSwitch>

						<ToggleSwitch
							isChecked={configs.lineNumbers}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									lineNumbers: !prev.lineNumbers,
								}))
							}
						>
							Line numbers
						</ToggleSwitch>

						<ToggleSwitch
							isChecked={configs.highlight}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									highlight: !prev.highlight,
								}))
							}
						>
							Highlight
						</ToggleSwitch>

						<ToggleSwitch
							isChecked={configs.spellCheck}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									spellCheck: !prev.spellCheck,
								}))
							}
						>
							Spell check
						</ToggleSwitch>

						<ToggleSwitch
							isChecked={configs.handleHistory}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									handleHistory: !prev.handleHistory,
								}))
							}
						>
							History handling
						</ToggleSwitch>

						<ToggleSwitch
							isChecked={configs.handleSpecialCharacters}
							onToggle={() =>
								setConfigs(prev => ({
									...prev,
									handleSpecialCharacters: !prev.handleSpecialCharacters,
								}))
							}
						>
							Special characters handling
						</ToggleSwitch>
					</div>

					<div className="flex gap-4 ">
						<a className="button" href="#getting-started">
							<Document className="w-5 h-5" />
							Documentation
						</a>
						<a
							className="button"
							href="https://github.com/yosefbeder/react-code-editor"
							target="_blank"
						>
							<Code className="w-5 h-5" />
							Source code
						</a>
					</div>
				</section>
				<MDXProvider components={{ h2: H2, h3: H3, a: A }}>
					<Documentation />
				</MDXProvider>
			</div>
		</>
	);
}

export default App;
