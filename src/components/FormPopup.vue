<template>
    <v-dialog v-model="dialog" width="600" persistent>    
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="indigo darken-4" dark v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>

        <v-card>
            <v-card-title >
                <h2>Add a new project</h2>
            </v-card-title>
            
            <v-card-text>
                <v-form ref="formDatos" v-model="valid" class="px-3"> 
                    <v-text-field 
                        v-model.trim="title"
                        label="Title"
                        prepend-icon="mdi-folder-text"
                        color="blue darken-2"
                        :rules="[rules.required, rules.min]"
                    ></v-text-field>

                    <v-textarea 
                        v-model.trim="content" 
                        label="Information" 
                        rows="3"
                        prepend-icon="mdi-lead-pencil"
                        color="blue darken-2"
                        :rules="[rules.required]"
                    ></v-textarea>

                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        max-width="290"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                :value="formattedDate"
                                clearable
                                label="Due Date"
                                prepend-icon="mdi-calendar"
                                color="blue darken-2"
                                :rules="[rules.required]"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                @click:clear="due = null"
                            >
                            </v-text-field>
                        </template>

                        <v-date-picker
                            v-model="due"
                            @change="menu = false"
                            color="blue darken-2"
                        >
                        </v-date-picker>
                    </v-menu>

                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn @click="cancel" color="blue-grey" dark>Cancelar</v-btn>
                <v-btn @click="submit" class="white--text" :disabled="!valid" color="deep-orange darken-3">Add project</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { format, parseISO } from 'date-fns';
    // import db from '@/fb';

    export default {
        name: 'FormPopup',
        data () {
            return {
                dialog: false,
                valid: false,
                title: null,
                content: null,
                person: null,
                due: null,
                menu: false,
                rules: {
                    required: value => !!value || "Required.",
                    min: v => (v && v.length >= 3) || "Minimun length is 3 characters.",

                    /* required: value => !!value || "Required.",
                    min: v => (v && v.length >= 5) || "Password must have at least 5 characters.",
                    max: v => (v && v.length <= 10) || "Password must be less than 10 characters.",
                    email: v => /.+@.+\..+/.test(v) || "E-mail must be valid" */
                },
                
            }
        },

        computed: {
            formattedDate() { 
                return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
            },
        },

        methods: {
            async submit() {
                if (this.$refs.formDatos.validate()) {
                    try {
                        let document = {
                            title: this.title,
                            person: 'The Net Ninja',
                            due: format(parseISO(this.due), 'do MMM yyyy'),
                            status: 'ongoing', 
                            content: this.content
                        };
    
                        console.log(document);
    
                        /* const res = await db.collection('projects').add(document);
    
                        console.log(res) */

                        this.dialog = false;
                        this.$refs.formDatos.reset();
                    } catch (error) {
                        console.log('***** ERROR ******', error);
                    }
                }
            },
            
            cancel() {
                this.dialog = false;
                this.$refs.formDatos.reset();
            },
        },
    }
</script>

<style scoped>

</style>>

</style>