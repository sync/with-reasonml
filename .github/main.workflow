workflow "Build, Test, and Publish" {
  on = "push"
  resolves = [
    "Install",
    "Test"
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
