<script>
	export let name,
		isActive = false,
		inactive = false;
	import reactjs from '../assets/reactjs.svg';
	import fileManager from '../assets/fileManager.svg';
	import graphql from '../assets/graphql.svg';
	import nodejs from '../assets/nodejs.svg';
	import s3 from '../assets/s3.svg';
	import svelte from '../assets/svelte.svg';
	import vite from '../assets/vite.svg';
	import plugin from '../assets/plugin.svg';

	const badgeMap = {
		showAll: {
			fullName: 'Show All',
			googleFontsIcon: 'apps'
		},
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

	let hovered = false;
</script>

<button
	class={inactive ? 'cursor-default' : 'cursor-pointer'}
	on:click
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<div
		class={`rounded-lg myshadow border border-gray-500 flex p-2 m-2 items-center w-52 ${
			isActive ? 'bg-red-200' : ''
		} ${!inactive && hovered ? 'bg-red-300' : ''}`}
	>
		{#if badgeMap[name]?.googleFontsIcon}
			<span class="material-symbols-outlined w-8 h-8 flex items-center justify-center">
				{badgeMap[name]?.googleFontsIcon}
			</span>
		{:else}
			<img class="w-8 h-8" src={badgeMap[name]?.icon} alt={`${badgeMap[name]?.fullName} Logo`} />
		{/if}
		<div class="pl-4">{badgeMap[name]?.fullName}</div>
	</div>
</button>
