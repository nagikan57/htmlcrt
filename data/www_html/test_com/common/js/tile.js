(function(a) {
    a.fn.tile = function(b) {
        var c, d, e, f, g = this.length - 1,
            h;
        if (!b) b = this.length;
        this.each(function() {
            h = this.style;
            if (h.removeProperty) h.removeProperty("height");
            else if (h.removeAttribute) h.removeAttribute("height")
        });
        return this.each(function(h) {
            e = h % b;
            if (e == 0) c = [];
            c[e] = a(this);
            f = c[e].height();
            if (e == 0 || f > d) d = f;
            if (h == g || e == b - 1) a.each(c, function() {
                this.height(d)
            })
        })
    }
})(jQuery)


$.onFontResize = function(callback) {
	var h = null;
	var $e = $("<div>", {text:"", fontSize:"1em"}).hide().appendTo("body");
	var timer = setInterval(function() {
		var size = $e.css("font-size");
		if(h != size) {
			h = size;
			callback();
		}
	}, 1000);
	callback();
	return this;
};

