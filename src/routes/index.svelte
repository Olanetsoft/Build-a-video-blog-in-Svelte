<script context="module">
  ///src/routes/index.svelte
  export async function load({ fetch }) {
    const posts = await fetch("/api").then((r) => r.json());
    // const posts = []
    return {
      props: { posts },
    };
  }
</script>

<script>
  import PostCard from "/src/components/post-card.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Build a video blog in Svelte</title>
  <meta name="description" content="Build a video blog in Svelte!" />
</svelte:head>

<main>
  <h1>Build a video blog in Svelte</h1>
  <div class="post">
    {#each posts as post}
      <PostCard {...post} />
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  /* card style */

  .post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
</style>
