<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`data/index.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 400px) {
    ul {
      grid-template-columns: 1fr;
    }
  }


	/* h1, figure, p {
		text-align: center;
		margin: 0 auto;
	} */
  img {
    max-width: 95%;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Pages</h1>

<h2>Color</h2>

<ul>
  {#each posts.color as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="/sparks/{post.slug}">
        {#if post.image}
        <figure>
            <img src={`/assets/${post.image}`} alt={post.title} />
            <figcaption>{post.title}</figcaption>
        </figure>
        {:else}
        {post.title}
        {/if}
      </a>
    </li>
  {/each}
</ul>


<h2>CSS</h2>

<ul>
  {#each posts.css as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="/sparks/{post.slug}">
        {#if post.image}
        <figure>
            <img src={`/assets/${post.image}`} alt={post.title} />
            <figcaption>{post.title}</figcaption>
        </figure>
        {:else}
        {post.title}
        {/if}
      </a>
    </li>
  {/each}
</ul>