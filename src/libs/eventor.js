// Events
// -----------------
// Thanks to:
//  - https://github.com/documentcloud/backbone/blob/master/backbone.js
//  - https://github.com/joyent/node/blob/master/lib/events.js

// Regular expression used to split event strings
var eventSplitter = /\s+/

// A module that can be mixed in to *any object* in order to provide it
// with custom events. You may bind with `on` or remove with `off` callback
// functions to an event; `trigger`-ing an event fires all callbacks in
// succession.
//
// var object = new Events();
// object.on('expand', function(){ alert('expanded'); });
// object.trigger('expand');
//
function Events () {
}

// Bind one or more space separated events, `events`, to a `callback`
// function. Passing `"all"` will bind the callback to all events fired.
Events.prototype.on = function (events, callback, context) {
  var cache, event, list
  if (!callback) return this

  cache = this.__events || (this.__events = {})
  events = events.split(eventSplitter)
  while (event = events.shift()) { // eslint-disable-line
    list = cache[event] || (cache[event] = [])
    list.push(callback, context)
  }

  return this
}

Events.prototype.once = function (events, callback, context) {
  var that = this
  var cb = function () {
    that.off(events, cb)
    callback.apply(context || that, arguments)
  }
  return this.on(events, cb, context)
}

// Remove one or many callbacks. If `context` is null, removes all callbacks
// with that function. If `callback` is null, removes all callbacks for the
// event. If `events` is null, removes all bound callbacks for all events.
Events.prototype.off = function (events, callback, context) {
  var cache, event, list, i

  // No events, or removing *all* events.
  if (!(cache = this.__events)) return this
  if (!(events || callback || context)) {
    delete this.__events
    return this
  }

  events = events ? events.split(eventSplitter) : keys(cache)

  // Loop through the callback list, splicing where appropriate.
  while (event = events.shift()) { // eslint-disable-line
    list = cache[event]
    if (!list) continue

    if (!(callback || context)) {
      delete cache[event]
      continue
    }

    for (i = list.length - 2; i >= 0; i -= 2) {
      if (!(callback && list[i] !== callback ||
          context && list[i + 1] !== context)) {
        list.splice(i, 2)
      }
    }
  }

  return this
}

// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
Events.prototype.trigger = function (events) {
  var cache, event, all, list, i, len
  var rest = []
  var returned = true
  if (!(cache = this.__events)) return this

  events = events.split(eventSplitter)

  // Fill up `rest` with the callback arguments.  Since we're only copying
  // the tail of `arguments`, a loop is much faster than Array#slice.
  for (i = 1, len = arguments.length; i < len; i++) {
    rest[i - 1] = arguments[i]
  }

  // For each event, walk through the list of callbacks twice, first to
  // trigger the event, then to trigger any `"all"` callbacks.
  while (event = events.shift()) { // eslint-disable-line
    // Copy callback lists to prevent modification.
    if (all = cache.all) all = all.slice() // eslint-disable-line
    if (list = cache[event]) list = list.slice() // eslint-disable-line

    // Execute event callbacks except one named "all"
    if (event !== 'all') {
      returned = triggerEvents(list, rest, this) && returned
    }

    // Execute "all" callbacks.
    returned = triggerEvents(all, [event].concat(rest), this) && returned
  }

  return returned
}

Events.prototype.emit = Events.prototype.trigger

// Helpers
// -------

var keys = Object.keys

if (!keys) {
  keys = function (o) {
    var result = []

    for (var name in o) {
      if (o.hasOwnProperty(name)) {
        result.push(name)
      }
    }
    return result
  }
}

// Mix `Events` to object instance or Class function.
Events.mixTo = function (receiver) {
  var proto = Events.prototype

  if (isFunction(receiver)) {
    for (let key in proto) {
      if (proto.hasOwnProperty(key)) {
        receiver.prototype[key] = proto[key]
      }
    }
  } else {
    var event = new Events()
    for (let key in proto) {
      if (proto.hasOwnProperty(key)) {
        copyProto(key)
      }
    }
  }

  function copyProto (key) {
    receiver[key] = function () {
      proto[key].apply(event, Array.prototype.slice.call(arguments))
      return this
    }
  }
}

// Execute callbacks
function triggerEvents (list, args, context) {
  var pass = true

  if (list) {
    var i = 0
    var l = list.length
    var a1 = args[0]
    var a2 = args[1]
    var a3 = args[2]
    // call is faster than apply, optimize less than 3 argu
    // http://blog.csdn.net/zhengyinhui100/article/details/7837127
    switch (args.length) {
      case 0: for (; i < l; i += 2) {pass = list[i].call(list[i + 1] || context) !== false && pass} break
      case 1: for (; i < l; i += 2) {pass = list[i].call(list[i + 1] || context, a1) !== false && pass} break
      case 2: for (; i < l; i += 2) {pass = list[i].call(list[i + 1] || context, a1, a2) !== false && pass} break
      case 3: for (; i < l; i += 2) {pass = list[i].call(list[i + 1] || context, a1, a2, a3) !== false && pass} break
      default: for (; i < l; i += 2) {pass = list[i].apply(list[i + 1] || context, args) !== false && pass} break
    }
  }
  // trigger will return false if one of the callbacks return false
  return pass
}

function isFunction (func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}

export default Events
