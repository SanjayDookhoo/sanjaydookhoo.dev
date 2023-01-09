<script>
	export let Class,
		variant,
		link = false;

	let dynamicClass = '';
	const variantMap = {
		primary: 'bg-red-500 text-white hover:bg-red-600',
		secondary: 'bg-gray-300 hover:bg-gray-400'
	};

	$: dynamicClass = variantMap[variant];
</script>

<svelte:element
	this={link ? 'a' : 'button'}
	class={`px-2 py-1 m-1 rounded cursor-pointer ${Class} ${dynamicClass}`}
	{...$$restProps}><slot /></svelte:element
>
