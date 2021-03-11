<template>
    <div class="proyects">        
        <h1 class="subtitle-1 grey--text">Proyects</h1>
        
        <v-container class="my-4">            
            <template>
                <v-expansion-panels accordion focusable>
                    <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
                        <v-expansion-panel-header disable-icon-rotate> {{ project.title }} 
                            <template v-slot:actions>
                                
                                <v-tooltip top :color="colorPanel(project.status)">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-bind="attrs" v-on="on" :color="colorPanel(project.status)">{{ iconPanel(project.status) }}</v-icon>
                                    </template>
                                    
                                    <span>{{ project.status }}</span>
                                </v-tooltip>

                            </template>
                        </v-expansion-panel-header>
                        
                        <v-expansion-panel-content class="grey--text">
                            <div class="font-weight-bold subtitle-1">{{ project.due }}</div>

                            <div> {{ project.content }} </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Proyects",
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
            myProjects() {
                return this.projects.filter(project => {
                    return project.person === 'The Net Ninja'
                }) 
            },

            colorPanel: (app) => (status) => {
                return (status === 'complete' ? '#3cd1c2' : (status === 'ongoing' ? 'orange' : '#ff6347'));
            },

            iconPanel: (app) => (status) => {
                return (status === 'complete' ? 'mdi-checkbox-marked-circle' : (status === 'ongoing' ? 'mdi-cog-transfer' : 'mdi-tortoise'));
            }
        },
    };
</script>

<style scoped>

</style>
