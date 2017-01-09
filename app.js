/**
 * Created by gregor.laan on 9.01.2017.
 */
var app = new Vue({
    el: '#app',
    data: {
        form: {
            txtnimi: null,
            txtvanus: null
        },
        persons: []
    },
    methods: {
        addPerson: function() {
            this.persons.push( JSON.parse(JSON.stringify(this.form)) );
            
            $('#flash').slideDown().delay(1500).slideUp();

            this.form.txtnimi = "";
            this.form.txtvanus = "";
        }
    }
})