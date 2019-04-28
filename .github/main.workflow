workflow "Build, Test, and Publish" {
  on = "push"
  resolves = [
    "Install",
    "Test",
    "Snapshot UI"
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
