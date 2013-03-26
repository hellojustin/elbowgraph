window.onload = function () {
    function getControlPoints( previousPoint, currentPoint, nextPoint ) {
        var prevX = previousPoint[0],
            prevY = previousPoint[1],
            currX = currentPoint[0],
            currY = currentPoint[1],
            nextX = nextPoint[0],
            nextY = nextPoint[1],

            prevXMidpointOffset = ( currX - prevX ) / 2,
            nextXMidpointOffset = ( nextX - currX ) / 2,

            a = Math.atan( ( currX - prevX ) / Math.abs( currY - prevY ) ),
            b = Math.atan( ( nextX - currX ) / Math.abs( currY - nextY ) );

        a = prevY < currY ? Math.PI - a : a;
        b = nextY < currY ? Math.PI - b : b;

        var alpha = Math.PI / 2 - ( ( a + b ) % ( Math.PI * 2 ) ) / 2,
            dx1 = prevXMidpointOffset * Math.sin( alpha + a ),
            dy1 = prevXMidpointOffset * Math.cos( alpha + a ),
            dx2 = nextXMidpointOffset * Math.sin( alpha + b ),
            dy2 = nextXMidpointOffset * Math.cos( alpha + b );

        return {
            previous : { x : currX - dx1, y : currY + dy1, },
            current  : { x : currX + dx2, y : currY + dy2  }
        };
    }
    // Grab the data
    var data = [];
    $("#data tbody td").each(function () { data.push($(this).html()); });
    
    // Draw
    var width = 800,
        height = 250,
        leftgutter = 30,
        bottomgutter = 20,
        topgutter = 20,
        colorhue = .6 || Math.random(),
        color = "hsl(" + [colorhue, .5, .5] + ")",
        r = Raphael("holder", width, height),
        X = (width - leftgutter) / data.length,
        max = Math.max.apply(Math, data),
        Y = (height - bottomgutter - topgutter) / max;
    var path = r.path().attr({stroke: color, "stroke-width": 4, "stroke-linejoin": "round"});

    var p, bgpp;
    for (var i = 0, ii = data.length; i < ii; i++) {

        var Y0 = Math.round(height - bottomgutter - Y * data[i - 1]),
            X0 = Math.round(leftgutter + X * (i - 1)),
            y  = Math.round(height - bottomgutter - Y * data[i]),
            x  = Math.round(leftgutter + X * (i)),
            Y2 = Math.round(height - bottomgutter - Y * data[i + 1]),
            X2 = Math.round(leftgutter + X * (i + 1));

        if (!i) {
            p = ["M", x, y, "C", x, y];
        }

        if (i && i < ii - 1) {
            var control = getControlPoints( [X0, Y0], [x, y], [X2, Y2] ),
                a1path  = r.path( 'M' + X0 + ',' + Y0 + 'L' + control.previous.x + ',' + control.previous.y ).attr({stroke:'#f33'}),
                anchor1 = r.circle(control.previous.x, control.previous.y, 3).attr({fill: "#f33", stroke: "#f33"}),
                a2path  = r.path( 'M' + x + ',' + y + 'L' + control.current.x + ',' + control.current.y ).attr({stroke:'#3f3'}),
                anchor2 = r.circle(control.current.x, control.current.y, 3).attr({fill: "#3f3", stroke: "#3f3"});
            p = p.concat([control.previous.x, control.previous.y, x, y, control.current.x, control.current.y]);
        }

        var dot = r.circle(x, y, 4).attr({fill: "#333", stroke: color, "stroke-width": 2});

    }
    p = p.concat([x, y, x, y]);
    path.attr({path: p});
};
