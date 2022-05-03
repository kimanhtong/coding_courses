function cov_h40sky4l8() {
  var path = "/vagrant/PostLHL/ReactOnRails/onlineCourses/coding_courses/frontend/src/reportWebVitals.js";
  var hash = "e601bae1706e3ae909227cbdf43460d0ea44a80c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/vagrant/PostLHL/ReactOnRails/onlineCourses/coding_courses/frontend/src/reportWebVitals.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 9,
          column: 7
        }
      },
      "3": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "4": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "5": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 26
        }
      },
      "6": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 26
        }
      },
      "7": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 79
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 17
          }
        }, {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 2,
            column: 52
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e601bae1706e3ae909227cbdf43460d0ea44a80c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_h40sky4l8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_h40sky4l8();
cov_h40sky4l8().s[0]++;

const reportWebVitals = onPerfEntry => {
  cov_h40sky4l8().f[0]++;
  cov_h40sky4l8().s[1]++;

  if ((cov_h40sky4l8().b[1][0]++, onPerfEntry) && (cov_h40sky4l8().b[1][1]++, onPerfEntry instanceof Function)) {
    cov_h40sky4l8().b[0][0]++;
    cov_h40sky4l8().s[2]++;
    import('web-vitals').then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      cov_h40sky4l8().f[1]++;
      cov_h40sky4l8().s[3]++;
      getCLS(onPerfEntry);
      cov_h40sky4l8().s[4]++;
      getFID(onPerfEntry);
      cov_h40sky4l8().s[5]++;
      getFCP(onPerfEntry);
      cov_h40sky4l8().s[6]++;
      getLCP(onPerfEntry);
      cov_h40sky4l8().s[7]++;
      getTTFB(onPerfEntry);
    });
  } else {
    cov_h40sky4l8().b[0][1]++;
  }
};

export default reportWebVitals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXBvcnRXZWJWaXRhbHMiLCJvblBlcmZFbnRyeSIsIkZ1bmN0aW9uIiwidGhlbiIsImdldENMUyIsImdldEZJRCIsImdldEZDUCIsImdldExDUCIsImdldFRURkIiXSwic291cmNlcyI6WyJyZXBvcnRXZWJWaXRhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwb3J0V2ViVml0YWxzID0gb25QZXJmRW50cnkgPT4ge1xuICBpZiAob25QZXJmRW50cnkgJiYgb25QZXJmRW50cnkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGSUQob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZOzs7Ozs7Ozs7OztBQWZaLE1BQU1BLGVBQWUsR0FBR0MsV0FBVyxJQUFJO0VBQUE7RUFBQTs7RUFDckMsSUFBSSw0QkFBQUEsV0FBVyxpQ0FBSUEsV0FBVyxZQUFZQyxRQUEzQixDQUFmLEVBQW9EO0lBQUE7SUFBQTtJQUNsRCxPQUFPLFlBQVAsRUFBcUJDLElBQXJCLENBQTBCLENBQUM7TUFBRUMsTUFBRjtNQUFVQyxNQUFWO01BQWtCQyxNQUFsQjtNQUEwQkMsTUFBMUI7TUFBa0NDO0lBQWxDLENBQUQsS0FBaUQ7TUFBQTtNQUFBO01BQ3pFSixNQUFNLENBQUNILFdBQUQsQ0FBTjtNQUR5RTtNQUV6RUksTUFBTSxDQUFDSixXQUFELENBQU47TUFGeUU7TUFHekVLLE1BQU0sQ0FBQ0wsV0FBRCxDQUFOO01BSHlFO01BSXpFTSxNQUFNLENBQUNOLFdBQUQsQ0FBTjtNQUp5RTtNQUt6RU8sT0FBTyxDQUFDUCxXQUFELENBQVA7SUFDRCxDQU5EO0VBT0QsQ0FSRDtJQUFBO0VBQUE7QUFTRCxDQVZEOztBQVlBLGVBQWVELGVBQWYifQ==