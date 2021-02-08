<template>
    <ion-col size="12">
        <ion-row v-if="loading" class="ion-justify-content-center ion-align-items-center" size="12">
            <ion-spinner name="crescent"></ion-spinner>
        </ion-row>
        <ion-toolbar v-else-if="cards.length != 0">
            <ion-title>
                <strong>{{cards.length}}</strong>
                <span v-if="cards.length > 1"> résultats</span>
                <span v-else> résultat</span>
            </ion-title>
        </ion-toolbar>
        <ion-toolbar class="ion-padding" v-else>
            <ion-label>
                Sélectionnez une région pour consulter ses départements.
            </ion-label>
        </ion-toolbar>
        <ion-card v-for="data in cards" :key="data">
            <ion-card-header class="ion-margin-horizontal">
                <ion-card-subtitle>{{data.code}}</ion-card-subtitle>
                <ion-card-title>{{data.nom}}</ion-card-title>
            </ion-card-header>
        </ion-card>
    </ion-col>
</template>

<script>
    import { 
        IonCol,
        IonRow,
        IonToolbar, 
        IonTitle, 
        IonCard, 
        IonCardHeader, 
        IonCardTitle, 
        IonCardSubtitle, 
        IonLabel,
        IonSpinner
    } from '@ionic/vue';

    export default {
        props: ['cards', 'loading'],
        components: {
            IonCol,
            IonRow,
            IonToolbar, 
            IonTitle, 
            IonCard, 
            IonCardHeader, 
            IonCardTitle, 
            IonCardSubtitle, 
            IonLabel,
            IonSpinner
        }
    }
</script>