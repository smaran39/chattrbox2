(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _wsClient = require('./ws-client');

        var _wsClient2 = _interopRequireDefault(_wsClient);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var ChatApp = function ChatApp() {
            _classCallCheck(this, ChatApp);

            //console.log('Hello ES6!');
            _wsClient2.default.init('ws://localhost:3001');
            _wsClient2.default.registerOpenHandler(function() {
                var message = new ChatMessage({
                    message: 'pow!'
                });
                _wsClient2.default.sendMessage(message.serialize());
            });
            _wsClient2.default.registerMessageHandler(function(data) {
                console.log(data);
            });
        };

        var ChatMessage = function() {
            function ChatMessage(_ref) {
                var m = _ref.message,
                    _ref$user = _ref.user,
                    u = _ref$user === undefined ? 'batman' : _ref$user,
                    _ref$timestamp = _ref.timestamp,
                    t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

                _classCallCheck(this, ChatMessage);

                this.message = m;
                this.user = u;
                this.timestamp = t;
            }

            _createClass(ChatMessage, [{
                key: 'serialize',
                value: function serialize() {
                    return {
                        user: this.user,
                        message: this.message,
                        timestamp: this.timestamp
                    };
                }
            }]);

            return ChatMessage;
        }();

        exports.default = ChatApp;

    }, {
        "./ws-client": 3
    }],
    2: [function(require, module, exports) {
        'use strict';

        var _app = require('./app');

        var _app2 = _interopRequireDefault(_app);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        new _app2.default();

    }, {
        "./app": 1
    }],
    3: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var socket = void 0;

        function init(url) {
            socket = new WebSocket(url);
            console.log('Connecting...');
        }

        function registerOpenHandler(handlerFunction) {
            socket.onopen = function() {
                console.log('open');
                handlerFunction();
            };
        }

        function registerMessageHandler(handlerFunction) {
            socket.onmessage = function(e) {
                console.log('message', e.data);
                var data = JSON.parse(e.data);
                handlerFunction(data);
            };
        }

        function sendMessage(payload) {
            socket.send(JSON.stringify(payload));
        }

        exports.default = {
            init: init,
            registerOpenHandler: registerOpenHandler,
            registerMessageHandler: registerMessageHandler,
            sendMessage: sendMessage
        };

    }, {}]
}, {}, [2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcYXBwLmpzIiwiYXBwXFxzY3JpcHRzXFxzcmNcXG1haW4uanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVjtBQUNBLHVCQUFPLElBQVAsQ0FBWSxxQkFBWjtBQUNBLHVCQUFPLG1CQUFQLENBQTJCLFlBQU07QUFDN0IsWUFBSSxVQUFVLElBQUksV0FBSixDQUFnQjtBQUMxQixxQkFBUztBQURpQixTQUFoQixDQUFkO0FBR0EsMkJBQU8sV0FBUCxDQUFtQixRQUFRLFNBQVIsRUFBbkI7QUFDSCxLQUxEO0FBTUEsdUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDcEMsZ0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSCxLQUZEO0FBR0gsQzs7SUFFQyxXO0FBQ0YsK0JBSUc7QUFBQSxZQUhVLENBR1YsUUFIQyxPQUdEO0FBQUEsNkJBRkMsSUFFRDtBQUFBLFlBRk8sQ0FFUCw2QkFGVyxRQUVYO0FBQUEsa0NBREMsU0FDRDtBQUFBLFlBRFksQ0FDWixrQ0FEaUIsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ2hCOztBQUFBOztBQUNDLGFBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7b0NBQ1c7QUFDUixtQkFBTztBQUNILHNCQUFNLEtBQUssSUFEUjtBQUVILHlCQUFTLEtBQUssT0FGWDtBQUdILDJCQUFXLEtBQUs7QUFIYixhQUFQO0FBS0g7Ozs7OztrQkFHVSxPOzs7OztBQ3BDZjs7Ozs7O0FBQ0E7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsV0FBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM1QyxTQUFPLE1BQVAsR0FBYyxZQUFLO0FBQ2pCLFlBQVEsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNELEdBSEQ7QUFJRDtBQUNELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDL0MsU0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3hCLFlBQVEsR0FBUixDQUFZLFNBQVosRUFBc0IsRUFBRSxJQUF4QjtBQUNBLFFBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLElBQWIsQ0FBWDtBQUNBLG9CQUFnQixJQUFoQjtBQUNELEdBSkQ7QUFLRDtBQUNELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBRWE7QUFDWixZQURZO0FBRVosMENBRlk7QUFHWixnREFIWTtBQUlaO0FBSlksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50J1xyXG5cclxuY2xhc3MgQ2hhdEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdIZWxsbyBFUzYhJyk7XHJcbiAgICAgICAgc29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcclxuICAgICAgICBzb2NrZXQucmVnaXN0ZXJPcGVuSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwb3chJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc29ja2V0LnNlbmRNZXNzYWdlKG1lc3NhZ2Uuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIENoYXRNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBtZXNzYWdlOiBtLFxyXG4gICAgICAgIHVzZXI6IHUgPSAnYmF0bWFuJyxcclxuICAgICAgICB0aW1lc3RhbXA6IHQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1O1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcclxuICAgIH1cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7XHJcbiIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcclxubmV3IENoYXRBcHAoKTtcclxuIiwibGV0IHNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIGluaXQodXJsKSB7XHJcbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gIGNvbnNvbGUubG9nKCdDb25uZWN0aW5nLi4uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgc29ja2V0Lm9ub3Blbj0oKSA9PntcclxuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XHJcbiAgICBoYW5kbGVyRnVuY3Rpb24oKTtcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsZS5kYXRhKTtcclxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCkge1xyXG4gIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgaW5pdCxcclxuICByZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG4gIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXHJcbiAgc2VuZE1lc3NhZ2VcclxufVxyXG4iXX0=
