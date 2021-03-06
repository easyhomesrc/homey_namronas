'use strict'

const SrZwaveDriver = require('../../lib/SrZwaveDriver')

class MyDriver extends SrZwaveDriver {

  onInit () {
    super.onInit()

    this.allOnFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_all_on')
    this.allOnFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.allOffFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_all_off')
    this.allOffFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.allOnKeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_all_on_key_held_down')
    this.allOnKeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.allOnKeyReleasedFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_all_on_key_released')
    this.allOnKeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.allOffKeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_all_off_key_held_down')
    this.allOffKeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.allOffKeyReleasedFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_all_off_key_released')
    this.allOffKeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.onFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_on')
    this.onFlowTrigger.registerRunListener(async (args, state) => {
      return args.group === state.group
    })

    this.offFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_off')
    this.offFlowTrigger.registerRunListener(async (args, state) => {
      return args.group === state.group
    })

    this.onKeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_on_key_held_down')
    this.onKeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return args.group === state.group
    })

    this.onKeyReleasedFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_on_key_released')
    this.onKeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return args.group === state.group
    })

    this.offKeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_off_key_held_down')
    this.offKeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return args.group === state.group
    })

    this.offKeyReleasedFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_off_key_released')
    this.offKeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return args.group === state.group
    })

    this.s1FlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_scene_1')
    this.s1FlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.s2FlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_scene_2')
    this.s2FlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.s1KeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_scene_1_key_held_down')
    this.s1KeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.s1KeyReleasedFlowTrigger = this.getDeviceTriggerCard('ZW_Remote_4_scene_1_key_released')
    this.s1KeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.s2KeyHeldDownFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_scene_2_key_held_down')
    this.s2KeyHeldDownFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })

    this.s2KeyReleasedFlowTrigger = this.getDeviceTriggerCard(
      'ZW_Remote_4_scene_2_key_released')
    this.s2KeyReleasedFlowTrigger.registerRunListener(async (args, state) => {
      return true
    })
  }
}

module.exports = MyDriver
