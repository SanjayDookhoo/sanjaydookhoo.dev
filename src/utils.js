import portfolio1 from './assets/portfolio/portfolio1.svg';
import nodejsBetterConsole1 from './assets/nodejsBetterConsole/nodejsBetterConsole1.png';
import actionsFileManager1 from './assets/actionsFileManager/actionsFileManager1.png';
import txnwallet1 from './assets/txnwallet/txnwallet1.png';
import vitePluginSvelteBindSpread from './assets/vite.svg';

export const projects = [
	{
		imgSrc: portfolio1,
		isSvg: true,
		name: 'Portfolio',
		description:
			'A compilation of my achievements, skills and qualifications to provide insight into my capabilities',
		tagList: ['svelte'],
		view: 'https://sanjaydookhoo.dev/',
		source: 'https://github.com/SanjayDookhoo/sanjaydookhoo.dev'
	},
	{
		imgSrc: nodejsBetterConsole1,
		name: 'Nodejs Better Console',
		description:
			'Testing a node.js script is considerably different than testing javascript in a browser. This package provides additional functionality for debugging node.js via console messages.',
		tagList: ['nodejs'],
		view: 'https://www.npmjs.com/package/nodejs-better-console',
		source: 'https://github.com/SanjayDookhoo/nodejs-better-console'
	},
	{
		imgSrc: vitePluginSvelteBindSpread,
		isSvg: true,
		name: 'Vite Plugin Svelte Bind Spread',
		description:
			'A vite plugin for svelte that by default, if a object is spread into a component, it will bind each property in the object as props.',
		tagList: ['vite', 'svelte', 'plugin'],
		view: 'https://www.npmjs.com/package/vite-plugin-svelte-bind-spread',
		source: 'https://github.com/SanjayDookhoo/vite-plugin-svelte-bind-spread'
	},
	{
		imgSrc: actionsFileManager1,
		name: 'Actions File Manager',
		description:
			'A File Manager web component (custom element) that can be implemented in vanilla Javascript or any Javascript framework such as, React, Vue or Angular. One of the most powerful features it provides are, "Custom Actions", where any file or folder can have a custom context menu action to perform any Javascript action. It is also a fully self hosted solution using Docker allowing full ownership of all files and data, ensuring the highest security.',
		tagList: ['fileManager', 's3', 'graphql', 'reactjs', 'nodejs'],
		view: 'https://actions-file-manager.dev/',
		// source: 'https://github.com/SanjayDookhoo/actions-file-manager'
		source: [
			{
				title: 'Frontend',
				source: 'https://github.com/SanjayDookhoo/actions-file-manager'
			},
			{
				title: 'Backend',
				source: 'https://github.com/SanjayDookhoo/actions-file-manager-backend'
			}
		]
	},
	{
		imgSrc: txnwallet1,
		name: 'TXNWallet',
		description:
			'A single wallet dashboard that allows multi blockchain analysis of all owned cryptocurrency and additional note keeping of specific historical transactions.',
		tagList: ['reactjs', 'nodejs'],
		view: 'https://txnwallet.me/',
		source: 'https://github.com/SanjayDookhoo/TXN-Wallet'
	}
];
