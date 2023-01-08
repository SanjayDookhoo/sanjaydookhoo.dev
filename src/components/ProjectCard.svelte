<script>
	import Button from './Button.svelte';
	import Chip from './Chip.svelte';

	export let project;

	const { name, description, tagList, view = true, source = true } = project;
</script>

<div class="w-96 rounded border-gray-300 border">
	<div class="w-full h-48">x</div>
	<div class="w-full h-48 divide-y">
		<div>
			<div class="flex ">
				{#each tagList as tag, i (tag)}
					<Chip type="outlined" name={tag} />
				{/each}
			</div>
			<div>{name}</div>
			<div>{description}</div>
		</div>
		<div>
			{#if view}
				<Button variant="primary">View</Button>
			{/if}
			{#if source}
				<Button variant="secondary">Source</Button>
			{/if}
		</div>
	</div>
</div>
