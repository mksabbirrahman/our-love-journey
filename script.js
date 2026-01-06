// Total milestones = 4
const completedMilestones = 3; // update when needed

const progressPercent = (completedMilestones / 4) * 100;

document.getElementById("progressFill").style.width = progressPercent + "%";

document.getElementById("progressText").innerText =
  Math.round(progressPercent) + "% of our journey completed 💕";
