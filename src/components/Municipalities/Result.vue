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
                Recherchez à partir d'un code postal ou d'un nom, les communes associées.
            </ion-label>
        </ion-toolbar>
        <ion-card v-for="data in cards" :key="data">
            <ion-card-header class="ion-margin-horizontal">
                <ion-card-subtitle>{{data.code}}</ion-card-subtitle>
                <ion-card-title>{{data.nom}}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item lines="full">
                    <ion-label>Département</ion-label>
                    <ion-text slot="end">{{data.departement.code}}</ion-text>
                </ion-item>
                <ion-item lines="full">
                    <ion-label>Régions</ion-label>
                    <ion-text slot="end">{{data.region.code}}</ion-text>
                </ion-item>
                <ion-item lines="full">
                    <ion-label>Codes Postaux Relatifs</ion-label>
                    <ion-text slot="end">{{data.codesPostaux.join()}}</ion-text>
                </ion-item>
                <ion-item lines="full">
                    <ion-label>Population </ion-label>
                    <ion-text slot="end">{{data.population}} habitants</ion-text>
                </ion-item>
            </ion-card-content>
        </ion-card>
    </ion-col>
</template>

<script>
    import { 
        IonCol, 
        IonToolbar, 
        IonTitle, 
        IonCard, 
        IonCardHeader, 
        IonCardTitle, 
        IonCardSubtitle, 
        IonItem, 
        IonCardContent, 
        IonLabel, 
        IonText
    } from '@ionic/vue';

    export default {
        props: ['cards', 'loading'],
        components: {
            IonCol, 
            IonToolbar, 
            IonTitle, 
            IonCard, 
            IonCardHeader, 
            IonCardTitle, 
            IonCardSubtitle, 
            IonItem, 
            IonCardContent, 
            IonLabel, 
            IonText
        }
    }
</script>