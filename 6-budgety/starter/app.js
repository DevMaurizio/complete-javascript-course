var budgetController = (function() {

})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UIctrl) {

    var ctrlAddItem = function() {
        console.log('It works.');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);