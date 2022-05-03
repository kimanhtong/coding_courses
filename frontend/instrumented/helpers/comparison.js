function cov_1rgzo1lt1n() {
  var path = "/vagrant/PostLHL/ReactOnRails/onlineCourses/coding_courses/frontend/src/helpers/comparison.js";
  var hash = "ebba9e7d53c57604e3528d314d74716aa7221a3b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/vagrant/PostLHL/ReactOnRails/onlineCourses/coding_courses/frontend/src/helpers/comparison.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 32
        }
      },
      "2": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 32
        }
      },
      "3": {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 4,
          column: 18
        }
      },
      "4": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "5": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 18
        }
      },
      "6": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 12,
          column: 7
        }
      },
      "7": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 11,
          column: 7
        }
      },
      "8": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 29
        }
      },
      "9": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 18
          },
          end: {
            line: 1,
            column: 19
          }
        },
        loc: {
          start: {
            line: 1,
            column: 34
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 8,
            column: 18
          }
        },
        loc: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        }, {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        }, {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        }],
        line: 9
      },
      "2": {
        loc: {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 9,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 11
          },
          end: {
            line: 9,
            column: 30
          }
        }, {
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 59
          }
        }],
        line: 9
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ebba9e7d53c57604e3528d314d74716aa7221a3b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rgzo1lt1n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1rgzo1lt1n();
cov_1rgzo1lt1n().s[0]++;

const isSameObj = (obj1, obj2) => {
  cov_1rgzo1lt1n().f[0]++;
  const arr1 = (cov_1rgzo1lt1n().s[1]++, Object.keys(obj1));
  const arr2 = (cov_1rgzo1lt1n().s[2]++, Object.keys(obj2));
  let check = (cov_1rgzo1lt1n().s[3]++, true);
  cov_1rgzo1lt1n().s[4]++;

  if (arr1.length !== arr2.length) {
    cov_1rgzo1lt1n().b[0][0]++;
    cov_1rgzo1lt1n().s[5]++;
    check = false;
  } else {
    cov_1rgzo1lt1n().b[0][1]++;
    cov_1rgzo1lt1n().s[6]++;
    arr1.forEach((val, index) => {
      cov_1rgzo1lt1n().f[1]++;
      cov_1rgzo1lt1n().s[7]++;

      if ((cov_1rgzo1lt1n().b[2][0]++, arr2[index] !== val) || (cov_1rgzo1lt1n().b[2][1]++, obj1[val] !== obj2[val])) {
        cov_1rgzo1lt1n().b[1][0]++;
        cov_1rgzo1lt1n().s[8]++;
        return check = false;
      } else {
        cov_1rgzo1lt1n().b[1][1]++;
      }
    });
  }

  cov_1rgzo1lt1n().s[9]++;
  return check;
};

export default isSameObj;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1NhbWVPYmoiLCJvYmoxIiwib2JqMiIsImFycjEiLCJPYmplY3QiLCJrZXlzIiwiYXJyMiIsImNoZWNrIiwibGVuZ3RoIiwiZm9yRWFjaCIsInZhbCIsImluZGV4Il0sInNvdXJjZXMiOlsiY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1NhbWVPYmogPSAob2JqMSwgb2JqMikgPT4ge1xuICBjb25zdCBhcnIxID0gT2JqZWN0LmtleXMob2JqMSk7XG4gIGNvbnN0IGFycjIgPSBPYmplY3Qua2V5cyhvYmoyKTtcbiAgbGV0IGNoZWNrID0gdHJ1ZTtcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkge1xuICAgIGNoZWNrID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgYXJyMS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoKGFycjJbaW5kZXhdICE9PSB2YWwpIHx8IChvYmoxW3ZhbF0gIT09IG9iajJbdmFsXSkpIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNoZWNrO1xufTtcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZU9iajsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTs7Ozs7Ozs7Ozs7QUFmWixNQUFNQSxTQUFTLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEtBQWdCO0VBQUE7RUFDaEMsTUFBTUMsSUFBSSw2QkFBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLElBQVosQ0FBSCxDQUFWO0VBQ0EsTUFBTUssSUFBSSw2QkFBR0YsTUFBTSxDQUFDQyxJQUFQLENBQVlILElBQVosQ0FBSCxDQUFWO0VBQ0EsSUFBSUssS0FBSyw2QkFBRyxJQUFILENBQVQ7RUFIZ0M7O0VBSWhDLElBQUlKLElBQUksQ0FBQ0ssTUFBTCxLQUFnQkYsSUFBSSxDQUFDRSxNQUF6QixFQUFpQztJQUFBO0lBQUE7SUFDL0JELEtBQUssR0FBRyxLQUFSO0VBQ0QsQ0FGRCxNQUVPO0lBQUE7SUFBQTtJQUNMSixJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7TUFBQTtNQUFBOztNQUMzQixJQUFJLDZCQUFDTCxJQUFJLENBQUNLLEtBQUQsQ0FBSixLQUFnQkQsR0FBakIsa0NBQTBCVCxJQUFJLENBQUNTLEdBQUQsQ0FBSixLQUFjUixJQUFJLENBQUNRLEdBQUQsQ0FBNUMsQ0FBSixFQUF3RDtRQUFBO1FBQUE7UUFDdEQsT0FBT0gsS0FBSyxHQUFHLEtBQWY7TUFDRCxDQUZEO1FBQUE7TUFBQTtJQUdELENBSkQ7RUFLRDs7RUFaK0I7RUFhaEMsT0FBT0EsS0FBUDtBQUNELENBZEQ7O0FBZUEsZUFBZVAsU0FBZiJ9