$("document").ready(() => {
  function init() {
    addActiveClassForCard();
    gradientCircle();
    gradientCircle2();
    createChart();
  }
  init();

  function addActiveClassForCard() {
    $(".card_plan").each((i, e) => {
      $(e).click(() => {
        $(".card_plan").removeClass("active");
        $(e).addClass("active");
      });
    });
  }

  function gradientCircle() {
    var count = $(".c1");
    $({ Counter: 0 }).animate(
      { Counter: 8.27 },
      {
        duration: 1000,
        easing: "swing",
        step: function () {
          count.html(this.Counter.toFixed(2));
        },
      }
    );

    var s = Snap(".animated");
    var progress = s.select("#progress");
    var one100procent = "251.2";
    progress.attr({ strokeDasharray: "0, " + one100procent });
    Snap.animate(
      0,
      200.2,
      function (value) {
        progress.attr({ "stroke-dasharray": value + "," + one100procent });
      },
      1000
    );
  }
  function gradientCircle2() {
    var count = $(".c2");
    $({ Counter: 0 }).animate(
      { Counter: 20 },
      {
        duration: 1000,
        easing: "swing",
        step: function () {
          count.html(this.Counter.toFixed(0));
        },
      }
    );

    var s = Snap(".animated2");
    var progress = s.select("#progress2");
    var one100procent = "251.2";
    progress.attr({ strokeDasharray: "0, " + one100procent });
    Snap.animate(
      0,
      100.2,
      function (value) {
        progress.attr({ "stroke-dasharray": value + "," + one100procent });
      },
      1000
    );
  }
  function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d"),
      gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradientd = ctx.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, "rgba(31, 107, 211, 0.8)");
    gradient.addColorStop(0.64, "rgba(23, 175, 255, 0)");
    gradient.addColorStop(1, "rgba(23, 175, 255, 0)");
    gradientd.addColorStop(0, "rgba(242, 202, 80, 0.5)");
    gradientd.addColorStop(0.64, "rgba(242, 202, 80, 0.25)");
    gradientd.addColorStop(1, "rgba(242, 202, 80, 0)");


    var chartData  = [

      {
        x: 1,
        y: 0
      },
      {
        x: 1.25,
        y: 10
      },
      {
        x: 1.3,
        y: 5
      },
      {
        x: 1.4,
        y: 6
      },
      {
        x: 1.5,
        y: 13
      },
      {
        x: 1.8,
        y: 12
      },
      {
        x: 2,
        y: 13
      },
      {
        x: 2.2,
        y: 13
      },
      {
        x: 2.4,
        y: 14
      },
      {
        x: 2.6,
        y: 13
      },
      {
        x: 2.8,
        y: 18
      },
      {
        x: 3,
        y: 9
      },
      {
        x: 4,
        y: 10
      },
      {
        x: 5,
        y: 9
      },
      {
        x: 5.125,
        y: 10
      },
      {
        x: 5.25,
        y: 11
      },
      {
        x: 5.375,
        y: 12
      },
      {
        x: 5.5,
        y: 14
      },
      {
        x: 6.0,
        y: 12
      },
      {
        x: 6.250,
        y: 13
      },
      {
        x: 6.5,
        y: 7
      },
      {
        x: 6.65,
        y: 8
      },
      {
        x: 6.875,
        y: 6
      },
      {
        x: 7,
        y: 12
      },
      {
        x: 7.125,
        y: 14
      },
      {
        x: 7.25,
        y: 18
      },
    ];
    var data = {
      labels: [
        "12/05",
        "12/06",
        "12/07",
        "12/08",
        "12/09",
        "12/10",
        "12/11",
        "12/12",
      ],
      datasets: [
        {
          backgroundColor: gradient,
          borderColor: "#1f6bd3",
          borderWidth: 1,
          pointRadius: 10,
          pointHoverRadius: 8,
          toolTipContent: null,
          pointBorderColor: "rgba(0,0,0,0.00001)",
          pointHoverBorderColor: "rgba(255,255,255,1)",
          pointHoverBorderWidth: 3,
          pointBackgroundColor: "rgba(0,0,0,0.00001)",
          pointHoverBackgroundColor: "#1f6bd3",
          data: chartData,
        },
      ],
    };

    const customTooltip = {
      mode: "index",
      enabled: false,
      custom: function (model) {
        const tooltip = document.getElementById("tooltip");
          $("body").mousemove((e) => {
            if (model.opacity === 0) {
          tooltip.style.opacity = 0;
          return;
        }

            if (model.body) {
          const title =
            "<strong>" + chartData[model.dataPoints[0].index].y + " <span>GB</span></strong>";

          tooltip.innerHTML = title;

          tooltip.style.left = "auto";
          tooltip.style.right = "auto";

          const pos = this._chart.canvas.getBoundingClientRect();

          tooltip.style.left =
            pos.left + model.caretX - $("#tooltip").width() + 10 + "px";

          tooltip.style.top = -50 + e.pageY + "px";
          tooltip.style.opacity = 1;
      }
    })

      },
    };

    var options = {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        easing: "easeInOutQuad",
        duration: 1000,
      },

      hover: {
        mode: "nearest",
        intersect: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: "rgba(222,222,222,0.5)",
              drawBorder: false,
              zeroLineWidth: 0,
              zeroLineColor:'rgba(222,222,222,0.5)'
            },
            ticks: {
              padding: 15,
              stepSize:5,
              callback: (e) => {
                return e + " GB";
              },
              fontColor: "#9d9b9b",
              autoSkip: true,
              fontStyle: "",
              maxRotation: 50,
              minRotation: 0,
              fontSize: 9,
            },
          },
        ],

        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawBorder: false,
              zeroLineWidth: 0,
              lineWidth: 1,
              zeroLineColor:'rgba(222,222,222,0.0)'
            },
            ticks: {
              padding: 15,
              fontColor: "#9d9b9b",
              align: "inner",
              autoSkip: true,
              fontStyle: "",
              maxRotation: 50,
              minRotation: 0,
              fontSize: 9,
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0.4,
        },
      },
      legend: {
        display: false,
      },

      tooltips: customTooltip,
    };

    var plugins = [
      {
        afterDraw: (chart) => {
          if (chart.tooltip?._active?.length) {
            let x = chart.tooltip._active[0]._model.x;
            let y = chart.tooltip._active[0]._model.y;
            console.log(y)
            var gradienTooltip = ctx.createLinearGradient(0, y + 10, 0, 275);
            gradienTooltip.addColorStop(0, "#122d5f");
            gradienTooltip.addColorStop(0.8, "rgba(18, 45, 95, 0.1)");
            gradienTooltip.addColorStop(1, "rgba(18, 45, 95, 0)");
            ctx.lineWidth = 1;
            ctx.strokeStyle = gradienTooltip;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, y + 10);
            ctx.lineTo(x, 275);
            ctx.stroke();
            ctx.restore();
          }
        },
      },
    ];
    new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
      plugins: plugins,
    });
  }
});
