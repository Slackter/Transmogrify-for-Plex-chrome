function drawYearsChart(year_data) {
    var x_labels = ["x"];
    var y_data = ["Count"];
    for (var year in year_data) {
        x_labels.push(year);
        y_data.push(year_data[year]);
    }

    var chart = c3.generate({
        bindto: "#year-chart",
        data: {
            x: "x",
            type: "bar",
            columns: [
                x_labels,
                y_data,
            ],
            color: function(color, d) {
                return "#FF9900";
            }
        },
        bar: {
            width: {
                ratio: 0.7
            }
        },
        axis: {
            x: {
                type: "number",
                label: {
                    text: "Year",
                    position: "outer-center"
                },
                tick: {
                    fit: false
                }
            },
            y: {
                label: {
                    text: "Number of Movies",
                    position: "outer-middle"
                }
            }
        },
        grid: {
            x: {
                show: false
            },
            y: {
                show: true
            }
        },
        legend: {
            show: false
        }
    });
}

function drawGenreChart(genre_data) {
    var chart = c3.generate({
        bindto: "#genre-chart",
        data: {
            json: genre_data,
            type: "donut"
        },
        donut: {
            label: {
                format: function(value, ratio, id) {
                    return id;
                }
            },
            width: 140
        },
        legend: {
            position: "right"
        },
        tooltip: {
            format: {
                value: function(value, ratio, id) {
                    var format = d3.format(".1%");
                    return value + " Movies (" + format(ratio) + ")";
                }
            }
        }
    });
}

function drawContentRatingChart(content_rating_data) {
    var chart = c3.generate({
        bindto: "#content-rating-chart",
        data: {
            json: content_rating_data,
            type: "donut"
        },
        donut: {
            label: {
                format: function(value, ratio, id) {
                    return id;
                }
            },
            width: 140
        },
        legend: {
            position: "right"
        },
        tooltip: {
            format: {
                value: function(value, ratio, id) {
                    var format = d3.format(".1%");
                    return value + " Movies (" + format(ratio) + ")";
                }
            }
        }
    });
}