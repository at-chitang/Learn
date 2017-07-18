var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var $bin = document.getElementById("js-name");
$bin.addEventListener('click', add_member);
function add_member() {
    var name = document.getElementById("name").value;
    document.getElementById("list-name").innerHTML += name + " </br>";
}
var Vihicle = (function () {
    function Vihicle() {
        console.log("Hi");
    }
    return Vihicle;
}());
;
var Motobike = (function (_super) {
    __extends(Motobike, _super);
    function Motobike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motobike;
}(Vihicle));
var banh_xe = 2;
constructor(name);
{
}
;
