angular.module('fourWheels').component('footer', {
    templateUrl: 'app/footer/footer.template.html',
    controllerAs: 'footerCtrl',
    controller: function(){
        this.name= "";
        this.email= "";
        this.contacted = false;

        this.contacted = function(){
            this.name = "";
            this.email = "";
            this.contacted = true;
        }
    }
})