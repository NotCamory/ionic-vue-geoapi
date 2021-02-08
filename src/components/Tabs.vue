<template>
    <ion-page>
        <ion-tabs>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="Municipalities" href="Municipalities">
                    <ion-icon :icon="map" />
                    <ion-label>Communes</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="Departments" href="Departments">
                    <ion-icon :icon="pin" />
                    <ion-label>Départements</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="Regions" href="Regions">
                    <ion-icon :icon="location"/>
                    <ion-label>Régions</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
<script>
    import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
    import { location, pin, map } from 'ionicons/icons';

    export default {
        name: 'Tabs',
        components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
        setup() {
            return {
                location,
                pin,
                map
            }
        }
    }
</script>