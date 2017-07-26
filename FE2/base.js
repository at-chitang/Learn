var $input = document.getElementById("js-name");
var $submit = document.getElementById("js-submit");
var $list = document.getElementById("js-members");
var Member = (function () {
    function Member(name) {
        if (name === void 0) { name = 'anonymous'; }
        this.eleMem = document.createElement('li');
        this.eleMem.className = 'btn btn-danger';
        this.spanTag(name);
        this.buttonTag();
    }
    Member.prototype.spanTag = function (name) {
        var $span = document.createElement('span');
        $span.innerHTML = name;
        this.eleMem.appendChild($span);
    };
    Member.prototype.buttonTag = function () {
        var $delBtn = document.createElement('button');
        $delBtn.className = 'btn ';
        $delBtn.innerHTML = 'Del';
        $delBtn.addEventListener('click', function () {
            var $parentElement = this.parentNode;
            $list.removeChild($parentElement);
        });
        this.eleMem.appendChild($delBtn);
    };
    return Member;
}());
;
$submit.addEventListener('click', function () {
    var name = $input.value;
    var member = new Member(name);
    $list.appendChild(member.eleMem);
});
