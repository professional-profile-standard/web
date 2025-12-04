<script>
    import Button from "./ui/Button.svelte";
    import PPS from "./PPS.svelte";
    const { pps } = $props();

    let ppsResult = null;
    function printpps() {
        if (ppsResult) {
            const html =
                ppsResult.innerHTML + "<script>window.print()</" + "script>";
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            window.open(url);
        }
    }
</script>

<div>
    {#if pps}
        <div class="pps-result mb-10" bind:this={ppsResult}>
            <PPS data={pps} />
        </div>
        <Button onclick={printpps}>Print</Button>
    {/if}
</div>
