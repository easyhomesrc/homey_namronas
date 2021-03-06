'use strict'

const SrZigBeeDriver = require('../../lib/SrZigBeeDriver')

class MyDriver extends SrZigBeeDriver {

  onInit () {
    super.onInit()

    this.getDeviceTriggerCard('4512703_on').
      registerRunListener(async (args, state) => {
        return args.group === state.group
      })

    this.getDeviceTriggerCard('4512703_off').
      registerRunListener(async (args, state) => {
        return args.group === state.group
      })

    this.getDeviceTriggerCard('4512703_level_move_with_onoff').
      registerRunListener(async (args, state) => {
        return args.group === state.group
      })

    this.getDeviceTriggerCard('4512703_level_stop_with_onoff').
      registerRunListener(async (args, state) => {
        return args.group === state.group
      })

  }

}

module.exports = MyDriver
