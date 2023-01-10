<script>
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';
	import Chip from './Chip.svelte';

	export let project;

	const { imgSrc, name, description, tagList, view, source } = project;

	let sourceExpand = false;
</script>

<div
	class="w-full m-2 rounded-lg border-gray-300 border hover:myshadow flex flex-col md:flex-row md:items-center "
>
	<div class="w-full divide-y p-4 md:w-480">
		<div class={`flex flex-col`}>
			<div class={`flex flex-wrap`}>
				{#each tagList as tag, i (tag)}
					<Badge name={tag} />
				{/each}
			</div>
			<div class="p-2">
				<div class="text-2xl">{name}</div>
				<div class={`overflow-hidden flex-grow`}>{description}</div>
			</div>
		</div>
		<div class="flex justify-start p-2">
			{#if view}
				<Button variant="primary" link={true} href={view}>View</Button>
			{/if}
			{#if source}
				{#if Array.isArray(source)}
					<!-- <Button variant="secondary" link={true} href={source}>Source</Button> -->
					<div
						class="flex"
						on:mouseenter={() => (sourceExpand = true)}
						on:mouseleave={() => (sourceExpand = false)}
					>
						{#if !sourceExpand}
							<!-- appears like the normal source button, but only until hovered -->
							<div class={`px-2 py-1 m-1 rounded cursor-pointer bg-gray-300`}>Source</div>
						{:else}
							{#each source as sourceEl, i (sourceEl.title)}
								<Button variant="secondary" link={true} href={sourceEl.source}
									>{sourceEl.title}
								</Button>
							{/each}
						{/if}
					</div>
				{:else}
					<Button variant="secondary" link={true} href={source}>Source</Button>
				{/if}
			{/if}
		</div>
	</div>
	<div class="p-2 basis-0 grow">
		<img class="h-full w-full rounded-lg" src={imgSrc} />
	</div>
</div>
