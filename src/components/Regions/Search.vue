<template>
    <ion-col size="12">
        <ion-item class="ion-margin-horizontal ion-padding-left" lines="full">
            <ion-label>Régions</ion-label>
            <ion-select interface="action-sheet" @ionChange="search">
                <ion-select-option v-for="(value, key) in regions" :key="key" :value="value.code">{{value.nom}}</ion-select-option>
            </ion-select>
        </ion-item>
    </ion-col>
    <toast ref="Toast"></toast>
</template>
<script>
    import { 
        IonCol, 
        IonItem, 
        IonLabel, 
        IonSelect,
        IonSelectOption
    } from '@ionic/vue';

    import Toast from "../Toast";

    export default {
        emits: ["merge", "onLoading"],
        data() {
            return {
                regions: [],
                data: []
            }
        },
        methods: {
            buildRegions() {
                fetch(`https://geo.api.gouv.fr/regions`).then((response)=>{
                    response.json().then((data)=> {
                        this.regions = data;
                    });
                });
            },
            search(event) {
                this.$emit('onLoading', true);
                fetch('https://geo.api.gouv.fr/regions/' + event.target.value + '/departements')
                .then((response)=>{
                    response.json().then((data)=> {
                        if (data.length === 0){
                            this.$refs.Toast.openToast("Ce nom de région n'est pas reconnu.");
                        }
                        else {
                            this.data = data;
                            this.$emit('merge', this.data);
                        }
                    });
                });
            }

        },
        mounted() {
            this.buildRegions()
        },
        components: {
            IonCol, 
            IonItem, 
            IonLabel,
            IonSelect,
            IonSelectOption,
            Toast
        }
    }

</script>

<style scoped>

</style>