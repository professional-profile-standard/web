<script>
    import Renderer from "./Renderer.svelte";
    import { ppsSchema } from "$lib/schema";
    import { ppsSnippet } from "./snippets.svelte";
    const { data } = $props();
</script>

<Renderer
    {data}
    message="Error while rendering pps"
    schema={ppsSchema}
    snippet={ppsSnippet}
/>
