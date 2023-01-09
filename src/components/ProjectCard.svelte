<script>
	import Button from './Button.svelte';
	import Chip from './Chip.svelte';

	export let project;

	const { imgSrc, name, description, tagList, view = true, source = true } = project;
</script>

<div class="w-96 rounded-lg border-gray-300 border">
	<div class="w-full h-48">
		<img class="h-full w-full rounded-t-lg" src={imgSrc} />
	</div>
	<div class="w-full divide-y p-4">
		<div class="h-40">
			<div class="flex ">
				{#each tagList as tag, i (tag)}
					<Chip variant="portfolio" name={tag} />
				{/each}
			</div>
			<div class="text-4xl">{name}</div>
			<div>{description}</div>
		</div>
		<div class="flex justify-end h-12 pt-2">
			{#if view}
				<Button variant="primary" link={true}>View</Button>
			{/if}
			{#if source}
				<Button variant="secondary" link={true}>Source</Button>
			{/if}
		</div>
	</div>
</div>
