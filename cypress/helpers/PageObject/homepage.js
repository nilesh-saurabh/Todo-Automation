/// <reference types = "cypress"/>
const todo_box = '.new-todo';
const todo_list = '.toggle+label';
const edit_todo_list = '.edit';
const radio_button = '.toggle';
const complete_todo_list = '.completed';
const delete_todo = '.clear-completed';
const main_class = '.main';


class homepage{   

    create_todo(taskname)    {
        cy.get(todo_box).should('have.attr', 'placeholder', 'What needs to be done?');
        cy.get(todo_box).type(taskname).type('{enter}');

    }

    edit_todo(newname)    {  
        cy.get(main_class).find('input').should('have.class', 'toggle-all');
        cy.get(todo_list).dblclick().get(edit_todo_list).type(newname).type('{enter}');

    }

    complete_todo()    {
        cy.get('.view').find('input').should('have.class', 'toggle');
        cy.get(radio_button).click().get(complete_todo_list);

    }

    delete_todo()    {        
        cy.get(delete_todo).click();
        cy.get('.view').should('not.exist')

    }    
}

export default homepage;