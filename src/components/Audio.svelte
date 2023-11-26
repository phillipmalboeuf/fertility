<script lang="ts" context="module">
  const players: {
    [id: string]: HTMLAudioElement
  } = {}

  export function stopAll() {
    Object.values(players).forEach(p => p.pause())
    return true
  }
</script>

<script lang="ts">
  import type { Asset } from 'contentful';
  import { onMount } from 'svelte';

  export let media: Asset<"WITHOUT_UNRESOLVABLE_LINKS">

  let audio: HTMLAudioElement
  let paused: boolean = true

  onMount(() => {
    // console.log(audio)
    players[media.sys.id] = audio
  })
</script>

<button on:click={() => {
  paused ? stopAll() && audio.play() : audio.pause()
}}>
  {media.fields.title}
  {#if paused}
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.64229 19.4947C0.822254 19.4947 0.3125 18.8554 0.3125 17.8795V2.1092C0.3125 1.13337 0.822254 0.505249 1.64229 0.505249C2.08556 0.505249 2.46233 0.673496 2.9056 0.931474L15.8268 8.50258C16.7465 9.04097 17.0679 9.39989 17.0679 9.99436C17.0679 10.5888 16.7465 10.9478 15.8268 11.4974L2.9056 19.0573C2.46233 19.3152 2.08556 19.4947 1.64229 19.4947Z" fill="currentColor"/> </svg>
  {:else}
  <svg width="18" height="20" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5.80566" y="0.192383" width="19.9995" height="5.28146" rx="2.64073" transform="rotate(90 5.80566 0.192383)" fill="currentColor"/>
  <rect x="16.0869" y="0.192383" width="19.9995" height="5.28146" rx="2.64073" transform="rotate(90 16.0869 0.192383)" fill="currentColor"/>
  </svg>
  {/if}
</button>
<audio bind:paused bind:this={audio} src={media.fields.file.url} data-title={media.fields.title} />

<style lang="scss">
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>