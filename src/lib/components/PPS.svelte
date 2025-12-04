<script>
    import Educations from "./Educations.svelte";
    import Links from "./Links.svelte";
    import Profiles from "./Profiles.svelte";
    import Button from "./ui/Button.svelte";
    import Renderer from "./Renderer.svelte";
    import { miscSchema, personalDetailsSchema } from "$lib/schema";
    import { miscSnippet, personalDetailsSnippet } from "./snippets.svelte";

    const { pps } = $props();
    let ppsResult = null;
    function printpps() {
        if (ppsResult) {
            const html = ppsResult.innerHTML + "<script>window.print()<\/script>";
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            window.open(url);
        }
    }
</script>

<div>
    {#if pps}
        <Button onclick={printpps}>Print</Button>
        <div class="pps-result" bind:this={ppsResult}>
            <div class="space-y-10">
                <Renderer
                    data={pps.personal_details}
                    message="Error while rendering personal details"
                    schema={personalDetailsSchema}
                    snippet={personalDetailsSnippet}
                />
                <Educations data={pps.educations} />
                <Links data={pps.links} />
                <Profiles data={pps.profiles} />
                <Renderer
                    data={pps.misc}
                    message="Error while rendering misc"
                    schema={miscSchema}
                    snippet={miscSnippet}
                />
            </div>
        </div>
    {/if}
</div>
