<template>
    <ion-page>
        <ion-header>
            <ion-item href="/" class="ion-no-margin" color="dark" lines="none">Geo API</ion-item>
        </ion-header>
        <ion-grid>
            <ion-row class="ion-padding ion-align-items-center">
                <ion-toolbar class="ion-margin">
                    <ion-title>Geo API Recherche</ion-title>
                </ion-toolbar>
                <ion-text class="ion-margin-bottom">Recherche de communes par codes postal et nom</ion-text>
                <ion-text class="ion-margin-bottom">Recherche de communes par département</ion-text>
                <ion-text class="ion-margin-bottom">Recherche de de départements par région</ion-text>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>
<script>
    import { 
        IonPage, 
        IonHeader,  
        IonRow,
        IonItem,
        IonGrid,
        IonText,
        IonToolbar,
        IonTitle
    } from '@ionic/vue';

    import { defineComponent } from 'vue';

    export default defineComponent( {
        components: {
            IonHeader,  
            IonRow, 
            IonPage,
            IonItem,
            IonGrid,
            IonText,
            IonToolbar,
            IonTitle
        },
    });
</script>