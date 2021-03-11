<template>    
    <nav>
        <v-app-bar app flat color="indigo darken-4">
            <v-app-bar-nav-icon @click="drawer = !drawer" color="deep-orange darken-3"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn plain color="deep-orange darken-3" dark v-bind="attrs" v-on="on">
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" router :to="item.route">
                        <v-list-item-icon>
                            <v-icon small>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn plain color="deep-orange darken-3">
                <span>Cerrar Sesion</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="deep-orange darken-2" dark>
            <v-row no-gutters class="mt-5">
                <v-col class="d-flex justify-center">
                    <v-avatar size="100">
                        <v-img src="oscar.jpg"></v-img>
                    </v-avatar>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-2"> 
                <v-col class="d-flex justify-center">
                    <p class="subtitle-1 white--text">Oscar</p>
                </v-col>
            </v-row>

            <v-row no-gutters class="mb-5">
                <v-col class="d-flex justify-center"> 
                    <form-popup />
                </v-col>
            </v-row>
            
            <v-list>
                <v-list-item-group v-model="selectedItem" color="indigo darken-4">
                    <v-list-item v-for="(item, index) in items" :key="index" router :to="item.route">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import FormPopup from './FormPopup.vue'

    export default {
        name: 'AppBar',
        components: { FormPopup },
        data () {
            return {
                drawer: false,
                selectedItem: 0,
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard', color: 'indigo', route: '/' },
                    { title: 'Proyects', icon: 'mdi-folder-table', color: 'red', route: '/proyects' },
                    { title: 'Team', icon: 'mdi-account-group', color: 'green', route: '/team' },
                    { title: 'Admin', icon: 'mdi-card-account-details', color: 'green', route: '/admin' },
                ],
            }
        },
    }
</script>

<style scoped>

</style>