<template>
    <div v-if="modal.open" class="modal">
        <div class="modal__content">
            <div class="modal__close" @click="close()">X</div>
            <p class="modal__title">{{ modal.data.title }}</p>
            {{ modal.data }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['modal'],
    methods: {
        close(){
            this.modal.open = false
        }
    }
}
</script>
<style scoped>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 100%;
    overflow: auto;

    background-color: rgb(0,0,0); /* fallback */
    background-color: rgba(0,0,0,0.9);
}
.modal__content{
    width: 80%;
    max-width: 700px;

    padding: 1em;
    margin: auto;
    display: block;

    color: var(--clr-text-secondary);

    background: var(--clr-white);
}
.modal__title{
    text-align: center;
    letter-spacing: 0;
    line-height: 56px;

    font: 700 clamp(1.8em, 5vh, 2em) var(--font-family);

    color: var(--clr-text-primary);
}

.modal__close{
    display: flex;
    justify-content: end;
}
</style>