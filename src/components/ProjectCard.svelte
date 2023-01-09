<script>
	import Button from './Button.svelte';
	import Chip from './Chip.svelte';

	export let project;

	const { imgSrc, name, description, tagList, view, source } = project;

	let sourceExpand = false,
		cardHovered = false;
</script>

<div
	class="w-96 p-2"
	on:mouseenter={() => (cardHovered = true)}
	on:mouseleave={() => (cardHovered = false)}
>
	<div class="rounded-lg border-gray-300 border hover:shadow-2xl hover:border-2">
		<div class="w-full h-48">
			<img class="h-full w-full rounded-t-lg" src={imgSrc} />
		</div>
		<div class="w-full divide-y p-4">
			<!-- min-height: 16rem is equivalent to min-h-64, even though tailwind doesnt include this class -->
			<div class={`flex flex-col ${cardHovered ? '' : 'h-64'}`} style="min-height: 16rem;">
				<div
					class={`flex flex-wrap ${cardHovered ? '' : 'overflow-hidden'}`}
					style={cardHovered ? '' : 'height: 30px;'}
				>
					{#each tagList as tag, i (tag)}
						<Chip variant="portfolio" name={tag} />
					{/each}
				</div>
				<div class="text-4xl">{name}</div>
				<div class={`overflow-hidden flex-grow ${cardHovered ? '' : 'basis-0'}`}>{description}</div>
			</div>
			<div class="flex justify-end h-12 pt-2">
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
	</div>
</div>
