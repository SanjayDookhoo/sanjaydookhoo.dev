<script>
	export let type, Class, name;
	// type: outlined | filled
</script>

<div
	class={`p-2 m-1 rounded border border-gray-500 ${
		type == 'outlined' ? 'text-gray-500' : 'bg-gray-500'
	} `}
>
	{name}
</div>
