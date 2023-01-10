<script>
	export let name;
	import reactjs from '../assets/reactjs.svg';
	import fileManager from '../assets/fileManager.svg';
	import graphql from '../assets/graphql.svg';
	import nodejs from '../assets/nodejs.svg';
	import s3 from '../assets/s3.svg';
	import svelte from '../assets/svelte.svg';
	import vite from '../assets/vite.svg';
	import plugin from '../assets/plugin.svg';

	const badgeMap = {
		reactjs: {
			fullName: 'ReactJS',
			icon: reactjs
		},
		svelte: {
			fullName: 'Svelte',
			icon: svelte
		},
		vite: {
			fullName: 'Vite',
			icon: vite
		},
		plugin: {
			fullName: 'Plugin',
			icon: plugin
		},
		fileManager: {
			fullName: 'File Manager',
			icon: fileManager
		},
		s3: {
			fullName: 'S3',
			icon: s3
		},
		graphql: {
			fullName: 'GraphQL',
			icon: graphql
		},
		nodejs: {
			fullName: 'NodeJS',
			icon: nodejs
		}
	};
</script>

<div class="rounded-lg myshadow border border-gray-500 flex p-2 m-2 items-center w-52">
	<img class="w-8 h-8" src={badgeMap[name]?.icon} />
	<div class="pl-4">{badgeMap[name]?.fullName}</div>
</div>
