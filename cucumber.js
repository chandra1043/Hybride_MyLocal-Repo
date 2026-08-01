module.exports = {
  default: {
        paths:["features/**/*.feature"],
        requireModule:["tsx/cjs"],
        require: ["Step-Defination/**/*.ts"],
        format:[
            "progress",
            "html:reports/cucumber-report.html"
        ]

  }

};