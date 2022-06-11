<svelte:options accessors={true}/>

<script>
    import clickOutside from '$lib/actions/clickOutside'
    import {fade, fly} from 'svelte/transition'
    import {stylus} from '$lib/helpers'
    import {modal, modalWrapper} from './styles'

    export let active = false
    export let key = 0
    export let styleOptions = {}

    export const activate = () => {
        active = true
        key++
    }
    $:wrapper = stylus(modalWrapper({...styleOptions}))
    $:modalStyle = stylus(modal({...styleOptions}))
</script>


{#if active}
    {#key key}
        <div
                class={`${wrapper.classes}`}}
                transition:fade={{ duration: 300 }}
        >
            <div
                    class={`${modalStyle.classes}`}}
                    id="modal"
                    transition:fly={{ duration: 300, y: 50, delay: 200 }}
                    use:clickOutside
                    on:outclick={() => (active = false)}
            >
                <slot/>
            </div>
        </div>
    {/key}
{/if}
