<script>
	export let variant, Class, name;
	// variant: techStack | portfolio

	let dynamicClass = '';
	const variantMap = {
		techStack: 'p-2 text-gray-300',
		portfolio: 'py-0 px-1 text-sm bg-gray-300'
	};

	$: dynamicClass = variantMap[variant];
</script>

<div class={`m-1 rounded border border-gray-300 ${Class ?? ''} ${dynamicClass}`}>
	{name}
</div>
