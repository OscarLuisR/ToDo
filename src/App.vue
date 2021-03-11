<template>
    <!-- Raiz de la aplicacion en Vuetify -- Reemplazo de <div id="app"> -->
    <v-app>
        <!-- <v-navigation-drawer app> </v-navigation-drawer> -->

        <app-bar app></app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <!-- <v-footer app></v-footer> -->
    </v-app>
</template>

<script>
    import AppBar from './components/AppBar.vue';
    
    export default {
        name: 'App',
        components: {
            AppBar     
        },

        data: () => ({
            //
        }),
    };
</script>