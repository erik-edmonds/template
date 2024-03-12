import * as d3 from "d3";

function copyObj(original) {
    return JSON.parse(JSON.stringify(original));
}

function reset() {
    document.getElementById("myVal").value= '';
    handleClick();
}

export function handleClick(event){
    currentSearch = document.getElementById("myVal").value;

    var words = currentSearch.split(",").map(function(s) { return s.trim() });
    searchTerms = RegExp(words.join('|'), "g");

    d3.selectAll("circle").each(function(d) {
        var circle = d3.select(this);

        switch (selection) {
            case 'county':
                var field = d.county;
                var count = d.county_num;
                break;
            case 'state':
                var field = d.state;
                var count = d.num_state;
                break;
            case 'race':
            case 'gender':
            case 'age':
            case 'education':
                var field = d.group;
                var count = d.num_group;
                break;
        }

        if ( (field.search(searchTerms) != -1) || (currentSearch == "") ) {
            circle.style('pointer-events', 'auto');
            circle.attr("fill", colorScale(((d.num_dem-d.num_rep)/count)*100));
            circle.style("stroke-opacity", 1);
        } else {
            circle.style('pointer-events', 'none');
            circle.attr("fill", "rgba(192,192,192,0.05)");
            circle.style("stroke-opacity", 0);
        }

    });

    return false;
}


