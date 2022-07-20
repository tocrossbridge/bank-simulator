<template>
    <div v-if="modal.open" class="modal">
        <div class="modal__content">
            <div class="modal__close" @click="close()">X</div>
            <p class="modal__title">{{ modal.data.title }}</p>

            <!-- // TODO: transform the progress bar in a component -->
            <div class="progress-element">
                <div class="progress-container progress-container-created" v-if="modal.data.status == 'created'">
                    <progress value="10" max="100"></progress>
                </div>
                <div class="progress-container progress-container-processing" v-if="modal.data.status == 'processing'">
                    <progress value="50" max="100"></progress>
                </div>
                <div class="progress-container progress-container-processed" v-if="modal.data.status == 'processed'">
                    <progress value="100" max="100"></progress>
                </div>
            </div>

            <div class="progress-bar__legend">
                <p>Solicitado</p>
                <p>Processando</p>
                <p>Concluída</p>
            </div>

            <div>
                <p class="transaction-data__title">Transferindo de</p>
                <div class="transaction-data__row">
                    <p>{{ modal.data.from }}</p>
                    <p>R$ 1.800</p>
                </div>
            </div>
            <div>
                <p class="transaction-data__title">Para</p>
                <div class="transaction-data__row">
                    <p>{{ modal.data.to }}</p>
                    <p>R$ 1.800</p>
                </div>
            </div>
            
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

    display: grid;
    align-items: center;

    width: 100%;
    height: 100%;
    overflow: auto;

    background-color: rgb(0,0,0); /* fallback */
    background-color: rgba(0,0,0,0.9);
}
.modal__content{
    width: 80%;
    max-width: 600px;

    padding: 1em 2em 3em 2em;
    margin: auto;
    display: block;

    color: var(--clr-text-secondary);

    background: var(--clr-white);
}
.modal__title{
    margin: auto auto 1.5em auto;
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

/* modal content */
.progress-bar__legend{
    margin: auto auto 1.5em auto;

    display: flex;
    justify-content: space-between;
}
.transaction-data__title{
    margin: 1em auto 1em auto;
    font: 600 1.2rem var(--font-family);
}
.transaction-data__row{
    display: flex;
    justify-content: space-between;
}
</style>