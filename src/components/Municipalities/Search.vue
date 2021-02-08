<template>
    <ion-col size="12">
        <ion-item class="ion-margin-horizontal ion-padding-left" lines="none">
            <ion-label position="fixed">Commune</ion-label>
            <ion-searchbar @ionChange="search" placeholder="Recherche" animated></ion-searchbar>
        </ion-item>
    </ion-col>
    <toast ref="Toast"></toast>
</template>
<script>
    import { 
        IonCol, 
        IonItem, 
        IonLabel, 
        IonSearchbar
    } from '@ionic/vue';

    import Toast from "../Toast";

    export default {
        emits: ["merge", "onLoading"],
        data() {
            return {
                query: "",
                data: []
            }
        },
        name: "Search",
        methods: {
            search(event) {
                this.$emit('onLoading', true);
                this.query = (parseInt(event.target.value)) ? "?codePostal=" : "?nom=";

                fetch('https://geo.api.gouv.fr/communes' + this.query + event.target.value + '&fields=region,departement,population,codesPostaux&boost=population')
                .then((response)=>{
                    response.json().then((data)=> {
                        if (data.length === 0 && event.target.value != ""){
                            this.$refs.Toast.openToast("Ce code postal n'est pas reconnu.");
                        }
                        else {
                            this.data = data;
                            this.$emit('merge', this.data);
                        }
                    });
                });
            }

        },
        components: {
            IonCol, 
            IonItem, 
            IonLabel, 
            IonSearchbar,
            Toast
        }
    }

</script>

<style scoped>

</style>