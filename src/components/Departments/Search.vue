<template>
    <ion-col size="12">
        <ion-item class="ion-margin-horizontal ion-padding-left" lines="full">
            <ion-label>Départements</ion-label>
            <ion-select interface="action-sheet" @ionChange="search">
                <ion-select-option v-for="(value, key) in departments" :key="key" :value="value.code">{{value.nom}}</ion-select-option>
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
                departments: [],
                data: []
            }
        },
        methods: {
            buildDepartments() {
                fetch(`https://geo.api.gouv.fr/departements`).then((response)=>{
                    response.json().then((data)=> {
                        this.departments = data;
                    });
                });
            },
            search(event) {
                this.$emit('onLoading', true);
                fetch('https://geo.api.gouv.fr/departements/' + event.target.value + '/communes')
                .then((response)=>{
                    response.json().then((data)=> {
                        if (data.length === 0){
                            this.$refs.Toast.openToast("Ce nom de département n'est pas reconnu.");
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
            this.buildDepartments()
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