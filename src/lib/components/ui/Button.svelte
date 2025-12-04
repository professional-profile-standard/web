<script>
    const { children, ...props } = $props();
</script>

<button {...props} class={`p-1 px-6 rounded bg-zinc-200 dark:bg-zinc-800`}>
    {@render children()}
</button>
