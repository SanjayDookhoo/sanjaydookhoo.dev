<script>
	export let Class, variant;
</script>

<button
	class={`p-2 m-1 rounded ${variant == 'primary' ? 'bg-red-500 text-white' : ''} ${
		variant == 'secondary' ? 'bg-gray-500' : ''
	} ${Class}`}
	{...$$restProps}><slot /></button
>
