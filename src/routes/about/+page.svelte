<script>
    const host = `https://pps.sujauddin.me`;
    const src_example_url = `${host}/?src=https%3A%2F%2Fsujauddin.me%2Fpps.yml`;
    const text_example_url = `${host}/?text=personal_details%3A%0A%20%20first_name%3A%20First%20%0A%20%20preferred_first_name%3A%20First%0A%20%20middle_name%3A%20Middle%0A%20%20last_name%3A%20Last%0A%20%20profile_pic%3A%20https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2024%2F10%2F09%2F23%2F55%2Fai-generated-9109565_640.jpg%0Aeducations%3A%0A%20%20-%20institute_name%3A%20ABC%20Institute%203%0A%20%20%20%20degree_name%3A%20ABC%20Degree%203%0A%20%20%20%20field%3A%20ABC%20field%203%0Alinks%3A%0A%20%20-%20url%3A%20https%3A%2F%2Fexample.com%0Acertificates%3A%0A%20%20-%20name%3A%20Cert%202%0A%20%20%20%20issuer%3A%20XYZ%0Aprofiles%3A%0A%20%20SWE%3A%0A%20%20%20%20professional_summary%3A%0A%20%20%20%20%20%20title%3A%20Software%20Engineer%0A%20%20%20%20%20%20summary%3A%20%3E%0A%20%20%20%20%20%20%20%20Software%20engineer%20with%0A%20%20%20%20%20%20%20%20experience%20in%20designing%20and%20developing%20full-stack%20AI-integrated%20applications.%0A%20%20%20%20skills%3A%0A%20%20%20%20%20%20languages%3A%20%5BPython%2C%20JavaScript%5D%0A%20%20%20%20experiences%3A%0A%20%20%20%20%20%20-%20title%3A%20The%20Engineer%0A%20%20%20%20%20%20%20%20organization%3A%20Personal%0A%20%20%20%20projects%3A%0A%20%20%20%20%20%20-%20name%3A%20Project%20XYZ%202%0A%20%20%20%20%20%20%20%20short_description%3A%20A%20short%20description%0A%20%20%20%20certificates%3A%0A%20%20%20%20%20%20-%20name%3A%20Cert%202%0A%20%20%20%20%20%20%20%20issuer%3A%20XYZ%0A%20%20%20%20misc%3A%0A%20%20%20%20%20%20notes%3A%20This%20is%20some%20notes%20for%20you.%0Amisc%3A%0A%20%20cover_letter%3A%20This%20is%20a%20cover%20letter.`;
</script>

<div class="mt-20 space-y-5">
    <div>This is a tool to view, create and debug PPS.</div>
    <div>
        <h2 class="text-xl font-medium mb-2">How to load PPS?</h2>
        <ol class="list-decimal pl-2 wrap-anywhere space-y-5">
            <li>
                You can directly type the PPS. When you first open the site, you
                can see an example PPS for your reference.
            </li>
            <li>
                If you have already a PPS, you can render it through the <code
                    >src</code
                >
                search param. Make sure to URL encode the src. Example:
                <a href={src_example_url} target="_blank">
                    <code>{src_example_url}</code>
                </a>
            </li>
            <li>
                You can also use the <code>text</code> search param to render
                all the texts. URL encode the text and provide as the
                <code>text</code>
                param. Example:
                <a href={text_example_url} target="_blank">Link</a>
            </li>
        </ol>
    </div>
</div>