function renderCounties() {

    if (cache.counties) {
        build(cache.counties);
    } else {
        d3.csv(urls.county, parseRows, function(error, data) {
            if (error) {throw error};
            //Update cache:
            cache.counties = data;
            build(data);
        });
    }

    function parseRows(d) {
        return {'county': d.county_name + ', ' + d.state, 'state': d.state, 'county_num': +d.county_num, 'turnout': +d.turnout,
            'num_rep': +d.rep_num, 'num_dem': +d.dem_num, 'year': +d.year, 'state_electoral_votes': +d.state_electoral_votes,
            'vap': +d.vap, 'id': d.fips_code, 'dem_margin': +d.dem_margin*100};
    }

    function tooltipOn(d) {
        tooltip.style("visibility", "visible")
            .html(
                d.county + "<br>" +
                "County: D: " + pctFormat(d.num_dem/d.county_num) +
                " R: " + pctFormat(d.num_rep/d.county_num) + "<br>" +
                "Turnout: " + pctFormat(d.turnout) + "<br>" +
                "Voters: " + thsdFormat(Math.round(d.county_num)) + "<br>" +
                "State: D: " + pctFormat(d.num_state_dem/d.num_state) +
                " R: " + pctFormat(d.num_state_rep/d.num_state) +  "<br>" );
    }


    function build(data) {
        var stateData = d3.nest()
            .key(function(d) { return d.year; })
            .key(function(d) { return d.state; })
            .rollup(function(v) { return {
                'num_state': d3.sum(v, function(d) { return d.county_num; }),
                'num_state_dem': d3.sum(v, function(d) { return d.num_dem; }),
                'num_state_rep': d3.sum(v, function(d) { return d.num_rep; }),
            }; })
            .object(data);

        data.forEach(function(d) {
            d.num_state = stateData[d.year][d.state]['num_state'],
                d.num_state_dem = stateData[d.year][d.state]['num_state_dem'],
                d.num_state_rep = stateData[d.year][d.state]['num_state_rep']
        });

        var dataset = d3.nest()
            .key(function(d) { return +d.year; })
            .sortValues(function(a,b) { return b.county_num - a.county_num; } )
            .object(data);


        var years = Object.keys(dataset).map(Number);
        years.sort()
        year = year ? year : years[0];

        var yearData = copyObj(dataset[String(year)]);

        var rScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {return Math.sqrt(d.county_num/Math.PI); })])
            .range([1, 35]);

        var rScale_electoral = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {
                return Math.sqrt((d.county_num/d.num_state)*d.state_electoral_votes/Math.PI);
            })])
            .range([1, 35]);

        var rScale_vpi = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {
                var county_vpi = (d.county_num/d.num_state) * (d.state_electoral_votes/(Math.abs(d.num_state_dem-d.num_state_rep)));
                return Math.sqrt(county_vpi/Math.PI);
            })])
            .range([1, 35]);

        function upclick() {
            year += 4;
            if (year > years[years.length - 1]) {
                year = years[0]
            }
            getYearData(dataset, year);
            yearData = copyObj(dataset[String(year)]);
            update(yearData, year);
        }

        function downclick() {
            year -= 4;
            if (year < years[0]) {
                year = years[years.length - 1];
            }

            yearData = copyObj(dataset[String(year)]);
            update(yearData, year);
        }

        d3.select('#upclick').on("click", upclick);
        d3.select('#downclick').on("click", downclick);


        function getRadioScaled(d) {

            var checked = document.querySelector('input[name="area"]:checked').value;

            if (checked === "electoral") {
                return rScale_electoral(Math.sqrt((d.county_num/d.num_state)*d.state_electoral_votes/Math.PI));
            } else if (checked === "vpi") {
                var county_vpi = (d.county_num/d.num_state) * (d.state_electoral_votes/(Math.abs(d.num_state_dem-d.num_state_rep)));
                return rScale_vpi(Math.sqrt(county_vpi/Math.PI));

            } else {
                return rScale(Math.sqrt(d.county_num/Math.PI));
            }

        }

        function updateAreas(event){

            d3.selectAll("circle").transition()
                .duration(1000)
                .attr("r", function(d) {
                    return getRadioScaled(d);
                });

        }

        d3.select("#areaform")
            .on("click", function () {
                return updateAreas();
            });

        var drag = d3.drag()
            .on("drag", dragged)
            .on("end", ended);


        function dragged(d) {
            d3.selectAll("circle").transition();
            if (d3.event.y >= height) {
                return;
            }

            d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

            if (d.x === undefined || d.y === undefined) {
                return;
            }


            var newMargin = xScale.invert(d.x)/100,
                newTurnout = yScale.invert(d.y)/100,
                oldTurnout = d.turnout,
                oldMargin = (d.num_dem-d.num_rep)/d.county_num,
                marginChange = newMargin-oldMargin,
                oldDfrac = d.num_dem/d.county_num,
                oldRfrac = d.num_rep/d.county_num,
                oldNumDem = d.num_dem,
                oldNumRep = d.num_rep;

            dfrac = oldDfrac + marginChange/2;
            rfrac = oldRfrac - marginChange/2;

            d.county_num = newTurnout*d.vap;

            d.num_dem = dfrac*d.county_num;
            d.num_rep = rfrac*d.county_num;
            d.turnout =  newTurnout;

            d.num_state += (newTurnout - oldTurnout)*d.vap
            d.num_state_dem += d.num_dem - oldNumDem;
            d.num_state_rep += d.num_rep - oldNumRep;

            tooltipOn(d);

            for (var i = 0; i<yearData.length; i++) {
                if (yearData[i].state === d.state) {
                    yearData[i].num_state = d.num_state;
                    yearData[i].num_state_dem = d.num_state_dem;
                    yearData[i].num_state_rep = d.num_state_rep;
                }
            }

            updateScore(yearData);
        }

        function ended(d) {
            for (var i = 0; i<yearData.length; i++) {
                if (yearData[i].state === d.state) {
                    yearData[i].num_state = d.num_state;
                    yearData[i].num_state_dem = d.num_state_dem;
                    yearData[i].num_state_rep = d.num_state_rep;
                }
            }
            update(yearData, d.year);

        }

        function updateScore(yearData) {
            var sums = [0,0,0];
            var electoral_sums = [[],0,0];


            for (var i=0; i<yearData.length; i++) {
                sums[0] += yearData[i].num_dem;
                sums[1] += yearData[i].num_rep;
                sums[2] += yearData[i].county_num;
            }

            var states = [];

            var stateYearData = yearData.filter( function(current) {
                if (states.indexOf(current.state) === -1) {
                    states.push(current.state);
                    return true;
                }
                return false;
            });


            for (var i = 0; i<stateYearData.length; i++) {

                var stateName = stateYearData[i].state;
                var currentYear = stateYearData[i].year;

                if (currentYear === 2016 && ['ME','NE'].indexOf(stateName) !== -1) {
                    electoral_sums[1] += 1.5;
                    electoral_sums[2] += 3;
                } else if (currentYear === 2008 && stateName === 'NE' ) {
                    electoral_sums[1] += 1;
                    electoral_sums[2] += 4;

                } else if (stateYearData[i].num_state_dem > stateYearData[i].num_state_rep ) {
                    electoral_sums[1] += stateYearData[i].state_electoral_votes;
                } else {
                    electoral_sums[2] += stateYearData[i].state_electoral_votes;
                }

            }


            var dfrac = sums[0]/sums[2],
                rfrac = sums[1]/sums[2];

            demtext.text('D ' + pctFormat(dfrac) + ' ' + electoral_sums[1])
            reptext.text('R ' + pctFormat(rfrac) + ' ' + electoral_sums[2])


            if (electoral_sums[1] > electoral_sums[2]) {
                demtext.style('fill', '#bbb');
                reptext.style('fill', null);
            } else {
                demtext.style('fill', null);
                reptext.style('fill', '#bbb');
            }
        }

        function update(yearData, year) {
            updateScore(yearData);
            title.text(year);

            var circles = svg.selectAll("circle")
                .data(yearData, function(d) { return d.id ; });

            circles.exit().remove();

            circles.enter().append("circle")
                .on("mouseover", tooltipOn)
                .on("mouseout", function(d){return tooltip.style("visibility", "hidden");})
                .call(drag)
                .attr("class", "circle")
                .merge(circles)
                .transition()
                .duration(1000)
                .attr("cx", function(d) {
                    return xScale(((d.num_dem-d.num_rep)/d.county_num)*100);
                })
                .attr("cy", function(d) {
                    return yScale(d.turnout*100);
                })
                .attr("r", function(d) {
                    return getRadioScaled(d);
                })
                .attr("fill",function(d){
                    if (d.county.search(searchTerms) != -1) {
                        return colorScale(((d.num_dem-d.num_rep)/d.county_num)*100);
                    }else {
                        return "rgba(192,192,192,0.05)";
                    }
                });


        }

        function initialize(yearData, year) {
            updateScore(yearData);
            title.text(year);

            var circles = svg.selectAll("circle")
                .data(yearData, function(d) { return d.id ; });

            circles.exit().remove();
            circles.enter().append("circle")
                .attr("class", "circle")
                .attr("cx", function(d) {
                    return xScale(((d.num_dem-d.num_rep)/d.county_num)*100);
                })
                .attr("cy", function(d) {
                    return yScale(d.turnout*100);
                })
                .attr("r", function(d) {
                    return getRadioScaled(d);
                })
                .attr("fill",function(d){
                    if (d.county.search(searchTerms) != -1) {
                        return colorScale(((d.num_dem-d.num_rep)/d.county_num)*100);
                    }else {
                        return "rgba(192,192,192,0.05)";
                    }
                })
                .call(drag)
                .on("mouseover", tooltipOn)
                .on("mouseout", function(d){return tooltip.style("visibility", "hidden");});

        }

        initialize(yearData, year);
    }
}