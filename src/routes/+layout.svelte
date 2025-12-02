<script>
    import "./layout.css";
    import favicon from "$lib/assets/favicon.ico";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="lg:max-w-[60dvw] mx-auto p-3 pps-wrapper">
    <div>
        <h1 class="text-2xl font-semibold">
            <a href="/" style="color: unset"> 🌿 Professional Profile Standard </a>
        </h1>
        <div class="text-sm">
            <p>
                Learn more about
                <a
                    href="https://github.com/professional-profile-standard/standard"
                    target="_blank">PPS</a
                >.
            </p>
            <p>
                Learn more about <a href="/about">this site</a>.
            </p>
        </div>
    </div>
    <div>
        {@render children()}
    </div>
</div>
