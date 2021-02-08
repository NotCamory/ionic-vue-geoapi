<template>
    <ion-page>
        <ion-header>
            <ion-item href="/GeoAPI" class="ion-no-margin" color="dark" lines="none">Geo API</ion-item>
        </ion-header>
        <ion-content>
            <Search @merge="mergeData" @onLoading="displaySpinner"></Search>
            <Result :cards="data" :loading="loader"></Result>
        </ion-content>
    </ion-page>
</template>
<script>
    import { 
        IonPage, 
        IonHeader,  
        IonContent,
        IonItem
    } from '@ionic/vue';

    import { defineComponent } from 'vue';
    
    import Result from "./Result";
    import Search from "./Search";

    export default defineComponent( {
        components: {
            Search, 
            Result, 
            IonHeader,  
            IonContent, 
            IonPage,
            IonItem
        },
        data() {
            return {
                loader: false,
                data: []
            }
        },
        methods: {
            mergeData(value) {
                this.data = value;
                this.loader = false;
            },
            displaySpinner() {
                this.data = [];
                this.loader = true;
            }
        }
    });
</script>