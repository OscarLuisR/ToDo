<template>
    <div class="team">        
        <h1 class="subtitle-1 grey--text">Team</h1>
        
        <v-container class="my-4">
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="3 " v-for="(person, index) in team" :key="index">
                    <v-card class="text-center">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <v-img :src="person.avatar"></v-img>
                            </v-avatar>
                        </v-responsive>
                        
                        <v-card-text>
                            <div class="subtitle-1">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                            <v-card-actions>
                                <v-btn text color="grey">
                                    <v-icon small left>mdi-message</v-icon>
                                    <span>Message</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
            
            
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Team",

        data () {
            return {
                team: [
                    { name: 'The Net Ninja', role: 'Web developer', avatar: '/david.jpg' },
                    { name: 'Ryu', role: 'Graphic designer', avatar: '/papa.jpg' },
                    { name: 'Chun Li', role: 'Web developer', avatar: '/luis.jpg' },
                    { name: 'Gouken', role: 'Social media maverick', avatar: '/marilyn.jpg' },
                    { name: 'Yoshi', role: 'Sales guru', avatar: '/oscar.jpg' }
                ]
            }
        }
    };
</script>

<style scoped>

</style>
