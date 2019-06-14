 var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        console.log(ctx); // CanvasRenderingContext2D { ... }

           canvas = d3.select("canvas"),
            ctx = canvas.node().getContext("2d"),
            width = +canvas.attr("width"),
            height = +canvas.attr("height");

        // Create nodes:
        var nodes = d3.range(10000).map(function () {
            var node = {};
            node.x = Math.random() * width;
            node.y = Math.random() * height;
            node.y1 = node.y;  // y1,x1 = original placement.
            node.x1 = node.x;
            node.r = 1;
            node.a = Math.PI * node.r * node.r;
            return node;
        })

        // Set up cluster
        var cluster = d3.cluster()
            .nodes(nodes)
            .on("tick", ticked);

        // Tick function:
        function ticked() {
            // clear canvas:
            ctx.clearRect(0, 0, width, height);

            // Update cluster nodes:
            this.nodes(nodes.filter(function (d) { return d.r != 0; }))

            // draw still active nodes:
            nodes.filter(function (d) { return d.r != 0; })
                .forEach(drawCircle)

        }

        // Modify circle radius with zoom scale:
        var zoom = d3.zoom()
            .on("zoom", function () {
                // Reset nodes to restart cluster at each scale level:
                nodes.forEach(function (node) {
                    node.r = 1 * Math.pow(d3.event.transform.k, 0.3);
                    node.a = Math.PI * node.r * node.r;
                    node.collided = false;
                    node.x = node.x1;
                    node.y = node.y1;
                    node.count = 1;
                })

                // Restart the simulation
                cluster.stop();
                cluster.nodes(nodes)
                    .alpha(1)
                    .restart();
            })

        canvas.call(zoom);

        // Drawing functions:
        function drawCircle(d) {
            ctx.fillStyle = d.collided ? (d.r > 20 ? "#a8ddb5" : "#43a2ca") : "#0868ac";
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
            ctx.fill();

            if (d.r > 20) drawText(d);
        }
        function drawText(d) {
            ctx.font = d.r / 3 + "px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.fillText(d.count, d.x, d.y + d.r / 9);
        }