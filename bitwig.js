var addDevice = false;

function init() {
  script.log("bitwig module loaded");
  local.send("/refresh");
}

function moduleParameterChanged(param) {
  if(param.name == "addSelectedDevice") addSelectedDevice();
}

function moduleValueChanged(val) {
  if(val.name == "page") changePage(val.get());
}
function oscEvent(address, args) {
  if(address == "/play") local.values.transport.isPlaying.set(args[0]);
  else if(address == "/tempo/raw") local.values.transport.bpm.set(args[0]);
  else if(address == "/beat/str") {
    var args = args[0].split(":")[0].split(".");
    local.values.transport.curBar.set(parseInt(args[0]));
    local.values.transport.curBeat.set(parseInt(args[1]));
  }
  else if(address == "/master/vu")  local.values.meters.master.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/1/vu") local.values.meters.track1.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/2/vu") local.values.meters.track2.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/3/vu") local.values.meters.track3.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/4/vu") local.values.meters.track4.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/5/vu") local.values.meters.track5.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/6/vu") local.values.meters.track6.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/7/vu") local.values.meters.track7.set(args[0] / local.parameters.resolution.get());
  else if(address == "/track/8/vu") local.values.meters.track8.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/1/name") local.values.project.param1.setName(args[0].length ? args[0] : "param1", "param1");
  else if(address == "/project/param/1/value") local.values.project.param1.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/1/modulatedValue") local.values.project.param1.modulatedValue.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/2/name") local.values.project.param2.setName(args[0].length ? args[0] : "param2", "param2");
  else if(address == "/project/param/2/value") local.values.project.param2.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/2/modulatedValue") local.values.project.param2.modulatedValue.set(args[0] / local.parameters.resolution.get());
  
  else if(address == "/project/param/3/name") local.values.project.param3.setName(args[0].length ? args[0] : "param3", "param3");
  else if(address == "/project/param/3/value") local.values.project.param3.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/3/modulatedValue") local.values.project.param3.modulatedValue.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/4/name") local.values.project.param4.setName(args[0].length ? args[0] : "param4", "param4");
  else if(address == "/project/param/4/value") local.values.project.param4.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/4/modulatedValue") local.values.project.param4.modulatedValue.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/5/name") local.values.project.param5.setName(args[0].length ? args[0] : "param5", "param5");
  else if(address == "/project/param/5/value") local.values.project.param5.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/5/modulatedValue") local.values.project.param5.modulatedValue.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/6/name") local.values.project.param6.setName(args[0].length ? args[0] : "param6", "param6");
  else if(address == "/project/param/6/value") local.values.project.param6.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/6/modulatedValue") local.values.project.param6.modulatedValue.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/7/name") local.values.project.param7.setName(args[0].length ? args[0] : "param7", "param7");
  else if(address == "/project/param/7/value") local.values.project.param7.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/7/modulatedValue") local.values.project.param7.modulatedValue.set(args[0] / local.parameters.resolution.get());

  else if(address == "/project/param/8/name") local.values.project.param8.setName(args[0].length ? args[0] : "param8", "param8");
  else if(address == "/project/param/8/value") local.values.project.param8.value.set(args[0] / local.parameters.resolution.get());
  else if(address == "/project/param/8/modulatedValue") local.values.project.param8.modulatedValue.set(args[0] / local.parameters.resolution.get());
}

function addSelectedDevice() {
  script.log("add");
  local.send("/refresh");
}

function changePage(page) {
  local.send("/project/page/" + page);
}