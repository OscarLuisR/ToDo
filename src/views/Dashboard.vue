<template>
    <div class="dashboard">
        <h1 class="subtitle-1 grey--text">Dashboard</h1>
        
        <v-container class="my-4">            
            <v-row class="mb-3 pa-3">
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small plain color="indigo" v-bind="attrs" v-on="on" @click="orderBy('title')">
                            <v-icon small left>mdi-folder-table</v-icon>
                            <span class="text-caption text-lowercase">By project title</span>
                        </v-btn>
                    </template>
                    
                    <span>Sort project by title</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small plain color="orange" v-bind="attrs" v-on="on" @click="orderBy('person')">
                            <v-icon small left>mdi-account-tie</v-icon>
                            <span class="text-caption text-lowercase">By person</span>
                        </v-btn>
                    </template>
                    
                    <span>Sort project by person</span>
                </v-tooltip>
            </v-row>

            <v-card tile :class="`pa-3 mb-1 project ${project.status}`" v-for="(project, index) in projects" :key="index">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="text-caption grey--text">Proyect Title</div>
                        <div>{{ project.title }}</div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="text-caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="text-caption grey--text">Due By</div>
                        <div>{{ project.due }}</div>
                    </v-col>

                    <v-col class="d-flex justify-center align-center" cols="2" sm="4" md="2">
                        <!-- <div class="text-caption grey--text">Status</div> -->

                        <v-chip :color="colorChip(project.status)" small text-color="white">
                            <v-avatar left>
                                <v-icon>{{iconChip(project.status)}}</v-icon>
                            </v-avatar> 

                            {{ project.status }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                projects: [
                    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Design a App Movil', person: 'The Net Ninja', due: '1st Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Create Data Base', person: 'The Net Ninja', due: '1st Jan 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                ]
            }
        },

        computed: {
            colorChip: (app) => (status) => {
                return (status === 'complete' ? '#3cd1c2' : (status === 'ongoing' ? 'orange' : '#ff6347'));
            },

            iconChip: (app) => (status) => {
                return (status === 'complete' ? 'mdi-checkbox-marked-circle' : (status === 'ongoing' ? 'mdi-cog-transfer' : 'mdi-tortoise'));
            }
        },

        methods: {
            orderBy(prop) {
                this.projects.sort((a, b)=> {
                    return a[prop] < b[prop] ? -1 : 1
                });
                
            }
        },
    };
</script>

<style scoped>
    .project.complete {
        border-left: 4px solid #3cd1c2;
    }

    .project.ongoing {
        border-left: 4px solid orange;
    }

    .project.overdue {
        border-left: 4px solid tomato;
    }

    v-chip {
        width: 100px;
    }
</style>
