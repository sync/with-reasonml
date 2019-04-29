workflow "Build, Test, and Publish" {
  on = "push"
  resolves = [
    "Install",
    "Test",
    "Snapshot UI",
    "End to End"
  ]
}

action "Install" {
  uses = "./workflows/action-puppeteer/"
  args = "install"
}

action "Test" {
  uses = "./workflows/action-puppeteer/"
  needs = ["Install"]
  args = "ci"
}

action "Snapshot UI" {
  uses = "./workflows/action-puppeteer/"
  needs = ["Test"]
  args = "snapshot-ui"
  secrets = ["PERCY_TOKEN"]
}

action "End to End" {
  uses = "./workflows/action-puppeteer/"
  needs = ["Test"]
  args = "e2e"
}
