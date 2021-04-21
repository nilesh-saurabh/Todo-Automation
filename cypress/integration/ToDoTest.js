import helper from '../helpers/helper.js';
import homepage from '../helpers/PageObject/homepage.js'
const objhelper = new helper();
const objhomepage = new homepage();


describe("New To-Do Test", function() {

    beforeEach(function() {
        
        //This load testdata.json fixture
        cy.fixture("testdata.json").then(function(data) {
            this.data = data;
        });
      
        }
    )

    it("Task 1",function () {
        objhelper.visit_homepage();
        objhomepage.create_todo(this.data.create_to_do);        
        }
    )

    it("Task 2",function (){
        objhomepage.edit_todo(this.data.edit_to_do);
        }
    )

    it("Task 3",function (){
        objhomepage.complete_todo();
        }
    )

    it("Task 4",function (){
        objhomepage.delete_todo();
        }
    )

});